import classnames from 'classnames';
import { get } from 'lodash';
import React, { useMemo } from 'react';
import type { PFC } from '../type';
import type { DescriptionsProps, IColumn } from './type';

import './index.less';

const Descriptions: PFC<DescriptionsProps> = (props) => {
  const { column = 3, dataSource, columns, style, className, bordered } = props;
  const prefixCls = 'pfc-descriptions';
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
    const result: IColumn<any>[][] = [];
    columns?.forEach((item) => {
      const { span = 1 } = item;
      sum = sum + span;
      if (sum > column) {
        sum = 1;
        index += 1;
        result[index] = [item];
      } else {
        if (result[index]) {
          result[index].push(item);
        } else {
          result[index] = [item];
        }
      }
    });
    return result;
  }, []);

  const renderCell = (column: IColumn<any>, index: number) => {
    const { dataIndex, title, render, span = 1 } = column;
    let data = null;
    if (dataIndex instanceof Array) {
      data = dataIndex.map((key) => get(dataSource, key));
    } else if (dataIndex) {
      data = get(dataSource, dataIndex);
    }
    const inner = render ? render(data, dataSource, index) : data;
    if (bordered) {
      return (
        <React.Fragment key={index}>
          <th className={`${prefixCls}-cell ${prefixCls}-cell-label`}>
            {title}
          </th>
          <td
            className={`${prefixCls}-cell ${prefixCls}-cell-content`}
            colSpan={span}
          >
            {inner}
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
    <div className={classes} style={style}>
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
