import type { ReactNode } from 'react';

export interface Column<T = any> {
  key: string;
  title: string;
  width?: number;
  render?: (value: any, record: T, index: number) => ReactNode;
}

export interface TableProps<T = any> {
  data: T[];
  columns: Column<T>[];
  showFooter?: boolean;
}

export interface TableState {
  // Add state properties here if needed
}

export interface TableInstance<T = any> {
  options: TableProps<T>;
  columns: Column<T>[];
  data: T[];
  getHeaderGroups: () => HeaderGroup<T>[];
  getRowModel: () => RowModel<T>;
}

export interface HeaderGroup<T = any> {
  headers: Header<T>[];
}

export interface Header<T = any> {
  key: string;
  title: string;
  column: Column<T>;
}

export interface RowModel<T = any> {
  rows: Row<T>[];
}

export interface Row<T = any> {
  id: string;
  original: T;
  cells: Cell<T>[];
}

export interface Cell<T = any> {
  id: string;
  value: any;
  render: () => ReactNode;
  column: Column<T>;
  row: Row<T>;
}
