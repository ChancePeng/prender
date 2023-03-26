import type { ColumnType } from '@/components';
import type { ReactNode, CSSProperties } from 'react';
import { IMiddleware, MiddlewareType } from '../middleware/type';
import type { ComponentType } from '../type';

interface FieldProps {
  className?: string,
  style?: CSSProperties,
  [data: string]: any
}

export type VisibleType = boolean
  | 'hidden-while-empty-origin'
  | 'hidden-while-empty-dataIndex'
  | (() => boolean)


interface ICount {
  current: number,
  origin: Record<string, number>,
  index: number,
}

export interface IConfig {
  type: ComponentType,
  instanceOf: ComponentType,
  dataIndex?: string | string[],
  columns?: ColumnType<unknown>[],
  dataSource?: any,
  bordered?: boolean,
  visible?: VisibleType,
  fieldProps?: FieldProps,
  children?: IConfig[],
  readonly __origin?: any,
  readonly __data?:any,
  header?: (data?: any, record?: any) => ReactNode | ReactNode,
  footer?: (data?: any, record?: any) => ReactNode | ReactNode | string[],
  beforeDataRendered?: (data: any, record: any) => any,
  renderEmpty?: (record: any) => ReactNode,
  render?: (data: any, record: any, dom: ReactNode) => ReactNode,
}



export interface Options {
  pfcs?: Record<string, any>,
  data?: Record<string, any>,
  middlewares?:MiddlewareType
}