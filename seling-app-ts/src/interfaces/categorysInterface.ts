import { PRODUCTS, PRODUCTS_SALE, CATEGORY } from '../actions/types';
export interface CategorysState {
    categorys: any[]
}

interface GetCategoryAction {
    type: typeof CATEGORY,
    categorys: any[]
}

export type CategorysActionTypes = GetCategoryAction;