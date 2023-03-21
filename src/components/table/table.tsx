import React from 'react';
import RcTable from 'rc-table';
import classnames from 'classnames';
import type { TableProps as RcTableProps } from 'rc-table';
import type { FC } from 'react';

import './index.less';


interface TableProps<T = Record<string, any>> extends Omit<RcTableProps<T>, 'data' | 'prefixCls'> {
  readonly dataSource?: T[],
  bordered?: boolean,
}

const Table: FC<TableProps> = (props) => {
  const prefixCls = 'hz-table';
  const { dataSource, bordered, className, ...fields } = props;
  const classes = classnames({
    [`${prefixCls}-bordered`]: bordered
  }, className)
  return <RcTable className={classes} {...fields} data={dataSource} prefixCls={prefixCls} />
}

export default Table;