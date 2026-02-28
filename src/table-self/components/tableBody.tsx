import type { Row, RowModel } from "../types";
import { BodyRow } from "./index";

export const TableBody = ({ rowModel }: { rowModel: RowModel }) => {
    return <tbody>
        {rowModel.rows.map((row: Row) => (
            <BodyRow row={row} key={row.record.key} />
        ))}
    </tbody>;
};