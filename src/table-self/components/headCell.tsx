import type { ColumnManager } from "../types";

export const HeadCell = ({ column }: { column: ColumnManager }) => {
    return <th >
        {column.title}
    </th>;
};  