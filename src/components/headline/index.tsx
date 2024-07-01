import classnames from 'classnames';
import React from 'react';
import type { PFC } from '../type';
import type { HeadlineProps } from './type';

const Headline: PFC<HeadlineProps, string> = (props) => {
  const prefixCls = 'pfc-pargaraph';
  const {
    dataSource,
    tag = 'h1',
    id,
    style,
    className,
    htmlAttributes = {},
  } = props;
  const classes = classnames(prefixCls, `${prefixCls}-${tag}`, className);
  return React.createElement(
    tag,
    { ...htmlAttributes, className: classes, id, style },
    dataSource,
  );
};

export default Headline;

export * from './type';
