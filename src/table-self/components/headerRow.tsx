import type { ColumnManager } from "../types";
import { HeadCell } from "./headCell";
export const HeaderRow = ({ headerGroup }: { headerGroup: ColumnManager[] }) => {
    return (
        <tr>
            {headerGroup.map((column) => (
                <HeadCell column={column} key={column.key} />
            ))}
        </tr>
    )
};
