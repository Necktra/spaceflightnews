import NewsList from '../../news-list/news-list';
import Button from '../../ui/button/button';
import styles from  './main-page.module.scss';
import { useEffect, useCallback, useState } from 'react';
import { getNewsThunk } from '../../../store/news/actions';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getNewsError, getNewsList, getNewsLoading } from './../../../store/news/selector';
import { FETCH_STATUSES } from '../../../utils/constants';
import Spinner from '../../ui/spinner/spinner';

const MainPage = () => {

    const [filterNews, setfilterNews] = useState(false);
    const [offset, setOffset] = useState(0);

    const dispatch = useDispatch();
    const newsList = useSelector(getNewsList, shallowEqual);
    const newsLoading = useSelector(getNewsLoading, shallowEqual);
    const newsLoadingError = useSelector(getNewsError, shallowEqual);

    const getNews = useCallback(() => {
        dispatch(getNewsThunk(offset));
        setOffset(offset => offset + 10);
    }, [dispatch, offset]);

    useEffect(() => {
        getNews();
        // eslint-disable-next-line
    }, []);

    const filterNewsToggle = () => {
        setfilterNews(!filterNews)
    }

    return (
        <section className={styles.mainPage}>
            <Button filtered={filterNews} onClick={filterNewsToggle}>Filter by like</Button>
            <NewsList newsList={newsList} filterNews={filterNews} />
            {(newsLoading === FETCH_STATUSES.REQUEST) && <Spinner />}
            {newsLoadingError && <span>Error. Try again later</span>}
            <Button disabled={newsLoading === FETCH_STATUSES.REQUEST} onClick={getNews} className="main-page__btn">Show more</Button>
        </section>
    )
}

export default MainPage;