import { Table } from '@change/prender';
import React from 'react';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '姓别',
    dataIndex: 'sex',
  },
];

const dataSource = [
  { name: 'change', age: 26, sex: '男' },
  { name: 'junny', age: 23, sex: '女' },
];

export default () => (
  <Table.Column bordered columns={columns} dataSource={dataSource} />
);
