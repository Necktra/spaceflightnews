import './news-list.scss';
import NewsListItem from './../news-list-item/news-list-item';
import { transformDate } from '../../services/transformDate';

const NewsList = ({ newsList }) => {

    const newsListArray = newsList.map(el => <li key={el.id} className='news-list__item'><NewsListItem title={el.title} imageUrl={el.imageUrl} text={el.summary} url={el.url} date={transformDate(el.publishedAt)} /></li>)
    return (
        <ul className='news-list'>
            {newsListArray}
        </ul>
    )
}

export default NewsList;