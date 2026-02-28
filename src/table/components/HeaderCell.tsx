import type { Header } from '../types';

interface HeaderCellProps {
  header: Header<any>;
}

export const HeaderCell = ({ header }: HeaderCellProps) => {
  return (
    <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left', background: '#f2f2f2' }}>
      {header.title}
    </th>
  );
};
