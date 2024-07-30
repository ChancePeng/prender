import {
  Headline,
  type HeadlineProps,
  type IConfig,
  type MiddlewareImplements,
  type PFCProps,
} from '@change/prender';
import React from 'react';

class MergeHeadlineMiddleWare implements MiddlewareImplements {
  headline?: PFCProps & HeadlineProps;
  // 计算统计值，方便作为模块头部的信息展示
  count: Record<string, number>;
  constructor() {
    this.count = {};
  }
  run(config: IConfig, next: () => void | Promise<void>): void {
    if (config.type === 'Headline' && config.fieldProps?.tag === 'h2') {
      // 当前的组件为二级标题
      // 记录当前组件状态
      this.headline = {
        ...config.fieldProps,
        dataSource: config.dataSource,
      };
      // 不展示当前组件
      config.visible = false;
      this.count[config.dataSource] = 0;
    } else {
      // 判断是不是表格，并且当前的表格是标题之后的表格
      if (
        this.headline &&
        (config.type === 'Table' || config.instanceOf === 'Table')
      ) {
        const length = config.dataSource?.length;
        this.count[this.headline.dataSource] = length;
        // 将表格统计信息放入标题
        const props = {
          ...this.headline,
          dataSource: (
            <div>
              <span>{this.headline.dataSource}</span>
              <span>{length}</span>
            </div>
          ),
        };
        // 重新设置Table组件的渲染方式，加入保存的Headline组件
        config.render = (_, __, dom) => {
          return (
            <>
              <Headline {...props} />
              {dom}
            </>
          );
        };
      }
      this.headline = undefined;
    }
    // 调用next使得下个中间件正确执行
    next();
  }
}

export default MergeHeadlineMiddleWare;
