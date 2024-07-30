import { Mark } from '@/components';
import isEmpty from 'lodash/isEmpty';
import type { ReactNode } from 'react';
import React from 'react';
import type { IConfig } from './types';

export const isVisible = (config: IConfig, data?: any) => {
  const { visible = true, dataIndex, dataSource } = config;
  if (typeof visible === 'boolean') {
    return visible;
  }
  if (typeof visible === 'string') {
    if (visible === 'HIDDEN_WHILE_DATAINDEX_IS_EMPTY') {
      return !isEmpty(dataIndex);
    }
    if (visible === 'HIDDEN_WHILE_DATASOURCE_IS_EMPTY') {
      return !isEmpty(dataSource);
    }
  }
  if (typeof visible === 'function') {
    return visible(dataSource, data);
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

export const defineProps = (runtime: IConfig) => {
  const {
    fieldProps,
    dataSource,
    dataIndex,
    className,
    style,
    columns,
    bordered,
    htmlAttributes,
    visible,
  } = runtime;

  const base: any = {
    dataIndex,
    dataSource,
    columns,
    bordered,
    visible,
    ...fieldProps,
  };
  const props: any = {
    className,
    style,
    htmlAttributes,
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
