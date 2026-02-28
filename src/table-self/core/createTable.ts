import { columnManager } from "./columnManager"
import { createRowModel } from "./rowModel"

export function createTable(props: any) {
    // console.log('props', props)
    // 1. 解析 columns
    const columns = columnManager(props.columns)

    // 2. 构建 rowModel
    const rowModel = createRowModel(
        props.data,
        columns,
    )

    // 3. 注册插件
    // props.plugins?.forEach(plugin => {
    //     plugin.initialize(instance)
    // })
    const instance = {
        props,
        columns,
        rowModel,
    }

    return instance;
}