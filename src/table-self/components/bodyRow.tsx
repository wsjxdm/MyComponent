import { memo } from "react";
import type { CellModel, Row } from "../types";
import { BodyCell } from "./bodyCell";
import styles from './table.module.css';

export const BodyRow = memo(({
    row,
    checked,
    onSelectRow
}: {
    row: Row,
    checked: boolean,
    onSelectRow: (rowKey: string, checked: boolean) => void
}) => {
    const rowKey = String(row.record.key);

    console.log("BodyRow重渲染");
    return (
        <div className={styles.bodyRow}>
            <div className={styles.bodyCell} style={{ width: 48, minWidth: 48, maxWidth: 48, flex: 'none' }}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(event) => onSelectRow(rowKey, event.target.checked)}
                />
            </div>
            {row.cells.map((cell: CellModel) => (
                <BodyCell cell={cell} row={row} key={cell.key} />
            ))}
        </div>
    )
}, (prevProps, nextProps) => {
    return prevProps.checked === nextProps.checked
        && prevProps.row === nextProps.row
    // && prevProps.onSelectRow === nextProps.onSelectRow
});
