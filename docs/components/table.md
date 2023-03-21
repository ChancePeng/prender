---
title: 表格（Table)
group:
  title: 通用
---

## Table表格

展示行列数据

## 代码展示

### 基础使用

```jsx
import React from 'react';
import { Table } from '@change/hzpdf';

const columns = [
  {
    title:'姓名',
    dataIndex:'name'
  },
   {
    title:'年龄',
    dataIndex:'age',
  },
   {
    title:'姓别',
    dataIndex:'sex'
  }
]

const dataSource = [
  {name:'change',age:26,sex:'男'},
  {name:'junny',age:23,sex:'女'}
]

export default () => <Table rowKey='name' columns={columns} dataSource={dataSource} />
```

### 边框

```jsx
import React from 'react';
import { Table } from '@change/hzpdf';

const columns = [
  {
    title:'姓名',
    dataIndex:'name'
  },
   {
    title:'年龄',
    dataIndex:'age',
  },
   {
    title:'姓别',
    dataIndex:'sex'
  }
]

const dataSource = [
  {name:'change',age:26,sex:'男'},
  {name:'junny',age:23,sex:'女'}
]

export default () => <Table bordered columns={columns} dataSource={dataSource} />
```

## 纵向表格

```jsx
import React from 'react';
import {Table} from '@change/hzpdf';


const columns = [
  {
    title:'姓名',
    dataIndex:'name'
  },
   {
    title:'年龄',
    dataIndex:'age',
  },
   {
    title:'姓别',
    dataIndex:'sex'
  }
]

const dataSource = [
  {name:'change',age:26,sex:'男'},
  {name:'junny',age:23,sex:'女'}
]


export default () => <Table.Column bordered columns={columns} dataSource={[]} />


```
