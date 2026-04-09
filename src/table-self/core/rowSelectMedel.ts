import type { RowModel } from "../types";

import type { SelectedKeysChange, SelectedModel } from "../types";

export function createRowSelectModel(
    rowModel: RowModel,
    selectedkeys: string[] = [],
    onSelectedKeysChange?: (selectedkeys: SelectedKeysChange) => void
): SelectedModel {

    return {
        ...rowModel,
        selectedkeys,
        onSelectedKeysChange,
    }
}
