import type { Column, ColumnManager } from "../types";

//为返回的值也定义类型
export const columnManager = (columns: Column[]): ColumnManager[] => {
    const defaultRender = (value: any) => value;

    return columns.map((column) => {
        const getVal = (record: any) => {
            return column.dataIndex ? record[column.dataIndex] : '';
        };
        return {
            key: column.key,
            title: column.title,
            align: column.align || 'left',
            width: column.width,
            render: (value: any, record?: any, index?: number) => column.render?.(value, record, index) || defaultRender(value),
            getVal
        };
    })

}



