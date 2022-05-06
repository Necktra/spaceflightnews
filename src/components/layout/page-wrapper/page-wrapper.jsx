 import './page-wrapper.scss';

import MainPage from "../../pages/main-page/main-page";

const PageWrapper = () => {
    return (
      <>
      {/* <Header /> */}
      <main className="page-wrapper__main">
        <MainPage />
      </main>
      {/* <Footer /> */}
    </>
      );
}

export default PageWrapper;