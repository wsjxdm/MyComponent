import type { Row, SelectedModel } from "../types";
import { BodyRow } from "./index";
import styles from './table.module.css';

export const TableBody = ({
    rowModel,
    selectedRowKeys,
    onRowSelect
}: {
    rowModel: SelectedModel,
    selectedRowKeys: string[],
    onRowSelect: (rowKey: string, checked: boolean) => void
}) => {
    return <div className={styles.tableBody}>
        {rowModel.rows.length > 0 ? (
            rowModel.rows.map((row: Row) => (
                <BodyRow
                    row={row}
                    key={row.record.key}
                    checked={selectedRowKeys.includes(String(row.record.key))}
                    onSelectRow={onRowSelect}
                />
            ))
        ) : (
            <div className={styles.emptyState}>
                No Data
            </div>
        )}
    </div>;
};
