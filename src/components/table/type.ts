import type { ReactNode, CSSProperties } from 'react';

export interface ColumnType<T> {
  align?: 'left' | 'right' | 'center',
  dataIndex?: string | string[],
  title?: string,
  render?: (value: any, record: T, index: number) => ReactNode,
}


export interface TableProps<T = Record<string, any>> {
  readonly dataSource?: T[],
  bordered?: boolean,
  columns?: ColumnType<T>[],
  className?: string,
  style?: CSSProperties,
  header?: ReactNode,
  footer?: ReactNode,
  renderEmpty?: () => ReactNode,
}