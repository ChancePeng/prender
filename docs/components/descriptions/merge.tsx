import { Descriptions } from '@change/prender';
import React from 'react';

const columns = [
  { dataIndex: 'name', title: '年龄', span: 3 },
  { dataIndex: 'age', title: '姓名' },
  { dataIndex: 'sex', title: '性别' },
  { dataIndex: 'aa', title: 'aaa', span: 3 },
  { dataIndex: 'bb', title: 'bb' }
];

const data = {
  age: 12,
  name: 'c',
  sex: '男',
  aa: 'aa',
  bb: 'bb'
};

export default () => {
  return <Descriptions bordered columns={columns} dataSource={data} />;
};
