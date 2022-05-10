import {
    BASE_NEWS_API_URL
} from "../../constants/constants";

export const GET_NEWS_REQUEST = "GISTS::GET_NEWS_REQUEST";
export const GET_NEWS_SUCCESS = "GISTS::GET_NEWS_SUCCESS";
export const GET_NEWS_FAILURE = "GISTS::GET_NEWS_FAILURE";

export const DELETE_NEWS = "GISTS::DELETE_NEWS";
export const LIKE_NEWS = "GISTS::LIKE_NEWS";

export const SET_OFFSET = "GISTS::SET_OFFSET";

export const getNewsRequest = () => ({
    type: GET_NEWS_REQUEST,
});

export const getNewsSuccess = (data) => ({
    type: GET_NEWS_SUCCESS,
    payload: {
        data
    }
});

export const setOffset = (offset) => ({
    type: SET_OFFSET,
    payload: {
        offset
    }
});

export const deleteNews = (id) => ({
    type: DELETE_NEWS,
    payload: {
        id
    }
});

export const likeNews = (id) => ({
    type: LIKE_NEWS,
    payload: {
        id
    }
});

export const getNewsFailure = (err) => ({
    type: GET_NEWS_FAILURE,
    payload: err,
});

export const getNewsThunk = () => async (dispatch, getState) => {
    dispatch(getNewsRequest());

    try {
        const offset = getState().news.offset;
        const response = await fetch(`${BASE_NEWS_API_URL}articles?_limit=10&_start=${offset}`);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();

        result.map(el => el.like = false);

        dispatch(getNewsSuccess(result));
        dispatch(setOffset(offset + 10));

    } catch (err) {
        dispatch(getNewsFailure(err));
        console.warn(err.message);
    }
};