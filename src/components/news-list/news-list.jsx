import styles from './news-list.module.scss';
import NewsListItem from './../news-list-item/news-list-item';
import { transformDate } from '../../utils/transformDate';
import { useSelector, shallowEqual } from 'react-redux';
import { getLikedNews } from '../../store/news/selectors';

const NewsList = ({ newsList, showOnlyLikedNews }) => {
    const likedNews = useSelector(getLikedNews, shallowEqual);

    const newsListArray = newsList.map(el => {
        const isLike = likedNews.includes(el.id);
        return (showOnlyLikedNews ? isLike : true) && <li key={el.id} ><NewsListItem id={el.id} like={isLike} title={el.title} imageUrl={el.imageUrl} text={el.summary} url={el.url} date={transformDate(el.publishedAt)}/></li>
    }
    )

    return (
        <ul className={styles.newsList}>
            {showOnlyLikedNews && (likedNews.length === 0) ? <span>There is nothing in favorites</span> : newsListArray}
        </ul>
    )
}

export default NewsList;