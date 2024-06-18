import * as PComponent from '@/components';
import { get, isEmpty } from 'lodash';
import React from 'react';
import MiddlewareCore from '../middleware/core';
import { isVisible, renderContent } from './utils';

import type { FunctionComponent, ReactNode } from 'react';
import type { Options } from '../types';
import type { IConfig, RuntimeConfig } from './types';

const analysisConfig = (config: IConfig) => {
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

const renderInstance = (configs: IConfig[], options: Options): ReactNode[] => {
  const { pfcs, data, middlewares = [], onFinished } = options;
  const _pfcs: Record<string, FunctionComponent> = {
    ...(PComponent as any),
    ...pfcs,
  };
  // 初始化中间件
  const middleCore = new MiddlewareCore(middlewares);
  const length = configs.length;
  return (function () {
    return configs.map((_config, index) => {
      const { execute, base } = analysisConfig(_config);

      const { dataIndex } = base;
      const { beforeDataRendered, defineConfig } = execute;

      // 存在dataIndex，从data中获取
      // 多值情况
      if (dataIndex instanceof Array) {
        base.dataSource = dataIndex.map((key) => get(data, key));
      } else if (dataIndex) {
        // 单值情况
        base.dataSource = get(data, dataIndex);
      }
      // data的中间处理函数
      if (beforeDataRendered) {
        base.dataSource = beforeDataRendered(base.dataSource, { ...data });
      }

      if (defineConfig) {
        defineConfig.call(base, base);
      }

      const runtime: RuntimeConfig = {
        ...base,
        ...execute,
        __config: _config,
        __data: data,
      };
      // 执行所有中间件
      middleCore.execute(runtime);

      const {
        type,
        fieldProps,
        children,
        header,
        footer,
        renderEmpty,
        dataSource,
        render: renderComponent,
        ...fields
      } = runtime;

      let Component: any = _pfcs?.[type];

      if (!Component) {
        return <React.Fragment key={index} />;
      }

      const show = isVisible(runtime);

      if (!show) {
        return <React.Fragment key={index} />;
      }

      // 展示当前组件当data为空的时候
      if (isEmpty(runtime.dataSource) && renderEmpty) {
        Component = renderEmpty(data, base);
      }

      if (renderComponent) {
        Component = renderComponent(runtime.dataSource, data, Component);
      }

      let childrenJsx = undefined;
      if (children?.length) {
        childrenJsx = renderInstance(children, options);
      }

      const jsx = Component ? (
        <Component {...fieldProps} {...fields} dataSource={dataSource}>
          {childrenJsx}
        </Component>
      ) : null;

      const Header = renderContent(header, runtime.dataSource, data);
      const Footer = renderContent(footer, runtime.dataSource, data);

      if (length === index + 1) {
        onFinished?.();
      }

      return (
        <div className="pfc-config-item" key={index}>
          {Header}
          {jsx}
          {Footer}
        </div>
      );
    });
  })();
};

export default renderInstance;
export type ComponentType = keyof typeof PComponent;
