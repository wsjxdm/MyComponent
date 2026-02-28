import type { Column, RowModel as IRowModel, Row, Cell } from '../types';

export class RowModelGenerator<T = any> {
  data: T[];
  columns: Column<T>[];

  constructor(data: T[], columns: Column<T>[]) {
    this.data = data;
    this.columns = columns;
  }

  getRows(): IRowModel<T> {
    const rows: Row<T>[] = this.data.map((item, index) => {
      const rowId = index.toString();
      const cells: Cell<T>[] = this.columns.map(col => {
        const value = (item as any)[col.key];
        return {
          id: `${rowId}_${col.key}`,
          value,
          column: col,
          row: { id: rowId, original: item, cells: [] }, // Circular reference to be fixed or simplified
          render: () => {
             if (col.render) {
               return col.render(value, item, index);
             }
             return value;
          }
        };
      });
      
      const row: Row<T> = {
        id: rowId,
        original: item,
        cells,
      };

      // Fix circular reference in cells
      cells.forEach(cell => cell.row = row);

      return row;
    });

    return {
      rows,
    };
  }
}
