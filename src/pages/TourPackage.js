import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const TourPackage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
    return (

    <>
    <Header />
    <main class="main" id="main">
      <section
        class="section about-hero"
        style={{ backgroundImage: 'url(./media/bg-about.jpg)'}}
        id="hero"
      >
        <h1 class="hero__title">Posting</h1>
      </section>

      <section class="section tour container">
        <div class="tour__container">
          <div class="tour__card">
            <img src="./media/img-11.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">독일</h5>
              <span class="tour__data-subtitle">베를린</span>
            </div>
            <Link to="tour-package/asd" class="tour__link"></Link>          </div>
          <div class="tour__card">
            <img src="./media/img-12.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">프랑스</h5>
              <span class="tour__data-subtitle">파리</span>
            </div>
            <Link to="tour-package/asd" class="tour__link"></Link>          </div>
          <div class="tour__card">
            <img src="./media/img-13.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">일본</h5>
              <span class="tour__data-subtitle">도쿄</span>
            </div>
            <Link to="tour-package/asd" class="tour__link"></Link>          </div>
          <div class="tour__card">
            <img src="./media/img-14.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">영국</h5>
              <span class="tour__data-subtitle">런던</span>
            </div>
          <Link to="tour-package/asd" class="tour__link"></Link>          </div>
          <div class="tour__card">
            <img src="./media/img-15.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">스페인</h5>
              <span class="tour__data-subtitle">바르셀로나</span>
            </div>
          <Link to="tour-package/asd" class="tour__link"></Link>          </div>
          <div class="tour__card">
            <img src="./media/img-16.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">러시아</h5>
              <span class="tour__data-subtitle">모스크바</span>
            </div>
          <Link to="tour-package/asd" class="tour__link"></Link>          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
    )  
} 

export default TourPackage;