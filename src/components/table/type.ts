import type { ReactNode, CSSProperties } from 'react';

export interface ColumnType<T> {
  align?: 'left' | 'right' | 'center',
  dataIndex?: string | string[],
  title?: string,
  render?: (value: any, record: T, index: number) => ReactNode,
}


export interface TableProps<T = Record<string, any>> {
  columns?: ColumnType<T>[],
  renderEmpty?: () => ReactNode,
}