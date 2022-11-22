import React, { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload";
import { db } from "../../utils/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MetaTag from "../../components/MetaTag/MetaTag";
import "./admin.css";
import Sidebar from "./Sidebar";
import { BsPencilSquare } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { ImPriceTags } from "react-icons/im";
import { BsFillGeoFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { GrStatusGood } from "react-icons/gr";
import { BiArea } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import CustomLoader from "../../components/CustomLoader/index";
import { useSelector } from "react-redux";

const NewProperty = () => {
  const navigate = useNavigate();

  const [imageURL, setImageURL] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [bathroom, setBathroom] = useState(0);
  const [bedroom, setBedroom] = useState(0);
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [area, setArea] = useState(0);
  const [recommended, setRecommended] = useState(false);
  const [active, setActive] = useState(true);
  const [status, setStatus] = useState("");

  const categories = ["Люкс", "Премиум", "Рабочий класс"];
  const statusList = ["Быстрая продажа", "Скоро будет доступно", "Доступно к продаже"];

  const [loading, setLoading] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
    setLoading(false) /* true */;
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const createProperty = async (e) => {
    const propertyCollectionref = collection(db, "properties");

    e.preventDefault();
    await addDoc(propertyCollectionref, {
      imageURL,
      title,
      description,
      category,
      bathroom: Number(bathroom),
      bedroom: Number(bedroom),
      price: Number(price),
      location,
      longitude: Number(longitude),
      latitude: Number(latitude),
      area: Number(area),
      status,
      recommended,
      active,
      createdAt: new Date(),
    })
      .then(() => {
        toast.success("Жильё добавлено");
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        console.error(error);
        toast.warning("Ошибка");
      });
  };
  return (
    <>
      {loading ? (
        <CustomLoader loading={loading} />
      ) : (
        <>
          <MetaTag title="Создать объект" />
          <div className="admin__dashboard">
            <Sidebar />
            <div className="admin__dashboard--details">
              <h1 className="heading-secondary">Создать новый объект</h1>
              <form className="create__property--form">
                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Название жилья</h2>
                  <div className="admin__input--container">
                    <input
                      type="text"
                      placeholder="Название жилья"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="admin__input"
                    />
                    <span className="admin__icon--container">
                      <BsPencilSquare className="admin__update--icon" />
                    </span>
                  </div>
                </div>

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Категория</h2>
                  <div className="admin__input--container">
                    <select
                      onChange={(e) => setCategory(e.target.value)}
                      className="admin__input"
                    >
                      <option value="">Выберите категорию</option>
                      {categories.map((cate) => (
                        <option key={cate} value={cate}>
                          {cate}
                        </option>
                      ))}
                    </select>
                    <span className="admin__icon--container">
                      <BiCategory className="admin__update--icon" />
                    </span>
                  </div>
                </div>

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Цена</h2>
                  <div className="admin__input--container">
                    <input
                      type="number"
                      placeholder="Цена"
                      required
                      onChange={(e) => setPrice(e.target.value)}
                      className="admin__input"
                    />
                    <span className="admin__icon--container">
                      <ImPriceTags className="admin__update--icon" />
                    </span>
                  </div>
                </div>

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Локация</h2>
                  <div className="admin__input--container">
                    <input
                      type="text"
                      placeholder="Локация"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="admin__input"
                    />
                    <span className="admin__icon--container">
                      <GoLocation className="admin__update--icon" />
                    </span>
                  </div>
                </div>

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Рекомендован</h2>
                  <div className="admin__input--container">
                    <input
                      value={recommended}
                      onChange={(e) => setRecommended(e.target.value)}
                      type="checkbox"
                    />
                  </div>
                </div>

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Доступное жильё</h2>
                  <div className="admin__input--container">
                    <input
                      value={active}
                      onChange={(e) => setActive(e.target.value)}
                      type="checkbox"
                    />
                  </div>
                </div>

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Статус</h2>
                  <div className="admin__input--container">
                    <select
                      onChange={(e) => setStatus(e.target.value)}
                      className="admin__input"
                    >
                      <option value="">Выберите статус</option>
                      {statusList.map((sta) => (
                        <option key={sta} value={sta}>
                          {sta}
                        </option>
                      ))}
                    </select>
                    <span className="admin__icon--container">
                      <GrStatusGood className="admin__update--icon" />
                    </span>
                  </div>
                </div>

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Площадь</h2>
                  <div className="admin__input--container">
                    <input
                      type="number"
                      placeholder="Площадь"
                      required
                      onChange={(e) => setArea(e.target.value)}
                      className="admin__input"
                    />
                    <span className="admin__icon--container">
                      <BiArea className="admin__update--icon" />
                    </span>
                  </div>
                </div>

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Спальня</h2>
                  <div className="admin__input--container">
                    <input
                      type="number"
                      placeholder="Спальня"
                      required
                      onChange={(e) => setBedroom(e.target.value)}
                      className="admin__input"
                    />
                    <span className="admin__icon--container">
                      <FaBed className="admin__update--icon" />
                    </span>
                  </div>
                </div>

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Ванная комната</h2>
                  <div className="admin__input--container">
                    <input
                      type="number"
                      placeholder="Ванная комната"
                      required
                      onChange={(e) => setBathroom(e.target.value)}
                      className="admin__input"
                    />
                    <span className="admin__icon--container">
                      <FaShower className="admin__update--icon" />
                    </span>
                  </div>
                </div>

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Ширина</h2>
                  <div className="admin__input--container">
                    <input
                      type="number"
                      placeholder="Ширина"
                      required
                      onChange={(e) => setLongitude(e.target.value)}
                      className="admin__input"
                    />
                    <span className="admin__icon--container">
                      <BsFillGeoFill className="admin__update--icon" />
                    </span>
                  </div>
                </div>

                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Долгота</h2>
                  <div className="admin__input--container">
                    <input
                      type="number"
                      placeholder="Долгота"
                      required
                      onChange={(e) => setLatitude(e.target.value)}
                      className="admin__input"
                    />
                    <span className="admin__icon--container">
                      <BsFillGeoFill className="admin__update--icon" />
                    </span>
                  </div>
                </div>

                <ImageUpload setImageURL={setImageURL} />

                <textarea
                  placeholder="Описание жилья"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  cols="100"
                  rows="10"
                  className="admin__textarea"
                ></textarea>
                <div className="admin__button">
                  <button
                    id="createProductBtn"
                    type="submit"
                    onClick={createProperty}
                  >
                    Добавить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NewProperty;
