import { SortMeta } from 'primeng/components/api/sortmeta';

export interface SortEvent {
    data?: any[];
    mode?: string;
    field?: string;
    order?: number;
    multiSortMeta?: SortMeta[];
}
