import type { ReactNode } from 'react'

const renderHeader = (header?: (data?: any, record?: any) => ReactNode | ReactNode, data?: any, record?: any) => {
  return header instanceof Function ? header(data, record) : header;
}

export default renderHeader;