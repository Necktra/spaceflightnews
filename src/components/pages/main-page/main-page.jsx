import NewsList from '../../news-list/news-list';
import Button from '../../ui/button/button';
import './main-page.scss';
import { useEffect, useState } from 'react';
// import { useEffect, useCallback, useState } from 'react';
import { getNewsThunk } from '../../../store/news/actions';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getNewsList, getNewsLoading } from './../../../store/news/selector';
// import { getNewsError, getNewsList, getNewsLoading } from './../../../store/news/selector';
import { FETCH_STATUSES } from '../../../utils/constants';

const MainPage = () => {
    const dispatch = useDispatch();
    const newsList = useSelector(getNewsList, shallowEqual);

    const newsLoading = useSelector(getNewsLoading, shallowEqual);
    // const newsLoadingError = useSelector(getNewsError, shallowEqual);

    const [filterNews, setfilterNews] = useState(false);

    const [offset, setOffset] = useState(0);

    // const getNews = useCallback(() => {
    //     dispatch(getNewsThunk(offset));
    //     setOffset(offset => offset + 10);
    // },[dispatch, offset]);

    //     const getNews = useCallback(() => {
    //     dispatch(getNewsThunk(offset));
    //     setOffset(offset => offset + 10);
    // },[newsLoading]);

    const getNews = () => {
        dispatch(getNewsThunk(offset));
        setOffset(offset => offset + 10);
    };

    useEffect(() => {
        getNews();
    }, []);

    const filterNewsToggle = () => {
        setfilterNews(!filterNews)
    }

    return (
        <section className="main-page">

            <Button filtered={filterNews} onClick={filterNewsToggle}>Filter by like</Button>
            <NewsList newsList={newsList} filterNews={filterNews} />
            <Button disabled={newsLoading === FETCH_STATUSES.REQUEST} onClick={getNews} className="main-page__btn">Show more</Button>
        </section>
    )
}

export default MainPage;