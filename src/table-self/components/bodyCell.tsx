
import type { CellModel, Row } from "../types";

export const BodyCell = ({ cell, row }: { cell: CellModel, row: Row }) => {
    return <td>{cell.column.render(cell.value, row.record, cell.index)}</td>;
};