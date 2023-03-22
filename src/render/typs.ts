import * as Components from '../components';
import type { ColumnType } from '../components'
import type { ReactNode, CSSProperties } from 'react';

interface FieldProps {
  className?: string,
  style?: CSSProperties
}

export interface IConfig {
  type: keyof typeof Components | string,
  dataIndex?: string | string[],
  columns?: ColumnType<unknown>[],
  dataSource?: any,
  bordered?: boolean,
  emptyShow?: boolean,
  fieldProps?: FieldProps,
  beforeDataRendered?: (data: any, record: any) => any,
  renderEmpty?: () => ReactNode,
  render?: () => ReactNode,
}

export interface Options {
  pfcs?: Record<string, any>,
  data?: Record<string, any>
}