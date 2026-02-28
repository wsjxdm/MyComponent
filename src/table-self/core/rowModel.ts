import type { RowModel } from "../types";

export function createRowModel(
    data: any[],
    columns: any[],
): RowModel {
    const rows = data.map((record) => ({
        record,
        cells: columns.map((column, index) => ({
            key: column.key,
            value: column.getVal(record),
            column,
            index: index,
        })),
    }))
    return {
        record: data,
        rows
    }
}