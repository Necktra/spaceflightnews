import './news-list-item.scss';

const NewsListItem = ({ title, imageUrl, text, url, date }) => {

    return (
        <section className="news-list-item">
            <div className="news-list-item__img-wrapper">
                <img src={imageUrl} alt={title} className="news-list-item__img" max-width="564" height="376" />
                {/* <img src="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" alt="News picture" className="news-list-item__img" max-width="564" height="376" /> */}
            </div>
            <header>
                <h4 className="news-list-item__title">{title}</h4>
            </header>
            <p className="news-list-item__text">{text}</p>
            <div className="news-list-item__footer-wrapper">
                <span className="news-list-item__date">{date}</span>
                <a className="news-list-item__link" target="_blank" href={url}>Read more</a>
            </div>
        </section>
    )
}

export default NewsListItem;