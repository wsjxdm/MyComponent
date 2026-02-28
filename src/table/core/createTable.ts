import type { TableProps, TableInstance } from '../types';
import { ColumnManager } from './columnManager';
import { RowModelGenerator } from './rowModel';

export const createTable = <T = any>(options: TableProps<T>): TableInstance<T> => {
  const columnManager = new ColumnManager(options.columns);
  const rowModel = new RowModelGenerator(options.data, options.columns);

  return {
    options,
    columns: options.columns,
    data: options.data,
    getHeaderGroups: () => columnManager.getHeaderGroups(),
    getRowModel: () => rowModel.getRows(),
  };
};
