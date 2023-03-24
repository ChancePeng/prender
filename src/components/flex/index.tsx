import React from 'react';
import classnames from 'classnames';

import type { PFC } from '../type';

import './index.less';


const Flex: PFC = (props) => {
  const { className, style, bordered, header, footer, children } = props;
  const prefixCls = 'hz-flex'
  const classes = classnames(prefixCls, {
    [`${prefixCls}-bordered`]: bordered,
  }, className)
  return (
    <div className={classes} style={style}>
      {header && <div className={`${prefixCls}-header hz-header`}>{header}</div>}
      {children}
      {footer && <div className={`${prefixCls}-footer hz-footer`}>{footer}</div>}
    </div>
  )
}

export default Flex;