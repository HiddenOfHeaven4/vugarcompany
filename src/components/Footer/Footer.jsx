import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer__wrapper">
        <ul className="brand">
          <li>
            <span>R&R Consulting</span>
          </li>
          <li>
            <span>Стамбул, Турция</span>
          </li>
          <li>
            <span>Позвоните Нам: +90 536 724 97 24</span>
          </li>
          <li>
            <div className="socials">
              <a
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
              <AiOutlineInstagram className="socials__icon"/>
              </a>
            </div>
          </li>
        </ul>

        <ul className="services">
          <li>
            <span>Покупка недвижимости и оформление ВНЖ</span>
          </li>
          <li>
            <Link to="/properties">Услуги</Link>
          </li>
          <li>
            <Link to="/for-sale">Недвижимость</Link>
          </li>
          <li>
            <Link to="/for-rent">ВНЖ</Link>
          </li>
        </ul>

        <ul className="support">
          <li>
            <span>Помощь по сайту</span>
          </li>
          <li>
            <Link to="/">Часто задаваемые вопросы</Link>
          </li>
          <li>
            <Link to="/">Техническая поддержка</Link>
          </li>
          <li>
            <Link to="/">Связаться с консультантом</Link>
          </li>
        </ul>

        <ul className="subscribe">
          <li>
            <span>Подписаться на новости</span>
          </li>
          <li>
            <p>Подпишитесь на наши свежие новости </p>
          </li>
          <li>
            <div className="subscribe_input">
              <input
                type="text"
                placeholder="Ваш Email"
                className="input__sub"
              />
              <button aria-label="Submit">
                <BsArrowRight />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="footer--copyright">
        <div className="footer--bottom__left">
          <p>&#169;2022. Все права принадлежат и защищены R&R Consulting.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
