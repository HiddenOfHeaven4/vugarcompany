import { collection, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";
import { ImPriceTags } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import CustomLoader from "../../components/CustomLoader/index";
import MetaTag from "../../components/MetaTag/MetaTag";
import Navbar from "../../components/Navigation/Navbar";
import { db } from "../../utils/firebase-config";
import "./admin.css";
import Sidebar from "./Sidebar";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(false) /* true */;
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
  }, []);

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("");

  const categories = ["Buy", "Rent", "Sale"];
  const statusList = ["Hot", "Featured", "Active"];

  const updateProperty = async (event) => {
    event.preventDefault();
    const propertyDoc = doc(db, "properties", id);
    const newFields = {
      category: category,
      price: price,
      status: status,
    };
    await updateDoc(propertyDoc, newFields);
    // navigate("/");
  };

  return (
    <>
      {loading ? (
        <CustomLoader loading={loading} />
      ) : (
        <>
          <MetaTag title="Рабочая панель - Изменение объекта" />
          <Navbar />
          <div className="admin__dashboard">
            <Sidebar />

            <div className="admin__dashboard--details">
              <div className="update__property">
                <form onSubmit={updateProperty} className="create__property--form">
                  <div className="admin__input--wrapper">
                    <h2 className="heading-secondary ">Категория</h2>
                    <div className="admin__input--container">
                      <select
                        onChange={(e) => setCategory(e.target.value)}
                        className="admin__input"
                      >
                        <option value="">Выбрать категорию</option>
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
                    <h2 className="heading-secondary ">Статус</h2>
                    <div className="admin__input--container">
                      <select
                        onChange={(e) => setStatus(e.target.value)}
                        className="admin__input"
                      >
                        <option value="">Выбрать Статус</option>
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
                  <button
                    className="btn-width"
                    type="submit"
                  >
                    Добавить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EditProperty;
