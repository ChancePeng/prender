import type { ColumnType } from '@/components';
import type { CSSProperties, FunctionComponent, ReactNode } from 'react';
import { MiddlewareType } from '../middleware/type';
import type { ComponentType } from '../type';

interface FieldProps {
  className?: string;
  style?: CSSProperties;
  [data: string]: any;
}

export type VisibleType =
  | boolean
  | 'hidden-while-empty-origin'
  | 'hidden-while-empty-dataIndex'
  | ((data?: any, record?: Record<string, any>) => boolean);

export interface IConfig {
  readonly type: ComponentType;
  readonly instanceOf?: ComponentType;
  dataIndex?: string | string[];
  columns?: ColumnType[];
  dataSource?: any;
  bordered?: boolean;
  visible?: VisibleType;
  fieldProps?: FieldProps;
  children?: IConfig[];
  readonly __origin?: any;
  readonly __data?: any;
  header?: (data?: any, record?: any) => ReactNode | ReactNode;
  footer?: (data?: any, record?: any) => ReactNode | ReactNode | string[];
  beforeDataRendered?: (data: any, record: any) => any;
  renderEmpty?: (record: any) => ReactNode;
  render?: (data: any, record: any, dom: ReactNode) => ReactNode;
  emit?: (
    config: IConfig,
  ) => Omit<
    IConfig,
    | 'type'
    | 'instanceOf'
    | '__origin'
    | '__data'
    | 'beforeDataRendered'
    | 'emit'
  >;
}

export interface Options {
  pfcs?: Record<string, FunctionComponent>;
  data?: Record<string, any>;
  middlewares?: MiddlewareType;
}
