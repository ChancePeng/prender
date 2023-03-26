import { get, isEmpty } from 'lodash'
import React from 'react';
import renderHeader from './header';
import renderFooter from './footer';
import getShowStaus from './getShowStatus';
import type { IConfig, Options } from "./typs";
import type { ReactNode } from 'react'

const render = (configs: IConfig[], options: Options): ReactNode[] => {
  const { pfcs, data } = options;
  return configs.map((config, index) => {
    const {
      type,
      instanceOf,
      dataIndex,
      dataSource,
      visible = true,
      fieldProps,
      children,
      header,
      footer,
      beforeDataRendered,
      renderEmpty,
      render: renderComponent,
      ...fields
    } = config;

    let Component: any = pfcs?.[type];
    if (!Component) {
      return <React.Fragment key={index} />;
    }
    let origin = dataSource;
    if (dataIndex instanceof Array) {
      origin = dataIndex.map(key => get(data, key))
    } else if (dataIndex) {
      origin = get(data, dataIndex)
    }

    if (beforeDataRendered) {
      origin = beforeDataRendered(origin, data)
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
      childrenJsx = render(children, options)
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
}

export default render;
export * from './typs'