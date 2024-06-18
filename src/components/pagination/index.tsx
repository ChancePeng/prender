import { render } from '@/render';
import classnames from 'classnames';
import type { FC } from 'react';
import React from 'react';
import type { PaginationProps } from './type';

const Pagination: FC<PaginationProps> = (props) => {
  const {
    config = [],
    data = {},
    style,
    className,
    pfcs = {},
    middlewares,
    onFinished,
  } = props;
  const prefixCls = 'pfc-pagination';
  const classes = classnames(prefixCls, className);
  return (
    <div className={classes} style={style}>
      {render(config, {
        pfcs,
        data,
        middlewares,
        onFinished,
      })}
    </div>
  );
};

export default Pagination;
export { PaginationProps };
