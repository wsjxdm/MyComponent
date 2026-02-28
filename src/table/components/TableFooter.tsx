import { useTableContext } from '../context/TableContext';

export const TableFooter = () => {
   const { columns } = useTableContext();
  return (
    <tfoot>
      <tr>
        <td colSpan={columns.length} style={{ padding: '8px', textAlign: 'center', background: '#f9f9f9', borderTop: '1px solid #ccc' }}>
          Table Footer
        </td>
      </tr>
    </tfoot>
  );
};
