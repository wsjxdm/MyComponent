//实现过滤模型
import type { RowModel } from "../types";
import type { Filter } from "../types"

export function createFilterModel(rowModel: RowModel, filter: Filter): RowModel {
    const filterModel: RowModel = {
        record: rowModel.record,
        rows: rowModel.rows.filter((row) => {
            return row.record[filter.key] === filter.value;
        }),
    }
    return filterModel;
}
