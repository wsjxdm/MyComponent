import { useTableContext } from '../context/TableContext';
import { BodyRow } from './BodyRow';
import { Empty } from './Empty';

export const TableBody = () => {
  const { getRowModel, data } = useTableContext();
  const { rows } = getRowModel();

  if (data.length === 0) {
    return <tbody><tr><td colSpan={100}><Empty /></td></tr></tbody>
  }

  return (
    <tbody>
      {rows.map(row => (
        <BodyRow key={row.id} row={row} />
      ))}
    </tbody>
  );
};
