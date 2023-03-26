import React from 'react';
import classnames from 'classnames';
import { render } from '@/render';
import * as Components from '../index'
import type { FC } from 'react';
import type { PaginationProps } from './type';


const Pagination: FC<PaginationProps> = (props) => {
  const { config = [], data = {}, style, className, pfcs = {},middlewares } = props;
  const prefixCls = 'hz-pagination';
  const classes = classnames(prefixCls, className);
  return (
    <div className={classes} style={style}>
      {render(config, {
        pfcs: {
          ...Components,
          ...pfcs,
        },
        data,
        middlewares
      })}
    </div>
  )
}

export default Pagination;
export {
  PaginationProps,
}