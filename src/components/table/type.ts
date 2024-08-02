import { ColumnType } from '../type';

interface TableColumnSpanOption {
  index: number;
  record: Record<string, any>;
  data: any;
}

export interface TableColumnType<T> extends ColumnType<T> {
  width?: number | string;
  colSpan?: number;
  rowSpan?: number;
}
export interface TableProps<T = Record<string, any>> {
  columns?: TableColumnType<T>[];
  columnEmptyText?: string | false;
  span?: (option: TableColumnSpanOption) => {
    colSpan?: number;
    rowSpan?: number;
  };
}
