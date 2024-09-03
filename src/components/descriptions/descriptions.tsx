import classnames from 'classnames';
import { get } from 'lodash';
import React, { useContext, useMemo } from 'react';
import ConfigContext from '../ConfigContext';
import type { PFC } from '../type';
import type { DescriptionsColumnType, DescriptionsProps } from './type';

import './index.less';

const Descriptions: PFC<DescriptionsProps, Record<string, any>> = (props) => {
  const {
    column = 3,
    dataSource,
    columns,
    style,
    className,
    bordered,
    htmlAttributes,
    id,
    columnEmptyText,
  } = props;
  const prefixCls = 'pfc-descriptions';
  const { columnEmptyText: globalColumnEmptyText } = useContext(ConfigContext);
  const emptyText = columnEmptyText ?? globalColumnEmptyText;
  const classes = classnames(
    prefixCls,
    {
      [`${prefixCls}-bordered`]: bordered,
    },
    className,
  );

  const rows = useMemo(() => {
    let index = 0;
    let sum = 0;
    const result: DescriptionsColumnType<any>[][] = [];
    columns?.forEach((item) => {
      const { span = 1 } = item;
      // 如果span大于column
      if (span > column) {
        sum = sum + column;
        item.span = column;
      } else {
        sum = sum + span;
      }
      // 如果当前行溢出
      if (sum > column) {
        // 统计归1
        sum = item.span || 1;
        // 行数+1
        index += 1;
        result[index] = [item];
      } else {
        // 没有溢出，则增加
        if (result[index]) {
          result[index].push(item);
        } else {
          result[index] = [item];
        }
      }
    });
    return result;
  }, [columns, column]);
  const renderCell = (column: DescriptionsColumnType<any>, index: number) => {
    const { dataIndex, title, render, span = 1, align } = column;
    let data = null;
    if (dataIndex instanceof Array) {
      data = dataIndex.map((key) => get(dataSource, key));
    } else if (dataIndex) {
      data = get(dataSource, dataIndex);
    }
    const inner = render ? render(data, dataSource, index) : data;
    const content = emptyText ? inner ?? emptyText : inner;
    const colSpan = span * 2 - 1;
    if (bordered) {
      return (
        <React.Fragment key={index}>
          <th
            className={`${prefixCls}-cell ${prefixCls}-cell-label`}
            align={align}
          >
            {title}
          </th>
          <td
            className={`${prefixCls}-cell ${prefixCls}-cell-content`}
            colSpan={colSpan}
          >
            {content}
          </td>
        </React.Fragment>
      );
    }
    return (
      <td className={`${prefixCls}-cell`} key={index} colSpan={span}>
        <div className={`${prefixCls}-cell-wrapper`}>
          <div className={`${prefixCls}-cell-label`}>{title}</div>
          <div className={`${prefixCls}-cell-content`}>{inner}</div>
        </div>
      </td>
    );
  };

  return (
    <div id={id} className={classes} style={style} {...htmlAttributes}>
      <table className={`${prefixCls}-table`}>
        <tbody>
          {rows?.map((cells, index) => {
            return (
              <tr key={index} className={`${prefixCls}-row`}>
                {cells.map((cell, i) => {
                  return renderCell(cell, i);
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Descriptions;
