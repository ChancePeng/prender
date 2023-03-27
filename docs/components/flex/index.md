---
title: Flex布局（Flex）
group:
  title: 布局
---

## Flex 布局

flex 盒模型

## 基本使用

```jsx
import { Flex, Table, Descriptions } from '@change/prender';

export default () => {
  const columns = [
    {
      dataIndex: 'name',
      title: 'name',
    },
    {
      dataIndex: 'age',
      title: 'age',
    },
    {
      dataIndex: 'sex',
      title: 'sex',
    },
  ];
  const data = {
    name: 'change',
    age: 20,
    sex: 'boy',
  };
  const dataSource = [data];
  return (
    <Flex>
      <Table dataSource={dataSource} columns={columns} bordered />
      <Descriptions dataSource={data} columns={columns} bordered />
    </Flex>
  );
};
```
