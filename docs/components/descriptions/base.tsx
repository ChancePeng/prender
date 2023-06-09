import { Descriptions } from '@change/prender';
import React from 'react';

const columns = [
  { dataIndex: 'name', title: '年龄', span: 3 },
  { dataIndex: 'age', title: '姓名' },
  { dataIndex: 'sex', title: '性别' },
];

const data = {
  age: 12,
  name: 'c',
  sex: '男',
};

export default () => {
  return <Descriptions columns={columns} dataSource={data} />;
};
