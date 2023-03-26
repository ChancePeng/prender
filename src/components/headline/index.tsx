import React from 'react';
import classnames from 'classnames';
import type { PFC } from '../type';
import type {HeadlineProps} from './type'


const Headline: PFC<HeadlineProps, string> = (props) => {
  const prefixCls = 'hz-pargaraph';
  const { dataSource, tag = 'h1' } = props;
  const classes = classnames(prefixCls, `${prefixCls}-${dataSource}`)
  return React.createElement(tag, { className: classes }, dataSource)
}

export default Headline;

export * from './type';