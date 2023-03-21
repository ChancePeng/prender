import TableInstance from './table';
import TableColumn from './table-column';

type TableType = typeof TableInstance;

interface TableProps extends TableType {
  Column:typeof TableColumn
}

const Table = TableInstance as TableProps;
Table.Column = TableColumn;

export default Table;