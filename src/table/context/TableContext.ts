import { createContext, useContext } from 'react';
import type { TableInstance } from '../types';

export const TableContext = createContext<TableInstance<any> | null>(null);

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error('useTableContext must be used within a TableProvider');
  }
  return context;
};
