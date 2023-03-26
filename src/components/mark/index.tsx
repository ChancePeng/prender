import React from 'react';
import type { FC } from "react";
import type { MarkProps } from './type'

const Mark: FC<MarkProps> = (props) => {
  const { dataSource } = props;
  const prefixCls = 'hz-mark';
  const list = dataSource ? dataSource instanceof Array ? dataSource : [dataSource] : []
  return (
    <div className={prefixCls}>
      {
        list.map((item, index) => {
          return (
            <div className={`${prefixCls}-item`} key={index}>{item}</div>
          )
        })
      }
    </div>
  )
}

export default Mark;