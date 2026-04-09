import type { CellModel, Row } from "../types";
import styles from './table.module.css';

export const BodyCell = ({ cell, row }: { cell: CellModel, row: Row }) => {
    return <div
        className={styles.bodyCell}
        style={{
            width: cell.column.width,
            minWidth: cell.column.width,
            maxWidth: cell.column.width,
            flex: cell.column.width ? 'none' : 1
        }}
    >
        {cell.column.render(cell.value, row.record, cell.index)}
    </div>;
};
