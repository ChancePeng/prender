---
title: 描述列表（Descriptions）
group:
  title: 通用
---

## 描述列表

展示描述信息

## 基本使用

```jsx
import React from 'react'
import {Descriptions} from '@change/hzpdf';

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

export default () => {
  return <Descriptions columns={columns} dataSource={data}/>
}
```

## 带边框

```jsx
import React from 'react'
import {Descriptions} from '@change/hzpdf';

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

export default () => {
  return <Descriptions bordered columns={columns} dataSource={data}/>
}
```
