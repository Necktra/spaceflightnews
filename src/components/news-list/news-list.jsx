import styles from './news-list.module.scss';
import NewsListItem from './../news-list-item/news-list-item';
import { transformDate } from '../../utils/transformDate';

const NewsList = ({ newsList, showOnlyLikedNews }) => {
    const newsListArray = newsList.map(el => {
        return (showOnlyLikedNews ? el.like : true) && <li key={el.id} ><NewsListItem id={el.id} like={el.like} title={el.title} imageUrl={el.imageUrl} text={el.summary} url={el.url} date={transformDate(el.publishedAt)} /></li>
    }
    )

    const showNothingInFavorites = newsListArray.every(el => el === false) && showOnlyLikedNews;

    return (
        <ul className={styles.newsList}>
            {showNothingInFavorites ? <span>There is nothing in favorites</span> : newsListArray}
        </ul>
    )
}

export default NewsList;