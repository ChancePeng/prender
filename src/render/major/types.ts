import type {
  DescriptionsColumnType,
  PFCProps,
  TableColumnType,
} from '@/components';
import type { HTMLAttributes, ReactNode } from 'react';
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
  rootHtmlAttribute?: HTMLAttributes<HTMLDivElement>;
}

interface IConfig<C = never, D = any, E = never> extends FieldConfig<D, E> {
  readonly type: ComponentType | C;
  readonly instanceOf?: ComponentType | C;
  beforeDataRendered?: <T = Record<symbol, any>>(
    data: any,
    record: any,
    config: IConfig,
  ) => T | Record<symbol, any>[] | string | number | boolean | symbol;
  renderEmpty?: <T = any, P = any>(
    data: T,
    record: P,
    dom: ReactNode,
    config: IConfig,
  ) => ReactNode;
  render?: <T = any, P = any>(
    data: T,
    record: P,
    dom: ReactNode,
    config: IConfig,
  ) => ReactNode;
  defineConfig?: (config: FieldConfig) => void;
}

export { ComponentType, FieldConfig, IConfig, VisibleType };
