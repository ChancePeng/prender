import { render } from '@change/prender';
import React from 'react';

const columns = [
  { dataIndex: 'name', title: '年龄' },
  { dataIndex: 'age', title: '姓名' },
  { dataIndex: 'sex', title: '性别' },
];

const data = {
  table: {
    age: 12,
    name: 'c',
    sex: '男',
  },
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
    dataIndex: 'table',
    bordered: true,
  },
  {
    type: 'Test',
  },
];
export default () => (
  <div>
    {render(config, {
      data,
    })}
  </div>
);
