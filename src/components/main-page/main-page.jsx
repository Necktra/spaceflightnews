import NewsList from '../news-list/news-list';
import Button from '../common/button/button';
import styles from './main-page.module.scss';
import { useEffect, useCallback, useState } from 'react';
import { getNewsThunk } from '../../store/news/actions';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getNewsError, getNewsList, getNewsLoading } from '../../store/news/selectors';
import { FETCH_STATUSES } from '../../constants/constants';
import Spinner from '../common/spinner/spinner';

const MainPage = () => {
    const [showOnlyLikedNews, setShowOnlyLikedNews] = useState(false);

    const dispatch = useDispatch();
    const newsList = useSelector(getNewsList, shallowEqual);
    const newsLoading = useSelector(getNewsLoading, shallowEqual);
    const newsLoadingError = useSelector(getNewsError, shallowEqual);

    const firstRender = !!(newsList.length === 0 && !newsLoadingError);

    const getNews = useCallback(() => {
        dispatch(getNewsThunk());
    }, [dispatch]);

    useEffect(() => {
        getNews();
        // eslint-disable-next-line
    }, []);

    const filterNewsToggle = () => {
        setShowOnlyLikedNews(!showOnlyLikedNews)
    }

    return (
        <section className={styles.mainPage}>

            <h1 className={styles.title}>Spaceflight News:</h1>

            {!firstRender && <Button showOnlyLikedNews={showOnlyLikedNews} onClick={filterNewsToggle}>Filter by like</Button>}
            <NewsList newsList={newsList} showOnlyLikedNews={showOnlyLikedNews} />
            {(newsLoading === FETCH_STATUSES.REQUEST) && <Spinner />}
            {newsLoadingError && <span>Error. Try again later</span>}
            {!firstRender && <Button disabled={newsLoading === FETCH_STATUSES.REQUEST} onClick={getNews}>Show more</Button>}
        </section>
    )
}

export default MainPage;