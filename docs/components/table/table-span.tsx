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
  { name: '', age: 27, sex: '男' },
  { name: 'junny', age: 23, sex: '女' },
];

export default () => (
  <>
    <Table
      bordered
      columns={columns}
      dataSource={dataSource}
      span={({ data }) => {
        if (data === 'change') {
          return {
            rowSpan: 2,
          };
        } else if (data === '') {
          return {
            rowSpan: 0,
          };
        }
      }}
    />
    <Table
      bordered
      columns={columns}
      dataSource={dataSource}
      span={({ data }) => {
        if (data === 'change') {
          return {
            colSpan: 2,
          };
        } else if (data === '男') {
          return {
            colSpan: 0,
          };
        }
      }}
    />
  </>
);
