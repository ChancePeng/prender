import { ConfigContext, CountMiddleware, Pagination } from '@change/prender';
import React from 'react';

const columns = [
  { dataIndex: 'name', title: '年龄' },
  { dataIndex: 'age', title: '姓名' },
  { dataIndex: 'sex', title: '性别' },
  { data: 'love', title: '爱好' },
];

const data = {
  age: 12,
  name: 'c',
  sex: '男',
};

const config = [
  {
    type: 'Headline',
    fieldProps: {
      tag: 'h1',
    },
    dataSource: '这是一级标题',
  },
  {
    type: 'Table',
    columns,
    dataSource: [data],
    bordered: true,
  },
  {
    type: 'Headline',
    fieldProps: {
      tag: 'h1',
    },
    dataSource: '这是一级标题',
  },
  {
    type: 'Table',
    columns,
    dataSource: [data],
    bordered: true,
  },
  {
    type: 'Headline',
    fieldProps: {
      tag: 'h1',
    },
    dataSource: '这是一级标题',
  },
  {
    type: 'Table',
    columns,
    dataSource: [data],
    bordered: true,
  },
  {
    type: 'Headline',
    fieldProps: {
      tag: 'h1',
    },
    dataSource: '这是一级标题',
  },
  {
    type: 'Table',
    fieldProps: {
      columnEmptyText: '----',
    },
    columns,
    dataSource: [data],
    bordered: true,
  },
];
export default () => (
  <ConfigContext.Provider value={{ columnEmptyText: '-' }}>
    <Pagination
      config={config}
      water="hello"
      middlewares={[CountMiddleware.Headline]}
    />
  </ConfigContext.Provider>
);
