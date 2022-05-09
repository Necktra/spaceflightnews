export function getNewsList(state) {
    return state.news.news
}

export const getNewsError = (state) => state.news.error;

export const getNewsLoading = (state) => state.news.request;

export const getCurrentNewsLike = id => store => {
    return store.news.likedNews.includes(id)
}

export const getLikedNews = (state) => state.news.likedNews;
