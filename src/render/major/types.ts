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
  | 'HIDDEN_WHILE_DATAINDEX_IS_EMPTY'
  | 'HIDDEN_WHILE_DATASOURCE_IS_EMPTY'
  | ((data?: any, record?: Record<string, any>) => boolean);

interface FieldConfig<D = any, E = never> extends PFCProps<D, E> {
  columns?: ConfigColumnType[];
  visible?: VisibleType;
  fieldProps?: Record<string | number | symbol, any>;
  children?: IConfig[];
  header?: ((data?: any, record?: any) => ReactNode) | ReactNode;
  footer?: ((data?: any, record?: any) => ReactNode) | ReactNode | string[];
}

interface IConfig<C = never, D = any, E = never> extends FieldConfig<D, E> {
  readonly type: ComponentType | C;
  readonly instanceOf?: ComponentType | C;
  beforeDataRendered?: (
    data: any,
    record: any,
  ) => string | number | boolean | Record<symbol, any> | ReactNode;
  renderEmpty?: (
    data: any,
    record: any,
    dom: ReactNode,
    config: IConfig,
  ) => ReactNode;
  render?: (
    data: any,
    record: any,
    dom: ReactNode,
    config: IConfig,
  ) => ReactNode;
  defineConfig?: (config: FieldConfig) => void;
}

export { ComponentType, FieldConfig, IConfig, VisibleType };
