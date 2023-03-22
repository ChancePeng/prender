import { get, isEmpty } from 'lodash'
import React from 'react';
import type { IConfig, Options } from "./typs";

const render = (configs: IConfig[], options: Options) => {
  const { pfcs, data } = options;
  return configs.map((config, index) => {
    const {
      type,
      dataIndex,
      dataSource,
      emptyShow = true,
      fieldProps,
      beforeDataRendered,
      renderEmpty,
      render,
      ...fields
    } = config;

    let Component: any = pfcs?.[type];
    if (!Component) {
      return <React.Fragment key={index} />;
    }
    let baseData = dataSource;
    if (dataIndex instanceof Array) {
      baseData = dataIndex.map(key => get(data, key))
    } else if (dataIndex) {
      baseData = get(data, dataIndex)
    }


    if (beforeDataRendered) {
      baseData = beforeDataRendered(baseData, data)
    }

    if (isEmpty(baseData)) {
      if (renderEmpty) {
        Component = renderEmpty()
      } else if (!emptyShow) {
        return <React.Fragment key={index} />;
      }
    }

    if (render) {
      Component = render()
    }

    const jsx = Component ? <Component {...fieldProps} {...fields} dataSource={baseData} /> : null

    return (
      <div className='hz-each' key={index}>
        {jsx}
      </div>
    )
  })
}

export default render;