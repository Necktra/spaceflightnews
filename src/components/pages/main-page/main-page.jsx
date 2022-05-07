import NewsList from '../../news-list/news-list';
import Button from '../../ui/button/button';
import './main-page.scss';
import { useEffect, useCallback, useState } from 'react';
import { getNewsThunk } from '../../../store/news/actions';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getNewsError, getNewsList, getNewsLoading, getLikedNews } from './../../../store/news/selector';

const MainPage = () => {
    const dispatch = useDispatch();
    const newsList = useSelector(getNewsList, shallowEqual);
    
    const singlesLoading = useSelector(getNewsLoading, shallowEqual);
    const singlesError = useSelector(getNewsError, shallowEqual);


    const [filterNews, setfilterNews] = useState(false);

    const [offset, setOffset] = useState(0);

    const getNews = useCallback(() => {
        dispatch(getNewsThunk(offset));
        setOffset(offset => offset + 10);
    });

    useEffect(() => {
        getNews();
    }, []);

    return (
        <section className="main-page">
            <Button onClick={()=>setfilterNews(!filterNews)} className="main-page__btn">Filter</Button>
            <NewsList newsList={newsList} filterNews={filterNews}/>
            <Button onClick={getNews} className="main-page__btn">Show more</Button>
        </section>
    )
}

export default MainPage;