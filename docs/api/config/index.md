---
title: 配置
nav:
  title: API
  order: 3
---

# 配置

传递给`render`方法用来渲染出页面的配置

例子：
```ts
const configs = [
  {
    type:'Table',
    dataIndex:'a.b.c',
    dataSource:[
      {
        a:'a'
      }
    ],
    beforeDataRendered(){

    }
  }
]
```

## type

当前的组件名称，您可以使用自带的组件，也可配置您扩展的组件名称

```ts
const configs = [
  {
    type:'Table'
  }
]
```

## dataIndex

渲染此组件时，传入的dataSource将按照dataIndex配置的路径从json数据中获取

```ts
const json = {
  a:{
    b:'1'
  }
}

// table组件的dataSource属性将会是1
const configs = [
  {
    type:'Table',
    dataIndex:'a.b'
  }
]

```

## columns
配置表格等columns属性，和antd-Table组件类似
## fieldProps
传给组件的其他属性

## children
传给组件的子配置项目，如Flex布局的组件

## visible

当前组件是否渲染，可传入函数，动态判断

### 类型
```ts

type VisibleType =
  | boolean
  | 'HIDDEN_WHILE_DATAINDEX_IS_EMPTY'
  | 'HIDDEN_WHILE_DATASOURCE_IS_EMPTY'
  | ((data?: any, record?: Record<string, any>) => boolean);
```
例子：
```ts
const data = {
  a:{}
}
const configs = [
  {
    type:'Table',
    visible:'HIDDEN_WHILE_DATASOURCE_IS_EMPTY' // 不渲染此组件
  }
]
const configs = [
  {
    type:'Table',
    dataIndex:'a.b',//为undefined
    visible:(data) => !!data // 不渲染此组件
  }
]
```

## header
当前组件加入加入一个头内容

```ts
type Header = ((data?: any, record?: any) => ReactNode) | ReactNode;
```

## footer
当前组件加入一个末尾内容
```ts
type Footer = ((data?: any, record?: any) => ReactNode) | ReactNode | string[];
```

## rootHtmlAttribute

当前组件的父组件div的属性

```ts
type DivAttribute = HTMLAttributes<HTMLDivElement>
```

## beforeDataRendered

当前传入的值不满足组件时，可在此方法中改变

```ts
const json = {
  a:{
    b:1
  }
}

const config = {
  type:'Table',
  dataIndex:'a',
  beforeDataRender(data){
    return [data]
  }
}
```

## defineConfig 

需要动态改变当前组件的属性，当然，你也可以在这里改变数据状态

```ts
type DefineConfig = (config: FieldConfig) => void
```

