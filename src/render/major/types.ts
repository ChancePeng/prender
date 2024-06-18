import type { DescriptionsColumnType, TableColumnType } from '@/components';
import type { CSSProperties, ReactNode } from 'react';
import type { ComponentType } from './render';

type ConfigColumnType<T = any> = TableColumnType<T> & DescriptionsColumnType<T>;

type VisibleType =
  | boolean
  | 'hidden-while-empty-dataSource'
  | 'hidden-while-empty-dataIndex'
  | ((data?: any, record?: Record<string, any>) => boolean);

interface FieldConfig {
  className?: string;
  style?: CSSProperties;
  dataIndex?: string | string[];
  columns?: ConfigColumnType[];
  dataSource?: any;
  bordered?: boolean;
  visible?: VisibleType;
  fieldProps?: Record<string | number | symbol, any>;
  children?: IConfig[];
  header?: ((data?: any, record?: any) => ReactNode) | ReactNode;
  footer?: ((data?: any, record?: any) => ReactNode) | ReactNode | string[];
}

interface IConfig<T = never> extends FieldConfig {
  readonly type: ComponentType | T;
  readonly instanceOf?: ComponentType | T;
  beforeDataRendered?: (data: any, record: any) => any;
  renderEmpty?: (record: any, config?: FieldConfig) => ReactNode;
  render?: (data: any, record: any, dom: ReactNode) => ReactNode;
  defineConfig?: (config: FieldConfig) => void;
}

interface RuntimeConfig extends IConfig {
  __data: any;
  __config: IConfig;
}

export { ComponentType, FieldConfig, IConfig, RuntimeConfig, VisibleType };