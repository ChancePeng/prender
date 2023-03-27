---
title: 页面（Pagination）
group:
  title: 布局
---

## 页面（Pagination）

通过配置化生成页面的根组件

> 其基本功能是基于 render 方法实现

## 基本使用

```jsx
import React from 'react';
import { Pagination } from '@change/prender';

const columns = [
  { dataIndex: 'name', title: '年龄' },
  { dataIndex: 'age', title: '姓名' },
  { dataIndex: 'sex', title: '性别' },
];

const data = {
  age: 12,
  name: 'c',
  sex: '男',
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
    dataSource: data,
    bordered: true,
  },
];
export default () => <Pagination config={config} />;
```

## 使用中间件

> 加入统计标题的中间件,该中间件已在系统中预设

```jsx
import React from 'react';
import { Pagination } from '@change/prender';

import { MiddlewarePreInstall } from '@change/prender/render';

const columns = [
  { dataIndex: 'name', title: '年龄' },
  { dataIndex: 'age', title: '姓名' },
  { dataIndex: 'sex', title: '性别' },
];

const data = {
  age: 12,
  name: 'c',
  sex: '男',
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
    dataSource: data,
    bordered: true,
  },
];
export default () => (
  <Pagination
    config={config}
    middlewares={[
      { use: MiddlewarePreInstall.CountMiddleware, option: ['Headline'] },
    ]}
  />
);
```
