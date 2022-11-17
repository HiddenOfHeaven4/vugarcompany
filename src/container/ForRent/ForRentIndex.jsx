import React, { lazy, Suspense, useState, useEffect } from "react";
import CustomLoader from "../../components/CustomLoader/index";

const ForIkamet = lazy(() => import("./index"));

function ForIkametIndex() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Suspense fallback={<CustomLoader loading={loading} />}>
        <ForIkamet />
      </Suspense>
    </>
  );
}

export default ForIkametIndex;
