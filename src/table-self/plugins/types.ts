export interface TableInstance {
    props: any;
    columns: any[];
    rowModel: any;
    plugins: any[];
    state: any;
    setState: (updater: (old: any) => any) => void;
}

export interface TablePlugin {
    name: string;
    priority?: number; // 0-100, higher runs later
    initialize?: (instance: TableInstance) => void;
    processColumns?: (columns: any[], instance: TableInstance) => any[];
    processRowModel?: (rowModel: any, instance: TableInstance) => any;
    // ... other hooks as needed
}
