import { FOOD_PENDING, FOOD_REJECT, FOOD_SUCCESS, CATEGORY_PENDING, CATEGORY_SUCCESS, CATEGORY_REJECT } from "./type";

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

export const categoryPending = () => {
    return {
        type: CATEGORY_PENDING
    }
}

export const categorySuccess = (category) => {
    return {
        type: CATEGORY_SUCCESS,
        payload: category
    }
}

export const categoryReject = (errMsg) => {
    return {
        type: CATEGORY_REJECT,
        payload: errMsg
    }
}


export const fetchFromFood = () =>
    async (dispatch, getState) => {
        dispatch(foodPending());
        try {
            const response = await fetch('http://localhost:3000/item',{
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json',
                    'access_token': localStorage.getItem('access_token'),
                }
            });
            const responseJson = await response.json();
            dispatch(foodSuccess(responseJson));
        } catch (err) {
            dispatch(foodReject(err.message));
        }
    }

export const fetchFromCategory = () =>
    async (dispatch, getState) => {
        dispatch(categoryPending());
        try {
            const response = await fetch('http://localhost:3000/category',{
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json',
                    'access_token': localStorage.getItem('access_token'),
                }
            })
            const responseJson = await response.json();
            dispatch(categorySuccess(responseJson));
        } catch (err) {
            dispatch(categoryReject(err.message));
        }
    }