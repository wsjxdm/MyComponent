import { List } from 'react-window';
import type { CSSProperties } from 'react';
import type { SelectedModel } from "../types";
import { BodyRow } from "./bodyRow";
import styles from './table.module.css';

interface VirtualTableBodyProps {
    rowModel: SelectedModel;
    height?: number;
    rowHeight?: number;
    selectedRowKeys: string[];
    onRowSelect: (rowKey: string, checked: boolean) => void;
}

export const VirtualTableBody = ({
    rowModel,
    height = 400,
    rowHeight = 50,
    selectedRowKeys,
    onRowSelect
}: VirtualTableBodyProps) => {
    const Row = ({ index, style }: { index: number; style: CSSProperties }) => {
        const row = rowModel.rows[index];
        return (
            <div style={style}>
                <BodyRow
                    row={row}
                    checked={selectedRowKeys.includes(String(row.record.key))}
                    onSelectRow={onRowSelect}
                />
            </div>
        );
    }

    return (
        <div className={styles.tableBody}>
            <List
                rowCount={rowModel.rows.length}
                rowHeight={rowHeight}
                style={{ height, width: '100%' }}
                rowComponent={Row}
                rowProps={{} as any}
            />
        </div>
    );
};
