import type { ColumnManager } from "../types";
import { HeaderRow } from "./HeaderRow";

export const TableHeader = ({ columns }: { columns: ColumnManager[] }) => {
    return (
        <thead>
            <HeaderRow headerGroup={columns} />
        </thead>
    )
};