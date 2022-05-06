import NewsList from '../../news-list/news-list';
import Button from '../../ui/button/button';
import './main-page.scss';

const MainPage = () => {
    return (
        <section className="main-page">
            <NewsList />
            <Button className="main-page__btn">Show more</Button>
        </section>
    )
}

export default MainPage;