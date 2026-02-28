import type { HeaderGroup } from '../types';
import { HeaderCell } from './HeaderCell';

interface HeaderRowProps {
  headerGroup: HeaderGroup<any>;
}

export const HeaderRow = ({ headerGroup }: HeaderRowProps) => {
  return (
    <tr>
      {headerGroup.headers.map(header => (
        <HeaderCell key={header.key} header={header} />
      ))}
    </tr>
  );
};
