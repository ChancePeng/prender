import { get, isEmpty } from 'lodash';
import type { FunctionComponent, ReactNode } from 'react';
import React from 'react';
import * as PdfComponents from '../../components';
import initMiddlewares from '../middleware/init';
import renderFooter from './footer';
import getShowStaus from './getShowStatus';
import renderHeader from './header';
import type { IConfig, Options } from './typs';

const renderInstance = (configs: IConfig[], options: Options): ReactNode[] => {
  const { pfcs, data, middlewares = [] } = options;
  const _pfcs: Record<string, FunctionComponent> = {
    ...PdfComponents,
    ...pfcs,
  };
  // 初始化中间件
  const middlewareInstance = initMiddlewares(middlewares);
  return (function () {
    return configs.map((config, index) => {
      let _config = config;
      const {
        dataSource: _dataSource,
        dataIndex,
        beforeDataRendered,
        emit,
      } = config;
      // 获取配置的静态数据
      let origin = _dataSource;
      // 存在dataIndex，从data中获取
      // 多值情况
      if (dataIndex instanceof Array) {
        origin = dataIndex.map((key) => get(data, key));
      } else if (dataIndex) {
        // 单值情况
        origin = get(data, dataIndex);
      }

      // data的中间处理函数
      if (beforeDataRendered) {
        origin = beforeDataRendered(origin, data);
      }

      _config.dataSource = origin;
      // 执行所有中间件
      middlewareInstance?.forEach((item) => {
        const { emit, defineConfig } = item;
        if (emit) {
          const _emit = emit.bind(item);
          _emit({
            ...config,
            __origin: origin,
            __data: data,
          });
        }
        if (defineConfig) {
          const _defineConfig = defineConfig.bind(item);
          _config = _defineConfig({
            ...config,
            __origin: origin,
            __data: data,
          });
          origin = _config.dataSource;
        }
      });

      if (emit) {
        _config = {
          ..._config,
          ...emit(_config),
        };
      }

      const {
        type,
        visible = true,
        fieldProps,
        children,
        header,
        footer,
        renderEmpty,
        dataSource,
        render: renderComponent,
        ...fields
      } = _config;

      let Component: any = _pfcs?.[type];
      if (!Component) {
        return <React.Fragment key={index} />;
      }

      const show = getShowStaus({ visible, origin, dataIndex, data });

      if (!show) {
        return <React.Fragment key={index} />;
      }

      // 展示当前组件当data为空的时候
      if (isEmpty(origin) && renderEmpty) {
        Component = renderEmpty(data);
      }

      if (renderComponent) {
        Component = renderComponent(origin, data, Component);
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
      const Header = renderHeader(header, origin, data);
      const Footer = renderFooter(footer, origin, data);

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
export * from './typs';
