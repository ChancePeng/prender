---
title: Flex布局（Flex）
group:
  title: 布局
---

```jsx
import {Flex,Table,Descriptions} from '@change/hzpdf';

export default () => {
  const columns = [
    {
      dataIndex:'name',
      title:'name',
    },
     {
      dataIndex:'age',
      title:'age',
    },
     {
      dataIndex:'sex',
      title:'sex',
    }
  ]
  const data = {
    name:'change',
    age:20,
    sex:'boy'
  }
  const dataSource = [
    data,
  ]
  return (
    <Flex>
      <Table dataSource={dataSource} columns={columns} bordered/>
      <Descriptions dataSource={data} columns={columns} bordered/>
    </Flex>
  )
}
```