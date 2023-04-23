import { SelectItem } from 'primeng/components/api/selectitem';

export interface SelectItemGroup {
    label: string;
    value?: any;
    items: SelectItem[];
}
