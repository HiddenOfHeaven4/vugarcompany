import React from "react";
import BannerSlider from "./BannerSlider";
import "./Banner.css";
import ButtonArrow from "../Button/ButtonArrow";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="banner__container">
        <div className="banner__content">
          <div className="welcome__text">
            <h1>
              Поможем Вам
              <br />
              подобрать жильё Вашей мечты
            </h1>
            <p>
              Где же еще хорошая недвижимость, как не в "R&R Consulting". Мы
              помочь вам найти дом на ваш вкус и потребности. Мы предоставляем полные
              услуги по продаже, покупке или аренде недвижимости.
            </p>
            <Link to="/properties">
              <ButtonArrow title="Приступим" />
            </Link>
          </div>
          <div className="banner__stats">
            <div className="premium__product">
              <h2 className="heading-secondary gradient__text">100+</h2>
              <p>Квартир на выбор</p>
            </div>
            <div className="premium__product">
              <h2 className="heading-secondary gradient__text">4500+</h2>
              <p>Счастливых клиентов</p>
            </div>
            <div className="premium__product">
              <h2 className="heading-secondary gradient__text">с 2016 года</h2>
              <p>Опыт работы</p>
            </div>
          </div>
        </div>

        <div className="banner__slider">
          <BannerSlider />
        </div>
      </div>
    </>
  );
}

export default Banner;
