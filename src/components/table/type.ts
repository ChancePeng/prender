import type { ReactNode } from 'react';
import { ColumnType } from '../type';

export interface TableColumnType<T> extends ColumnType<T> {
  width?: number | string;
}
export interface TableProps<T = Record<string, any>> {
  columns?: TableColumnType<T>[];
  renderEmpty?: () => ReactNode;
}
