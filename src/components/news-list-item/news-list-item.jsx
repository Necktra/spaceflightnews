import './news-list-item.scss';

const NewsListItem = () => {
    return (
        <section className="news-list-item">
            <div className="news-list-item__img-wrapper">
                <img src="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" alt="News picture" className="news-list-item__img" max-width="564" height="376" />
            </div>
            <header>
                <h4 className="news-list-item__title">Название новости Название новости Название новости Название новости</h4>
            </header>
            <p className="news-list-item__text">Текст новостиТекст новостиТекст новостиТекст новостиТекст новостиТекст новостиТекст новостиТекст новостиТекст новости</p>
        </section>
    )
}

export default NewsListItem;