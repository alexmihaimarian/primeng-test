import { SortMeta } from 'primeng/components/api/sortmeta';
import { FilterMetadata } from 'primeng/components/api/filtermetadata';

export interface TableState {
    first?: number;
    rows?: number;
    sortField?: string;
    sortOrder?: number;
    multiSortMeta?: SortMeta[];
    filters?: { [s: string]: FilterMetadata | FilterMetadata[] };
    columnWidths?: string;
    tableWidth?: string;
    wrapperWidth?: string;
    selection?: any;
    columnOrder?: string[];
    expandedRowKeys?: { [s: string]: boolean };
}
