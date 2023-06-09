import { Pagination } from '@change/prender';
import { MiddlewarePreInstall } from '@change/prender/render';
import React from 'react';

const columns = [
  { dataIndex: 'name', title: '年龄' },
  { dataIndex: 'age', title: '姓名' },
  { dataIndex: 'sex', title: '性别' },
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
];
export default () => (
  <Pagination
    config={config}
    middlewares={[
      { use: MiddlewarePreInstall.CountMiddleware, option: ['Headline'] },
    ]}
  />
);
