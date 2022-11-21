import { doc, getDoc } from "firebase/firestore";
import ReactMarkdown from "https://esm.sh/react-markdown@7";
import "photoswipe/dist/photoswipe.css";
import React, { useEffect, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomLoader from "../../components/CustomLoader/index";
import Footer from "../../components/Footer/Footer";
import MetaTag from "../../components/MetaTag/MetaTag";
import Navbar from "../../components/Navigation/Navbar";
import { db } from "../../utils/firebase-config";
import "./index.css";

const PermanentResidency = () => {
  const { id } = useParams();
  const docRef = doc(db, "permanent-residency", id);
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const getPermanentResidency = async () => {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  };

  useEffect(() => {
    setLoading(false) /* true */;
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const doc = getPermanentResidency();
    doc.then((res) => {
      if (res) {
        const { content, title, images } = res;
        setContent(content);
        setTitle(title);
        setImages(images);
      } else {
        toast.error("Страница не доступна.");
        setTimeout(() => {
          navigate("/");
        }, 7000);
        setError(true);
      }
    });
  }, []);

  return (
    <>
      <>
        <MetaTag title="Оформление ВНЖ" />
        <Navbar />
        <ToastContainer />
        <section>
          <h1
            style={{
              fontSize: "50px",
              marginBottom: "20px",
              paddingBottom: "20px",
              borderBottom: "1px solid #333",
            }}
            className="title"
          >
            {title}
          </h1>
          <div className="markdown">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
          <div className="image-items">
            <Gallery>
              {images.map((image) => {
                return (
                  <Item
                    original={image.url}
                    thumbnail={image.url}
                    cropped={true}
                    width="1024"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <img className="image-item" ref={ref} onClick={open} src={image.url} />
                    )}
                  </Item>
                );
              })}
            </Gallery>
          </div>
          {loading && <CustomLoader loading={loading} />}
          {error && <h1>Ошибка</h1>}
        </section>
        <Footer />
      </>
    </>
  );
};

export default PermanentResidency;
