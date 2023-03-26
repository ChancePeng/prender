import React from 'react';
import classnames from 'classnames';

import type { PFC } from '../type';

import './index.less';

const Flex: PFC = (props) => {
  const { className, style, bordered, children } = props;
  const prefixCls = 'hz-flex'
  const classes = classnames(prefixCls, {
    [`${prefixCls}-bordered`]: bordered,
  }, className)
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}

export default Flex;