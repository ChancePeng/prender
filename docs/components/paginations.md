---
title: 页面（Pagination）
group:
  title: 布局
---

```jsx
import React from 'react';
import {Pagination} from '@change/hzpdf';

const columns = [
  {dataIndex:'name',title:'年龄'},
  {dataIndex:'age',title:'姓名'},
  {dataIndex:'sex',title:'性别'},
]

const data = {
  age:12,
  name:'c',
  sex:'男'
}

const config = [
  {
    type:'Table',
    columns,
    dataSource:data,
    bordered:true,
  }
]
export default () => <Pagination config={config} />
```
