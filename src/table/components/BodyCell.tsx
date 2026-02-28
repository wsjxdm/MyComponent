import type { Cell } from '../types';

interface BodyCellProps {
  cell: Cell<any>;
}

export const BodyCell = ({ cell }: BodyCellProps) => {
  return (
    <td style={{ border: '1px solid #ccc', padding: '8px' }}>
      {cell.render()}
    </td>
  );
};
