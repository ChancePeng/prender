import { ColumnType } from '../type';

export interface DescriptionsColumnType<T>
  extends Omit<ColumnType<T>, 'width'> {
  span?: number;
}
export interface DescriptionsProps<T = Record<string, any>> {
  column?: number;
  columns?: DescriptionsColumnType<T>[];
  columnEmptyText?: string | false;
  dataSource?: Record<string, any>;
}
