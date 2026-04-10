import { memo, useCallback, useState } from 'react';
import type { CSSProperties } from 'react';
import type { Column, Filter, SelectedKeysChange } from "../types";
import { TableHeader, TableBody } from "./index";
import { VirtualTableBody } from "./virtualTableBody";
import { useTable } from "../core/createTable";
import { ErrorBoundary } from "./ErrorBoundary";
import styles from './table.module.css';

interface TableProps {
    data: any[];
    columns: Column[];
    rowSelection?: {
        selectedRowKeys: string[];
        onChange: (selectedRowKeys: SelectedKeysChange) => void;
    };
    showFooter?: boolean;
    className?: string;
    style?: CSSProperties;
    virtual?: boolean;
    height?: number;
    rowHeight?: number;
}

export const Table = memo((props: TableProps) => {
    console.log("重渲染");
    const [filter, setFilter] = useState<Filter | null>(null);
    const { columns, rowModel } = useTable({ ...props, filter });
    const { className, style, virtual, height, rowHeight, rowSelection } = props;
    const onRowSelectionChange = rowSelection?.onChange;
    const selectedRowKeys = rowModel.selectedkeys || [];
    const visibleRowKeys = rowModel.rows.map((row) => String(row.record.key));
    const allSelected = visibleRowKeys.length > 0 && visibleRowKeys.every((key) => selectedRowKeys.includes(key));

    const handleSelectAll = useCallback((checked: boolean) => {
        if (!onRowSelectionChange) return;
        onRowSelectionChange(() => (checked ? visibleRowKeys : []));
    }, [onRowSelectionChange, visibleRowKeys]);

    const handleRowSelect = useCallback((rowKey: string, checked: boolean) => {
        if (!onRowSelectionChange) return;
        onRowSelectionChange((prev) => {
            if (checked) {
                return prev.includes(rowKey) ? prev : [...prev, rowKey];
            }
            return prev.filter((key) => key !== rowKey);
        });
    }, [onRowSelectionChange]);

    return (
        <div className={`${styles.tableContainer} ${className || ''}`} style={style}>
            <div className={styles.table}>
                <TableHeader
                    columns={columns}
                    filter={filter}
                    onFilterChange={setFilter}
                    allSelected={allSelected}
                    onSelectAll={handleSelectAll}
                />
                <ErrorBoundary>
                    {virtual ? (
                        <VirtualTableBody
                            rowModel={rowModel}
                            height={height}
                            rowHeight={rowHeight}
                            selectedRowKeys={selectedRowKeys}
                            onRowSelect={handleRowSelect}
                        />
                    ) : (
                        <TableBody
                            rowModel={rowModel}
                            selectedRowKeys={selectedRowKeys}
                            onRowSelect={handleRowSelect}
                        />
                    )}
                </ErrorBoundary>
            </div>
        </div>
    )
})
