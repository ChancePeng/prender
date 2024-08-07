import classnames from 'classnames';
import { get } from 'lodash';
import React, { useContext } from 'react';
import ConfigContext from '../ConfigContext';

import './index.less';

import type { PFC } from '../type';
import { TableProps } from './type';

import type { TableColumnType } from './type';

const TableColumn: PFC<TableProps> = (props) => {
  const {
    className,
    columns,
    bordered,
    dataSource,
    style,
    columnEmptyText,
    id,
    htmlAttributes,
  } = props;
  const prefixCls = 'pfc-table';
  const { renderEmpty, columnEmptyText: globalColumnEmptyText } =
    useContext(ConfigContext);

  const emptyText = columnEmptyText ?? globalColumnEmptyText;

  const classes = classnames(
    prefixCls,
    `${prefixCls}-column`,
    {
      [`${prefixCls}-bordered`]: bordered,
    },
    className,
  );

  const renderCell = (
    column: TableColumnType<Record<string, any>>,
    index: number,
  ) => {
    const { dataIndex, render, align } = column;
    return dataSource?.map((record, i) => {
      let data = null;
      if (dataIndex instanceof Array) {
        data = dataIndex.map((item) => get(record, item));
      } else if (dataIndex) {
        data = get(record, dataIndex);
      }
      const inner = render ? render(data, record, index) : data;
      const content = emptyText ? inner ?? emptyText : inner;

      const { rowSpan = 1, colSpan = 1 } = column;
      if (colSpan === 0 || rowSpan === 0) {
        return <></>;
      }
      return (
        <td
          key={i}
          className={`${prefixCls}-cell`}
          align={align}
          rowSpan={rowSpan}
          colSpan={colSpan}
        >
          {content}
        </td>
      );
    });
  };

  const renderRow = () => {
    return columns?.map((column, index) => {
      const { title, align } = column;
      let cells = null;
      if (index === 0 && !dataSource?.length) {
        const emptyJsx = renderEmpty ? renderEmpty() : 'no data';
        cells = (
          <td rowSpan={columns?.length || 0} className={`${prefixCls}-empty`}>
            {emptyJsx}
          </td>
        );
      } else {
        cells = dataSource?.length ? renderCell(column, index) : null;
      }

      const { rowSpan = 1, colSpan = 1 } =
        props.span?.({
          index,
          record: {},
          data: null,
        }) || {};

      if (colSpan === 0 || rowSpan === 0) {
        return <></>;
      }

      return (
        <tr className={`${prefixCls}-row`} key={index}>
          <th
            className={`${prefixCls}-cell`}
            style={{ textAlign: align || 'left' }}
            rowSpan={rowSpan}
            colSpan={colSpan}
            align={column.align}
          >
            {title}
          </th>
          {cells}
        </tr>
      );
    });
  };

  return (
    <div id={id} className={classes} style={style} {...htmlAttributes}>
      <table className={`${prefixCls}-table`}>
        <tbody>{renderRow()}</tbody>
      </table>
    </div>
  );
};

export default TableColumn;
