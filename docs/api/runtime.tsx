import { Pagination, useContext } from '@change/prender';
import React from 'react';

const Test = () => {
  const { data, configs } = useContext();
  return (
    <div>
      <h1>this is test component,</h1>
      <h2>runtime data is :</h2>
      <textarea style={{ width: 600 }} value={JSON.stringify(data)} />
      <h2>runtime configs is :</h2>
      <textarea
        style={{ width: 600, height: 100 }}
        value={JSON.stringify(configs)}
      />
    </div>
  );
};

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
export default () => <Pagination config={config} pfcs={{ Test }} data={data} />;
