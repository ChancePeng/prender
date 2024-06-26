import { render } from '@/render';
import classnames from 'classnames';
import type { FC } from 'react';
import React, { useMemo } from 'react';
import { renderToString } from 'react-dom/server';
import Water from '../water';
import type { PaginationProps } from './type';

import './index.less';

const Pagination: FC<PaginationProps> = (props) => {
  const {
    config = [],
    data = {},
    style: _style = {},
    className,
    water,
    pfcs = {},
    middlewares,
    onFinished,
  } = props;
  const prefixCls = 'pfc-pagination';
  const above = typeof water === 'object' ? water.above ?? true : true;

  const classes = classnames(prefixCls, className, {
    [`${prefixCls}-water-${above ? 'above' : 'default'}`]: !!water,
  });

  const style = useMemo(() => {
    if (!water) {
      return {};
    }
    const waterProps =
      typeof water === 'string' ? { text: water } : (delete water.above, water);
    const svg = renderToString(<Water {...waterProps} />);
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    return {
      [`--${prefixCls}-water-bkg-url`]: `url(${url})`,
    };
  }, [water]);

  return (
    <div className={classes} style={{ ...style, ..._style }}>
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
