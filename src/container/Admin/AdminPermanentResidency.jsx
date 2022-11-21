import { getDoc, doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CustomLoader from "../../components/CustomLoader/index";
import MetaTag from "../../components/MetaTag/MetaTag";
import Navbar from "../../components/Navigation/Navbar";
import "./admin.css";
import Sidebar from "./Sidebar";

import { BsPencilSquare } from "react-icons/bs";
import { toast } from "react-toastify";
import { db } from "../../utils/firebase-config";
import "./admin.css";
import ImageUpload from "./ImageUpload";

const AdminPermanentResidency = () => {
  const { id } = useParams();
  const docRef = doc(db, "permanent-residency", id);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const updateImageTitle = (title, image) => {
    image.title = title;
    setImages([...images]);
  };

  const updateImageUrl = (url, image) => {
    image.url = url;
    setImages([...images]);
  };

  const loadPermanentResidency = async () => {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    await setDoc(docRef, {
      title,
      content,
      images,
    })
      .then(() => {
        toast.success("Информация о ВНЖ обновлена");
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        console.error(error);
        toast.warning("Ошибка");
      });
  };

  const addImage = () => {
    let newImages = [...images];
    newImages.push({
      url: "",
      title: "",
    });
    console.log(images);
    setImages(newImages);
  };

  const removePhoto = (index) => {
    images.splice(index, 1);
    setImages([...images]);
  }

  useEffect(() => {
    loadPermanentResidency().then((res) => {
      if (res) {
        setTitle(res.title);
        setContent(res.content);
        setImages(res.images);
      }
    });
    if (!currentUser) {
      navigate("/");
    }
  }, []);
  return (
    <>
      {loading ? (
        <CustomLoader loading={loading} />
      ) : (
        <>
          <MetaTag title="Админ. Помощь с ВНЖ" />
          <Navbar />
          <div className="admin__dashboard">
            <Sidebar />
            <div className="admin__list--container">
              <h2 className="heading-primary productListHeading">
                Страница "Вид на жительство".
              </h2>
              <form className="create__property--form">
                <div className="admin__input--wrapper">
                  <h2 className="heading-secondary ">Заголовок</h2>
                  <div className="admin__input--container">
                    <input
                      type="text"
                      placeholder="Заголовок"
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
                  <h2 className="heading-secondary ">Контент (markdown)</h2>
                  <div className="admin__input--container">
                    <textarea
                      name="content"
                      id="content"
                      cols="30"
                      rows="20"
                      required
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                {images.map((image, index) => {
                  return (
                    <div key={index}>
                      <div className="admin__input--container">
                        <input
                          type="text"
                          placeholder="Заголовок"
                          required
                          value={image.title}
                          onChange={(e) =>
                            updateImageTitle(e.target.value, image)
                          }
                          className="admin__input"
                        />
                        <img
                          src={image.url}
                          alt={image.title}
                          className="admin__image"
                          style={{
                            width: '100px',
                            marginLeft: '20px'
                          }}
                        />
                        <div style={{ marginLeft: "2.3em" }}>
                          <ImageUpload
                            setImageURL={(url) => updateImageUrl(url, image)}
                          />
                        </div>
                        <button onClick={() => removePhoto(index)}>Удалить</button>
                      </div>
                    </div>
                  );
                })}

                <button onClick={addImage} type="button">
                  Добавить фото
                </button>

                <div className="admin__button">
                  <button id="createProductBtn" type="submit" onClick={submit}>
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

export default AdminPermanentResidency;
