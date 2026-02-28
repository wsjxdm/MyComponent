import type { CellModel, Row } from "../types";
import { BodyCell } from "./BodyCell";

export const BodyRow = ({ row }: { row: Row }) => {
    return (
        <tr>
            {row.cells.map((cell: CellModel) => (
                <BodyCell cell={cell} row={row} key={cell.key} />
            ))}
        </tr>
    )
};
