import './news-list.scss';
import NewsListItem from './../news-list-item/news-list-item';
import { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getNewsError, getNewsList, getNewsLoading } from '../../store/news/selector';
import { getNewsThunk } from '../../store/news/actions';
import { transformDate } from '../../services/transformDate';

const NewsList = () => {
    const dispatch = useDispatch();
    const singlesList = useSelector(getNewsList, shallowEqual);
    const singlesLoading = useSelector(getNewsLoading, shallowEqual);
    const singlesError = useSelector(getNewsError, shallowEqual);

    const [offset, setOffset] = useState(0);

    const getNews = useCallback(() => {
        dispatch(getNewsThunk(offset));
    });

    useEffect(() => {
        getNews();
    }, []);

    const newsList = singlesList.map(el => <li key={el.id} className='news-list__item'><NewsListItem title={el.title} imageUrl={el.imageUrl} text={el.summary} url={el.url} date={transformDate(el.publishedAt)} /></li>)
    return (
        <ul className='news-list'>
            {newsList}
        </ul>
    )
}

export default NewsList;