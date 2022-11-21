import React, { useEffect, useState } from "react";
import MetaTag from "../../components/MetaTag/MetaTag";
import Navbar from "../../components/Navigation/Navbar";
import Sidebar from "./Sidebar";
import "./admin.css";
import CustomLoader from "../../components/CustomLoader/index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(false);

  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
    setLoading(false) /* true */;
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <CustomLoader loading={loading} />
      ) : (
        <>
          <MetaTag title="Панель администратора" />
          <Navbar />
          <div className="admin__dashboard">
            <Sidebar />

            <div className="admin__dashboard--details">
              <h2 className="heading-primary">Приветствую тебя, Шеф 👋</h2>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdminDashboard;
