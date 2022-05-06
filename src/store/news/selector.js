export function getNewsList(state) {
    return state.news.news
}

export const getNewsError = (state) => state.news.error;

export const getNewsLoading = (state) => state.news.request;