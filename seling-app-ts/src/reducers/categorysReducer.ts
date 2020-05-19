import { CATEGORY } from '../actions/types';
import { CategorysState, CategorysActionTypes } from '../interfaces/categorysInterface';
const initialState: CategorysState = {
    categorys: []
}

const categorysReducer = (state = initialState, action: CategorysActionTypes) => {
    switch (action.type) {
        case CATEGORY: {
            return { ...state, categorys: action.categorys };
        }
        default: return state;
    }
}

export default categorysReducer;