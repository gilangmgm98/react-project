import { FOOD_DETAIL_PENDING, FOOD_DETAIL_REJECT, FOOD_DETAIL_SUCCESS } from "../actions/type";


const initialState = {
    isLoading: true,
    error: '',
    food: {}
}

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOOD_DETAIL_PENDING:
            return {
              ...initialState
            }
        case FOOD_DETAIL_SUCCESS:
            return {
              ...state,
                isLoading: false,
                food: action.payload
            }
        case FOOD_DETAIL_REJECT:
            return {
              ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default detailReducer;