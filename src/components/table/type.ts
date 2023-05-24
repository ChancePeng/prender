import type { ReactNode } from 'react';

export interface ColumnType<T = any> {
  align?: 'left' | 'right' | 'center';
  dataIndex?: string | string[];
  title?: string;
  width?: number | string;
  render?: (value?: any, record?: T, index?: number) => ReactNode;
}

export interface TableProps<T = Record<string, any>> {
  columns?: ColumnType<T>[];
  renderEmpty?: () => ReactNode;
}
