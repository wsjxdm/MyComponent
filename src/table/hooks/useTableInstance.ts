import { useMemo } from 'react';
import type { TableProps, TableInstance } from '../types';
import { createTable } from '../core/createTable';

export const useTableInstance = <T = any>(options: TableProps<T>): TableInstance<T> => {
  const table = useMemo(() => {
    return createTable(options);
  }, [options.data, options.columns]);

  return table;
};
