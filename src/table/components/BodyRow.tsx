import type { Row } from '../types';
import { BodyCell } from './BodyCell';

interface BodyRowProps {
  row: Row<any>;
}

export const BodyRow = ({ row }: BodyRowProps) => {
  return (
    <tr>
      {row.cells.map(cell => (
        <BodyCell key={cell.id} cell={cell} />
      ))}
    </tr>
  );
};
