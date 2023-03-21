import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { get } from 'lodash'
import type { TableProps } from './type'
import type { FC } from 'react';

import './index.less';

const Table: FC<TableProps> = (props) => {
  const prefixCls = 'hz-table';
  const {
    dataSource,
    bordered,
    className,
    columns,
    style,
    header,
    footer,
    renderEmpty,
  } = props;

  const classes = classnames(prefixCls, {
    [`${prefixCls}-bordered`]: bordered
  }, className);


  const renderCell = (record?: Record<string, any>) => {
    if (!record) {
      return columns?.map((column, index) => {
        return (
          <td key={index} className={`${prefixCls}-cell`}>{column?.title}</td>
        )
      })
    }
    return columns?.map((column, index) => {
      const { align, dataIndex, render } = column;
      let data = null;
      if (dataIndex instanceof Array) {
        data = dataIndex.map(key => get(record, key))
      } else if (dataIndex) {
        data = get(record, dataIndex || '')
      }
      const inner = render ? render(data, record || {}, index) : data;
      return (
        <td key={index} className={`${prefixCls}-cell`} style={{ textAlign: align || 'left' }}>{inner}</td>
      )
    }) || <td></td>
  }

  const renderTableBody = () => {
    if (!dataSource?.length) {
      let emptyJsx: ReactNode = 'no data'
      if (renderEmpty) {
        emptyJsx = renderEmpty()
      }
      return (
        <tr className={`${prefixCls}-row`}>
          <td className={`${prefixCls}-empty`} colSpan={columns?.length || 0}>{emptyJsx}</td>
        </tr>
      )
    }
    return dataSource?.map((record, index) => {
      return (
        <tr key={index} className={`${prefixCls}-row`}>
          {renderCell(record)}
        </tr>
      )
    })
  }

  return (
    <div className={classes} style={style}>
      {header && <div className={`${prefixCls}-header`}>{header}</div>}
      <table>
        <thead className={`${prefixCls}-thead`}>
          <tr className={`${prefixCls}-row`}>
            {renderCell()}
          </tr>
        </thead>
        <tbody className={`${prefixCls}-tbody`}>
          {renderTableBody()}
        </tbody>
      </table>
      {footer && <div className={`${prefixCls}-header`}>{footer}</div>}
    </div>
  )
}

export default Table;