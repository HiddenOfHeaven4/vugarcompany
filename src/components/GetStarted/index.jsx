import React, { useEffect } from "react";
import "./index.css";
import Image3 from "../../assets/images/image  3.jpg";
import ButtonArrow from "../Button/ButtonArrow.jsx";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const GetStarted = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-in-out-sine", once: true });
  }, []);
  return (
    <div className="section_2">
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="section_2_image_container"
      >
        <img src={Image3} alt="building2" />
      </div>

      <div data-aos="fade-up" className="section_2_slogan">
        <h2>
          Поможем с покупкой жилья по выгодным условиям, а так же помогаем в оформление документов для ВНЖ
        </h2>
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="selection"
      >
        <div className="buy">
          <h3>Купить жильё</h3>
          <p>
            Найдите свое райское место с захватывающими фотографиями в нашем катологе.
          </p>

          <Link to="/properties">
            <ButtonArrow title="Ознакомиться" />
          </Link>
        </div>

        <div className="rent">
          <h3>Помощь в оформление ВНЖ</h3>
          <p>
            Консультируем и занимаемся сбором Ваших документов для получения ВНЖ. Выполняем все условия согласно законадательству Республики Турция.
          </p>
          <Link to="/for-rent">
            <ButtonArrow title="Ознакомиться" />
          </Link>
        </div>

        <div className="sell">
          <h3>Продажа жилья</h3>
          <p>
            Поможем провести безопастную и выгодную сделку, без лишних нервов и затрат.
          </p>
          <Link to="/for-sale">
            <ButtonArrow title="Ознакомиться" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
