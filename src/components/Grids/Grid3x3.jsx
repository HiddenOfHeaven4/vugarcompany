import React, { useEffect } from "react";
import "./index.css";
import Clock from "../../assets/icons/clock-dynamic-premium.png";
import Lock from "../../assets/icons/lock-dynamic-color.png";
import Shield from "../../assets/icons/sheild-dynamic-color.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Grid3x3 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="parent">
        <div data-aos="zoom-in" className="parent__children">
          <div className="parent__children--icon">
            <img src={Shield} alt="Our Core Values" className="grid--icon" />
          </div>
          <div className="parent__children__details">
            <h2 className="heading-secondary">Профессиональная компания</h2>
            <p>
            Команда, состоящая из квалифицированных профессионалов, которые работают вместе, чтобы помогать Вам осуществить свою мечту. Успех компании зависит от всех, кто ее составляет. От директора до менеджера, через аналитический, административный и маркетинговый отделы.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" className="parent__children">
          <div className="parent__children--icon">
            <img src={Clock} alt="Our Core Values" className="grid--icon" />
          </div>
          <div className="parent__children__details">
            <h2 className="heading-secondary">24/7 Консультирование</h2>
            <p>
            Круглосуточная консультация – это услуга, которую может получить каждый по мере своей нужды в ней. Она подразумевает, что люди могут написать или позвонить к нам без учета следующих обстоятельств связанных с выходными днями, обеденными перерывами, отпусками и праздничными днями.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" className="parent__children">
          <div className="parent__children--icon">
            <img src={Lock} alt="Our Core Values" className="grid--icon" />
          </div>
          <div className="parent__children__details">
            <h2 className="heading-secondary">Надежность</h2>
            <p>
            Надежность нашей компании подтверждается: аккредитованными документами, многочисленными отзывыми наших клиентов, рекомендациями наших партнёров. Наша надежность - Ваше спокойствее!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid3x3;
