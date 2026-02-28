import type { TableProps } from '../types';
import { useTableInstance } from '../hooks/useTableInstance';
import { TableContext } from '../context/TableContext';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';

export const Table = <T = any>(props: TableProps<T>) => {
  const tableInstance = useTableInstance(props);

  return (
    <TableContext.Provider value={tableInstance}>
      <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid #ccc' }}>
        <TableHeader />
        <TableBody />
        {props.showFooter && <TableFooter />}
      </table>
    </TableContext.Provider>
  );
};
