import * as PComponent from '@/components';
import context from '@/context';
import { get, isEmpty } from 'lodash';
import React from 'react';
import MiddlewareCore from '../middleware/core';
import { analysisConfig, defineProps, isVisible, renderContent } from './utils';

import type { FunctionComponent, ReactNode } from 'react';
import type { Options } from '../types';
import type { IConfig } from './types';

const renderInstance = (configs: IConfig[], options: Options): ReactNode[] => {
  const { pfcs, data, middlewares = [], onFinished } = options;
  const _pfcs: Record<string, FunctionComponent> = {
    ...(PComponent as any),
    ...pfcs,
  };

  // 初始化中间件
  const middleCore = new MiddlewareCore(middlewares);
  context.setContext({
    data,
    configs,
    middlewares: middleCore.middlewares,
  });
  return (function () {
    const content = configs.map((_config, index) => {
      const { execute, base } = analysisConfig(_config);

      const { dataIndex } = base;
      const { beforeDataRendered, defineConfig } = execute;

      // -----------------------开始获取dataSource------------------
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
      //-----------------------结束-------------------------

      // 重定义config
      if (defineConfig) {
        defineConfig.call(base, base);
      }

      const runtime: IConfig = {
        ...base,
        ...execute,
      };

      runtime.visible = isVisible(runtime);
      // 执行所有中间件
      middleCore.execute(runtime);

      const {
        type,
        children,
        header,
        footer,
        renderEmpty,
        render: renderComponent,
      } = runtime;

      const Component: any = _pfcs?.[type];

      if (!Component) {
        return <React.Fragment key={index} />;
      }

      const show = isVisible(runtime);

      if (!show) {
        return <React.Fragment key={index} />;
      }

      const childrenJsx = children?.length
        ? renderInstance(configs, options)
        : undefined;
      const props = defineProps(runtime);
      let jsx: ReactNode | undefined = Component ? (
        <Component {...props}>{childrenJsx}</Component>
      ) : undefined;

      // 展示当前组件当data为空的时候
      if (isEmpty(runtime.dataSource) && renderEmpty) {
        jsx = renderEmpty(runtime.dataSource, data, jsx, runtime);
      }

      if (renderComponent) {
        jsx = renderComponent(runtime.dataSource, data, jsx, runtime);
      }

      const Header = renderContent(header, runtime.dataSource, data);
      const Footer = renderContent(footer, runtime.dataSource, data);

      return (
        <div className="pfc-config-item" key={index}>
          {Header}
          {jsx}
          {Footer}
        </div>
      );
    });
    onFinished?.({
      middlewares: middleCore.middlewares,
    });
    return content;
  })();
};

export default renderInstance;
export type ComponentType = keyof typeof PComponent;
