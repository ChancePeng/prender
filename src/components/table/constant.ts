import { ColumnType } from "../type";

type StaticColumnKey = 'INDEX'

export const STATIC_COLUMNS: Record<StaticColumnKey, ColumnType> = {
  INDEX: {
    title: '序号',
    render(_, __, index) {
      return index ?? 0 + 1
    }
  }
}