import styles from './page-wrapper.module.scss';

import MainPage from "../main-page/main-page";
import Footer from '../footer/footer';

const PageWrapper = () => {
  return (
    <>
      {/* <Header /> */}
      <main className={styles.pageWrapper}>
        <MainPage />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;