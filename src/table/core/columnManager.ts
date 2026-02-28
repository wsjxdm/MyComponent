import type { Column, HeaderGroup, Header } from '../types';

export class ColumnManager<T = any> {
  columns: Column<T>[];

  constructor(columns: Column<T>[]) {
    this.columns = columns;
  }

  getHeaderGroups(): HeaderGroup<T>[] {
    // For a simple table, we just have one header group
    const headers: Header<T>[] = this.columns.map(col => ({
      key: col.key,
      title: col.title,
      column: col,
    }));

    return [
      {
        headers,
      },
    ];
  }
}
