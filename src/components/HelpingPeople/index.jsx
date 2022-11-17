import React, { useEffect } from "react";
import "./index.css";
import Image6 from "../../assets/images/bg-banner6.webp";
import Aos from "aos";
import "aos/dist/aos.css";

const HelpingPeople = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="section_4">
      <div data-aos="fade-up" className="section_4_title">
        <h1>
         Мы помогаем людям получить жильё своей мечты уже более восьми лет.
        </h1>
      </div>

      <div className="section_4_content">
        <div data-aos="zoom-in" className="image_container">
          <img src={Image6} alt="building" />
        </div>

        <div className="info">
          <p>
            Ищите и находите жильё своей мечты по доступным ценам, но с
            лучшим качеством. Доступно только в R&R Consulting!
          </p>

          <div className="rows">
            <div className="row_1">
              <div className="fact">
                <h2>Более 100</h2>
                <h3>проданного жилья</h3>
              </div>

              <div className="fact">
                <h2>Более 100</h2>
                <h3>жилья жду своих хозяев</h3>
              </div>
            </div>

            <div className="row_1">
              <div className="fact">
                <h2>Более 300</h2>
                <h3>полученных ВНЖ</h3>
              </div>

              <div className="fact">
                <h2>Более 500</h2>
                <h3>Счастливых клиентов</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpingPeople;
