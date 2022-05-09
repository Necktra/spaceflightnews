import styles from './news-list-item.module.scss';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { deleteNews, likeNews } from '../../store/news/actions';
import IconButton from '../ui/icon-button/icon-button';
import Delete from '../ui/icons/delete';
import Like from '../ui/icons/like';

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
        <section className={styles.newsListItem}>

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
                <h4 className={styles.title}>{title}</h4>
            </header>
            <p className={styles.text}>{text}</p>
            <div className={styles.footerWrapper}>
                <span className={styles.date}>{date}</span>
                <a className={styles.link} rel="noreferrer" target="_blank" href={url}>Read in source</a>
            </div>
        </section>
    )
}

export default memo(NewsListItem);