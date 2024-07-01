import classnames from 'classnames';
import React from 'react';

import type { PFC } from '../type';

import './index.less';

const Flex: PFC = (props) => {
  const { className, style, bordered, children, htmlAttributes, id } = props;
  const prefixCls = 'pfc-flex';
  const classes = classnames(
    prefixCls,
    {
      [`${prefixCls}-bordered`]: bordered,
    },
    className,
  );
  return (
    <div {...htmlAttributes} className={classes} style={style} id={id}>
      {children}
    </div>
  );
};

export default Flex;
