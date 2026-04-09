import type { ColumnManager, Filter } from "../types";
import { HeadCell } from "./headCell";
import styles from './table.module.css';

export const HeaderRow = ({
    headerGroup,
    filter,
    onFilterChange,
    allSelected,
    onSelectAll
}: {
    headerGroup: ColumnManager[],
    filter: Filter | null,
    onFilterChange: (filter: Filter | null) => void
    allSelected: boolean,
    onSelectAll: (checked: boolean) => void
}) => {
    return (
        <div className={styles.headerRow}>
            <div className={styles.headerCell} style={{ width: 48, minWidth: 48, maxWidth: 48, flex: 'none' }}>
                <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={(event) => onSelectAll(event.target.checked)}
                />
            </div>
            {headerGroup.map((column) => (
                <HeadCell
                    column={column}
                    key={column.key}
                    filter={filter?.key === column.dataIndex ? filter : null}
                    onFilterChange={onFilterChange}
                />
            ))}
        </div>
    )
};
