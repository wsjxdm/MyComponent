import type { Column } from "../types";
import { TableHeader, TableBody } from "./index";
import { createTable } from "../core/createTable";
import { ErrorBoundary } from "./ErrorBoundary";

export const Table = (props: TableProps) => {
    const { columns, rowModel } = createTable(props);
    return (
        <table>
            <TableHeader columns={columns} />
            <ErrorBoundary>
                <TableBody rowModel={rowModel} />
            </ErrorBoundary>
        </table >
    )
}

interface TableProps {
    data: any[];
    columns: Column[];
    showFooter?: boolean;
}
