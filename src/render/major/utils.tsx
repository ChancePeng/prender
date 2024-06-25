import { Mark } from '@/components';
import isEmpty from 'lodash/isEmpty';
import React from 'react';
import type { IConfig } from './types';

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

export const analysisConfig = (config: IConfig) => {
  const {
    type,
    instanceOf,
    beforeDataRendered,
    renderEmpty,
    render,
    defineConfig,
    ...fields
  } = config;
  return {
    base: fields,
    execute: {
      type,
      instanceOf,
      beforeDataRendered,
      renderEmpty,
      render,
      defineConfig,
    },
  };
};

export const defineProps = (runtime: RuntimeConfig) => {
  const {
    fieldProps,
    dataSource,
    dataIndex,
    className,
    style,
    columns,
    __data,
    __config,
    bordered,
    visible,
  } = runtime;

  const base: any = {
    dataIndex,
    dataSource,
    columns,
    bordered,
    visible,
    __data,
    __config,
    ...fieldProps,
  };
  const props: any = {
    className,
    style,
  };
  Object.keys(props).forEach((key) => {
    if (props[key] === null || props[key] === undefined) {
      delete props[key];
    }
  });
  return {
    ...base,
    ...props,
  };
};
