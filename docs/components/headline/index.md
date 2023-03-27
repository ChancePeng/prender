---
title: 标题 (Headline)
group:
  title: 通用
---

## 标题 (Headline)

h1,h2,h3,h4 标题组件

## 基本使用

```jsx
import { Headline } from '@change/prender';

export default () => (
  <>
    <Headline tag="h1" dataSource="一级标题" />
    <Headline tag="h2" dataSource="二级标题" />
    <Headline tag="h3" dataSource="三级标题" />
    <Headline tag="h4" dataSource="四级标题" />
  </>
);
```
