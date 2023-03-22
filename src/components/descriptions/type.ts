import type { CSSProperties } from 'react';
import { ColumnType } from '../table/type';


export interface DescriptionsProps<T = Record<string, any>> {
  column?: number,
  columns?: ColumnType<T>[],
  dataSource?: T,
  style?: CSSProperties,
  className?: string,
  bordered?:boolean,
}