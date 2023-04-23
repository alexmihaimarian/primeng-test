import { SortMeta } from 'primeng/components/api/sortmeta';
import { FilterMetadata } from 'primeng/components/api/filtermetadata';

export interface LazyLoadEvent {
    first?: number;
    last?: number;
    rows?: number;
    sortField?: string;
    sortOrder?: number;
    multiSortMeta?: SortMeta[];
    filters?: { [s: string]: FilterMetadata };
    globalFilter?: any;
    forceUpdate?: () => void;
}
