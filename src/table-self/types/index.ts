export interface Column {
    key: string;
    title: string;
    dataIndex: string;
    align?: 'left' | 'center' | 'right';
    width?: number;
    render?: (value: any, record?: any, index?: number) => React.ReactNode;
    filters?: { text: string, value: any }[];
}

export interface ColumnManager {
    key: string;
    title: string;
    dataIndex: string;
    align: 'left' | 'center' | 'right';
    width?: number;
    render: (value: any, record?: any, index?: number) => React.ReactNode;
    getVal: (record: any) => any;
    filters?: { text: string, value: any }[];
}
export interface CellModel {
    key: string
    value: any
    column: any
    index: number
}

export interface Row {
    record: any
    cells: CellModel[]
}

export interface RowModel {
    rows: Row[]
    record: any
}

export interface Filter {
    key: string
    value: any
}

export type SelectedKeysChange = string[] | ((prev: string[]) => string[])

export interface SelectedModel extends RowModel {
    selectedkeys: string[]
    onSelectedKeysChange?: (selectedkeys: SelectedKeysChange) => void
}
