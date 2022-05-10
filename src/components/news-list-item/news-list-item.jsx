import styles from './news-list-item.module.scss';
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNews, setNewValue } from '../../store/news/actions';
import IconButton from '../common/icon-button/icon-button';
import Delete from '../common/icons/delete';
import Like from '../common/icons/like';

const NewsListItem = ({ id, title, imageUrl, text, url, date, like }) => {
    const dispatch = useDispatch();

    const deleteCurrentNews = useCallback(() => {
        dispatch(deleteNews(id));
    },[id, dispatch]);

    const likeCurrentNews = useCallback(() => {
        dispatch(setNewValue(id, 'like', !like));
    },[id, like, dispatch]);

    return (
        <article className={styles.newsListItem}>

            <div className={styles.imgWrapper}>
                <img src={imageUrl} alt={title} className={styles.img} max-width="564" height="376" />
            </div>

            <IconButton type='like' callback={likeCurrentNews}>
                <Like filled={like} />
            </IconButton >

            <IconButton type='delete' callback={deleteCurrentNews}>
                <Delete />
            </IconButton >

            <header>
                <h3 className={styles.title}>{title}</h3>
            </header>
            <p className={styles.text}>{text}</p>
            <div className={styles.footerWrapper}>
                <span className={styles.date}>{date}</span>
                <a className={styles.link} rel="noreferrer" target="_blank" href={url}>Read in source</a>
            </div>
        </article>
    )
}

export default memo(NewsListItem);