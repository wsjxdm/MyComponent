import { useTableContext } from '../context/TableContext';
import { HeaderRow } from './HeaderRow';

export const TableHeader = () => {
  const { getHeaderGroups } = useTableContext();
  
  return (
    <thead>
      {getHeaderGroups().map((headerGroup, index) => (
        <HeaderRow key={index} headerGroup={headerGroup} />
      ))}
    </thead>
  );
};
