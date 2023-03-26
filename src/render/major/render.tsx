import { get, isEmpty } from 'lodash'
import React from 'react';
import renderHeader from './header';
import renderFooter from './footer';
import getShowStaus from './getShowStatus';
import type { IConfig, Options } from "./typs";
import type { ReactNode } from 'react'
import initMiddlewares from '../middleware/init';

const renderInstance = (configs: IConfig[], options: Options): ReactNode[] => {
  const { pfcs, data, middlewares = [] } = options;
  const middlewareInstance = initMiddlewares(middlewares)
  return (function () {
    return configs.map((config, index) => {
      let _config = config;
      const { dataSource:_dataSource, dataIndex, beforeDataRendered } = config;
      let origin = _dataSource;
      if (dataIndex instanceof Array) {
        origin = dataIndex.map(key => get(data, key))
      } else if (dataIndex) {
        origin = get(data, dataIndex)
      }

      if (beforeDataRendered) {
        origin = beforeDataRendered(origin, data)
      }

      middlewareInstance?.forEach(item => {
        const { emit, defineConfig } = item;
        if (emit) {
          const _emit = emit.bind(item)
          _emit({
            ...config,
            __origin: origin,
            __data: data,
          })
        }
        if (defineConfig) {
          const _defineConfig = defineConfig.bind(item)
          _config = _defineConfig({
            ...config,
            __origin: origin,
            __data: data
          })
        }
      })

      const {
        type,
        instanceOf,
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

      origin = dataSource;




      let Component: any = pfcs?.[type];
      if (!Component) {
        return <React.Fragment key={index} />;
      }


      const show = getShowStaus({ visible, origin, dataIndex })

      if (!show) {
        return <React.Fragment key={index} />
      }


      if (isEmpty(origin)) {
        if (!renderComponent && renderEmpty) {
          Component = renderEmpty(data)
        } else {
          Component = <React.Fragment key={index} />
        }
      }

      if (renderComponent) {
        Component = renderComponent(origin, data, Component)
      }

      let childrenJsx = undefined;
      if (children?.length) {
        childrenJsx = renderInstance(children, options)
      }

      const jsx = Component ? <Component {...fieldProps} {...fields} dataSource={origin}>{childrenJsx}</Component> : null
      const Header = renderHeader(header, origin, data);
      const Footer = renderFooter(footer, origin, data);

      return (
        <div className='hz-config-item' key={index}>
          {Header}
          {jsx}
          {Footer}
        </div>
      )
    })
  })()

}

export default renderInstance;
export * from './typs'