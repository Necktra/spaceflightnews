import './news-list.scss';
import NewsListItem from './../news-list-item/news-list-item';

const NewsList = () => {
    return (

        <ul className='news-list'>
           <li className='news-list__item'><NewsListItem /></li>
           <li className='news-list__item'><NewsListItem /></li>
           <li className='news-list__item'><NewsListItem /></li> 
           <li className='news-list__item'><NewsListItem /></li> 
           <li className='news-list__item'><NewsListItem /></li> 
           <li className='news-list__item'><NewsListItem /></li> 
        </ul>
    )
}

export default NewsList;