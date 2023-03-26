
import React from 'react';
import type { ReactNode } from 'react'
import { Mark } from '@/components'

const renderFooter = (footer?: (data?: any, record?: any) => ReactNode | ReactNode | string[], data?: any, record?: any) => {
  if (footer instanceof Array) {
    return <Mark dataSource={footer} />
  }
  if (footer instanceof Function) {
    return footer(data, record)
  }
  return footer;
}

export default renderFooter;