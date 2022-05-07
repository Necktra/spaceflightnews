import {
    BASE_NEWS_API_URL
} from "../../utils/constants";

export const GET_NEWS_REQUEST = "GISTS::GET_NEWS_REQUEST";
export const GET_NEWS_SUCCESS = "GISTS::GET_NEWS_SUCCESS";
export const GET_NEWS_FAILURE = "GISTS::GET_NEWS_FAILURE";

export const DELETE_NEWS = "GISTS::DELETE_NEWS";


export const getNewsRequest = () => ({
    type: GET_NEWS_REQUEST,
});

export const getNewsSuccess = (data) => ({
    type: GET_NEWS_SUCCESS,
    payload: {
        data
    }
});

export const deleteNews = (id) => ({
    type: DELETE_NEWS,
    payload: {
        id
    }
});

export const getNewsFailure = (err) => ({
    type: GET_NEWS_FAILURE,
    payload: err,
});

export const getNewsThunk = (offset = 0) => async (dispatch, getState) => {

    dispatch(getNewsRequest());

    try {
        const response = await fetch(`${BASE_NEWS_API_URL}articles?_limit=10&_start=${offset}`);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const result = await response.json();

        dispatch(getNewsSuccess(result));
    } catch (err) {
        dispatch(getNewsFailure(err));
        console.warn(err.message);
    }
};