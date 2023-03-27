---
title: 标注（Mark）
group:
  title: 通用
---

## 标注（Mark）

展示一些纯文本的内容

## 基本使用

```jsx
import { Mark } from '@change/prender';

export default () => {
  return (
    <div>
      <Mark dataSource="这是一些描述说明" />
    </div>
  );
};
```

## 多条文本

```jsx
import { Mark } from '@change/prender';

export default () => {
  return (
    <div>
      <Mark dataSource={['这是一些描述说明', '这是一些描述说明']} />
    </div>
  );
};
```
