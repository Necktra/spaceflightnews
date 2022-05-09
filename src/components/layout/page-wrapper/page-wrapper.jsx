import styles from './page-wrapper.module.scss';

import MainPage from "../../pages/main-page/main-page";

const PageWrapper = () => {

  return (
    <>
      {/* <Header /> */}
      <main className={styles.pageWrapper}>
        <MainPage />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default PageWrapper;