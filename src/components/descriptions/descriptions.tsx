import classnames from 'classnames';
import React from 'react';
import { chunk, get } from 'lodash'
import type { DescriptionsProps } from './type';
import type { FC } from 'react';
import { ColumnType } from '../table/type';

import './index.less';

const Descriptions: FC<DescriptionsProps> = (props) => {
  const { column = 3, dataSource, columns, style, className, bordered } = props;
  const prefixCls = 'hz-descriptions';
  const classes = classnames(prefixCls, {
    [`${prefixCls}-bordered`]: bordered
  }, className);

  const rows = chunk(columns, column);

  const renderCell = (column: ColumnType<any>, index: number) => {
    const { dataIndex, title, render } = column;
    let data = null;
    if (dataIndex instanceof Array) {
      data = dataIndex.map(key => get(dataSource, key))
    } else if (dataIndex) {
      data = get(dataSource, dataIndex)
    }
    const inner = render ? render(data, dataSource, index) : data;
    if (bordered) {
      return (
        <React.Fragment key={index}>
          <th className={`${prefixCls}-cell ${prefixCls}-cell-label`}>{title}</th>
          <td className={`${prefixCls}-cell ${prefixCls}-cell-content`}>{inner}</td>
        </React.Fragment>
      )
    }
    return (
      <td className={`${prefixCls}-cell`} key={index}>
        <div className={`${prefixCls}-cell-wrapper`}>
          <div className={`${prefixCls}-cell-label`}>{title}</div>
          <div className={`${prefixCls}-cell-content`}>{inner}</div>
        </div>
      </td>
    )
  }

  return (
    <div className={classes} style={style}>
      <table className={`${prefixCls}-table`}>
        <tbody>
          {
            rows?.map((cells, index) => {
              return (
                <tr key={index} className={`${prefixCls}-row`}>
                  {
                    cells.map((cell, i) => {
                      return renderCell(cell, i)
                    })
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default Descriptions;