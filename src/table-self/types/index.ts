export interface Column {
    key: string;
    title: string;
    dataIndex: string;
    align?: 'left' | 'center' | 'right';
    width?: number;
    render?: (value: any, record?: any, index?: number) => React.ReactNode;
}

export interface ColumnManager {
    key: string;
    title: string;
    align: 'left' | 'center' | 'right';
    width?: number;
    render: (value: any, record?: any, index?: number) => React.ReactNode;
    getVal: (record: any) => any;
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