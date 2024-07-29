import type {
  DescriptionsColumnType,
  PFCProps,
  TableColumnType,
} from '@/components';
import type { ReactNode } from 'react';
import type { ComponentType } from './render';

type ConfigColumnType<T = any> = TableColumnType<T> & DescriptionsColumnType<T>;

type VisibleType =
  | boolean
  | 'hidden-while-empty-dataSource'
  | 'hidden-while-empty-dataIndex'
  | ((data?: any, record?: Record<string, any>) => boolean);

interface FieldConfig<T = any, P = never> extends PFCProps<T, P> {
  columns?: ConfigColumnType[];
  visible?: VisibleType;
  fieldProps?: Record<string | number | symbol, any>;
  children?: IConfig[];
  header?: ((data?: any, record?: any) => ReactNode) | ReactNode;
  footer?: ((data?: any, record?: any) => ReactNode) | ReactNode | string[];
}

interface IConfig<T = never, P = any, K = never> extends FieldConfig<P, K> {
  readonly type: ComponentType | T;
  readonly instanceOf?: ComponentType | T;
  beforeDataRendered?: (data: any, record: any) => any;
  renderEmpty?: (record: any, config?: FieldConfig) => ReactNode;
  render?: (data: any, record: any, dom: ReactNode) => ReactNode;
  defineConfig?: (config: FieldConfig) => void;
}

export { ComponentType, FieldConfig, IConfig, VisibleType };
