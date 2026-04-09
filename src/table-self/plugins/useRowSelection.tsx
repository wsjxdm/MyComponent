import React from 'react';
import type { TableInstance, TablePlugin } from './types';

export interface RowSelectionOptions {
    type: 'checkbox' | 'radio';
    selectedRowKeys?: React.Key[];
    onChange?: (selectedRowKeys: React.Key[], selectedRows: any[]) => void;
    getCheckboxProps?: (record: any) => any;
}

export const useRowSelection = (options: RowSelectionOptions): TablePlugin => {
    return {
        name: 'rowSelection',
        priority: 10, // High priority to add column at the start
        processColumns: (columns: any[], instance: TableInstance) => {
            const { rowModel, state, setState } = instance;
            const selectedKeys = state.selectedRowKeys || options.selectedRowKeys || [];

            const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
                const checked = e.target.checked;
                let newSelectedKeys: React.Key[] = [];
                
                if (checked) {
                    newSelectedKeys = rowModel.rows.map((row: any) => row.record.key);
                }
                
                setState((old: any) => ({ ...old, selectedRowKeys: newSelectedKeys }));
                options.onChange?.(newSelectedKeys, checked ? rowModel.rows.map((r: any) => r.record) : []);
            };

            const handleSelect = (key: React.Key, _record: any, checked: boolean) => {
                let newSelectedKeys = [...selectedKeys];
                
                if (options.type === 'radio') {
                    newSelectedKeys = checked ? [key] : [];
                } else {
                    if (checked) {
                        newSelectedKeys.push(key);
                    } else {
                        newSelectedKeys = newSelectedKeys.filter(k => k !== key);
                    }
                }

                setState((old: any) => ({ ...old, selectedRowKeys: newSelectedKeys }));
                
                const selectedRows = rowModel.rows
                    .filter((r: any) => newSelectedKeys.includes(r.record.key))
                    .map((r: any) => r.record);
                    
                options.onChange?.(newSelectedKeys, selectedRows);
            };

            const selectionColumn = {
                key: 'selection-column',
                title: options.type === 'checkbox' ? (
                    <input 
                        type="checkbox" 
                        checked={rowModel.rows.length > 0 && selectedKeys.length === rowModel.rows.length}
                        ref={(input) => {
                            if (input) {
                                input.indeterminate = selectedKeys.length > 0 && selectedKeys.length < rowModel.rows.length;
                            }
                        }}
                        onChange={handleSelectAll}
                    />
                ) : null,
                width: 50,
                align: 'center',
                render: (_: any, record: any) => {
                    const isSelected = selectedKeys.includes(record.key);
                    return (
                        <input
                            type={options.type}
                            checked={isSelected}
                            onChange={(e) => handleSelect(record.key, record, e.target.checked)}
                            {...(options.getCheckboxProps?.(record) || {})}
                        />
                    );
                }
            };

            return [selectionColumn, ...columns];
        }
    };
};
