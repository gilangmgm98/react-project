import { CATEGORY_PENDING, CATEGORY_SUCCESS, CATEGORY_REJECT } from "../actions/type";


const initialState = {
    isLoading: true,
    error: '',
    category: []
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_PENDING:
            return {
              ...initialState
            }
        case CATEGORY_SUCCESS:
            return {
              ...state,
                isLoading: false,
                category: action.payload
            }
        case CATEGORY_REJECT:
            return {
              ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default categoryReducer;