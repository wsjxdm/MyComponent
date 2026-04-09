import type { ColumnManager, Filter } from "../types";
import { HeaderRow } from "./headerRow";
import styles from './table.module.css';

export const TableHeader = ({
    columns,
    filter,
    onFilterChange,
    allSelected,
    onSelectAll
}: {
    columns: ColumnManager[],
    filter: Filter | null,
    onFilterChange: (filter: Filter | null) => void
    allSelected: boolean,
    onSelectAll: (checked: boolean) => void
}) => {
    console.log("Header重渲染");
    return (
        <div className={styles.tableHeader}>
            <HeaderRow
                headerGroup={columns}
                filter={filter}
                onFilterChange={onFilterChange}
                allSelected={allSelected}
                onSelectAll={onSelectAll}
            />
        </div>
    )
};
