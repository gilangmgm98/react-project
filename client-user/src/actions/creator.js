import { FOOD_DETAIL_PENDING, FOOD_DETAIL_REJECT, FOOD_DETAIL_SUCCESS, FOOD_PENDING, FOOD_REJECT, FOOD_SUCCESS } from "./type";

export const foodPending = () => {
    return {
        type: FOOD_PENDING
    }
}

export const foodReject = (errMsg) => { 
    return { 
        type: FOOD_REJECT,
        payload: errMsg
    }  
}

export const foodSuccess = (food) => {
    return {
        type: FOOD_SUCCESS,
        payload: food
    }
}

export const foodDetailPending = () => {
    return {
        type: FOOD_DETAIL_PENDING
    }
}

export const foodDetailSuccess = (food) => {
    return {
        type: FOOD_DETAIL_SUCCESS,
        payload: food
    }
}  

export const foodDetailReject = (errMsg) => {
    return {
        type: FOOD_DETAIL_REJECT,
        payload: errMsg
    }
}  

export const fetchFromFood = () => 
    async (dispatch, getState) => {
        dispatch(foodPending());
        try {
            const response = await fetch('http://localhost:3000/cust/item');
            const responseJson = await response.json();
            dispatch(foodSuccess(responseJson));
        } catch (err) {
            dispatch(foodReject(err.message));
        }
    }

    export const fetchFromFoodDetail = (id) =>
    async (dispatch, getState) => {
        dispatch(foodDetailPending());
        try {
            const response = await fetch(`http://localhost:3000/cust/item/${id}`);
            const responseJson = await response.json();
            dispatch(foodDetailSuccess(responseJson));
        } catch (err) {
            dispatch(foodDetailReject(err.message));
        }
    }