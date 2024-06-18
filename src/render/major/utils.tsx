import { Mark } from '@/components';
import isEmpty from 'lodash/isEmpty';
import React from 'react';

import type { ReactNode } from 'react';
import type { RuntimeConfig } from './types';

export const isVisible = (config: RuntimeConfig) => {
  const { visible = true, dataIndex, dataSource, __data } = config;
  if (typeof visible === 'boolean') {
    return visible;
  }
  if (typeof visible === 'string') {
    if (visible === 'hidden-while-empty-dataIndex') {
      return !isEmpty(dataIndex);
    }
    if (visible === 'hidden-while-empty-dataSource') {
      return !isEmpty(dataSource);
    }
  }
  if (typeof visible === 'function') {
    return visible(dataSource, __data);
  }
  return !!visible;
};

export const renderContent = (
  render?: ((data?: any, record?: any) => ReactNode) | ReactNode | string[],
  data?: any,
  record?: any,
) => {
  if (render instanceof Array) {
    return <Mark dataSource={render} />;
  }
  return render instanceof Function ? render(data, record) : render;
};
