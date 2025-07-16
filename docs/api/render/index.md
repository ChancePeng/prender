---
title: render
nav:
  title: API
  order: 3
---

渲染页面的主方法

```ts
function render(configs:Iconfig[],options:Options):ReactElement
```

使用实例：
<code src='./render.tsx'></code>


## options
render配置项

### pfcs
扩展的自定义组件

```tsx
import React from 'react'
import {render} from '@change/prender'
const ExampleComp = () => <div>hello</div>

const el = render([{
  type:'ExampleComp'
}],{
  pfcs:{
    ExampleComp
  }
})

export default () => el
```

### data

dataIndex配置项将从此数据拿值

```tsx
import React from 'react'
import {render} from '@change/prender'
const ExampleComp = (props) => <div>{props.dataSource}</div>

const data = {
  a:'example'
}
const el = render([{
  type:'ExampleComp',
  dataIndex:'a'
}],{
  pfcs:{
    ExampleComp
  },
  data
})

export default () => el
```


### middleware
使用中间件,具体查看中间件章节


### onFinished
虚拟dom全部渲染完成，将调用此回调函数