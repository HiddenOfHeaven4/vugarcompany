import React from "react";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import ButtonArrow from "../../components/Button/ButtonArrow";
import "./index.css";

const Error404 = () => {
  return (
    <>
      <Navbar />
      <div className="error404__container">
        <h2 className="heading-primary">
          Эта страница сайта не доступна!
        </h2>
        <p>Пожалуйста посетите другие страницы сайта.</p>
        <Link to="/properties">
          <ButtonArrow title="Посетить" />
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Error404;
