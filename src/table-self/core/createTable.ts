import { columnManager } from "./columnManager"
import { createRowModel } from "./rowModel"
import { createFilterModel } from "./filterModel"
import type { Filter } from "../types"
import { createRowSelectModel } from "./rowSelectMedel"
import { useMemo } from "react"


export function useTable(props: any) {
    const columns = useMemo(() => columnManager(props.columns), [props.columns])
    const rowModel = useMemo(() => createRowModel(
        props.data,
        columns,
    ), [props.data, columns])

    const filterRowModel = useMemo(() => props.filter ? createFilterModel(rowModel, props.filter as Filter) : rowModel, [props.filter, rowModel])

    const rowSelectModel = createRowSelectModel(
        filterRowModel,
        props.rowSelection?.selectedRowKeys || [],
        props.rowSelection?.onChange
    )

    const instance = {
        props,
        columns,
        rowModel: rowSelectModel,
    }

    return instance;
}

export { useTable as createTable };
