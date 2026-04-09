import { useState, useRef, useEffect } from 'react';
import type { ColumnManager, Filter } from "../types";
import styles from './table.module.css';

export const HeadCell = ({
    column,
    filter,
    onFilterChange
}: {
    column: ColumnManager,
    filter: Filter | null,
    onFilterChange: (filter: Filter | null) => void
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleFilterSelect = (value: any) => {
        if (value === null) {
            onFilterChange(null);
        } else if (filter && filter.value === value) {
            onFilterChange(null);
        } else {
            onFilterChange({ key: column.dataIndex, value });
        }
        setIsOpen(false);
    };

    return (
        <div
            className={styles.headerCell}
            style={{
                width: column.width,
                minWidth: column.width,
                maxWidth: column.width,
                flex: column.width ? 'none' : 1,
                position: 'relative'
            }}
        >
            <span>{column.title}</span>
            {column.filters && column.filters.length > 0 && (
                <div ref={dropdownRef} className={styles.filterContainer}>
                    <span
                        className={`${styles.filterIcon} ${filter ? styles.filterIconActive : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ▼
                    </span>
                    {isOpen && (
                        <div className={styles.filterDropdown}>
                            <div
                                className={`${styles.filterItem} ${!filter ? styles.filterItemActive : ''}`}
                                onClick={() => handleFilterSelect(null)}
                            >
                                All
                            </div>
                            {column.filters.map((f, i) => (
                                <div
                                    key={i}
                                    className={`${styles.filterItem} ${filter?.value === f.value ? styles.filterItemActive : ''}`}
                                    onClick={() => handleFilterSelect(f.value)}
                                >
                                    {f.text}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
