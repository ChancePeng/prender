import { ColumnType } from '../table/type';

export interface IColumn<T> extends ColumnType<T> {
  span?: number;
}
export interface DescriptionsProps<T = Record<string, any>> {
  column?: number;
  columns?: IColumn<T>[];
}
