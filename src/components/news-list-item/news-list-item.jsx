import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNews, likeNews } from '../../store/news/actions';
import IconButton from '../ui/icon-button/icon-button';
import Delete from '../ui/icons/delete';
import Like from '../ui/icons/like';
import './news-list-item.scss';

const NewsListItem = ({ id, title, imageUrl, text, url, date, like }) => {

    const dispatch = useDispatch();

    const deleteCurrentNews = () => {
        dispatch(deleteNews(id));
    };

    const likeCurrentNews = () => {
        dispatch(likeNews(id));
    };
    // const deleteCurrentNews = useCallback(() => {
    //     dispatch(deleteNews(id));
    // },[id]);

    // const likeCurrentNews = useCallback(() => {
    //     dispatch(likeNews(id));
    // },[id]);

    return (
        <section className="news-list-item">

            <div className="news-list-item__img-wrapper">
                <img src={imageUrl} alt={title} className="news-list-item__img" max-width="564" height="376" />
            </div>

            <IconButton type='like' callback={likeCurrentNews}>
                <Like filled={like} />
            </IconButton >

            <IconButton type='delete' callback={deleteCurrentNews}>
                <Delete />
            </IconButton >

            <header>
                <h4 className="news-list-item__title">{title}</h4>
            </header>
            <p className="news-list-item__text">{text}</p>
            <div className="news-list-item__footer-wrapper">
                <span className="news-list-item__date">{date}</span>
                <a className="news-list-item__link" rel="noreferrer" target="_blank" href={url}>Read in source</a>
            </div>
        </section>
    )
}

export default memo(NewsListItem);