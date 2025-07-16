---
title: 中间件
nav:
  title: API
  order: 3
---

prender支持配置中间件来对渲染过程友好

# 使用方法

<code src='./middleware.tsx'></code>

## 内置中间件

### CountMiddeware

汇总每个组件的个数

```ts
import {CountMiddeware,render} from '@change/prender'


render([],{
  middlewares:[CountMiddeware]
})

```


### CountMiddleware.Headline
汇总标题组件，并为每个标题自动追加前缀

> 具体查看开始实例-> 使用方法

## 自定义中间件

如需自定义中间件，必须实现接口`MiddlewareImplements`

```ts
export interface MiddlewareImplements {
  run(config: IConfig, next: () => void | Promise<void>): void;
}
```

使用实例：

```ts
class ExampleMiddware implements MiddlewareImplements {
  run(config){
    console.log(config.type)
  }
}

render([
  {
    type:'Table'
  }
],{
  middewares:[ExampleMiddware]
})
// 输出Table
```
or
```ts
class ExampleMiddware implements MiddlewareImplements {
  constructor(option){
    console.log(option)// 输出type:example
  }
  run(config){
    console.log(config.type)
  }
}

render([
  {
    type:'Table'
  }
],{
  middewares:[{
    use:ExampleMiddware,
    option:{
      type:'example'
    }
  }]
})
```