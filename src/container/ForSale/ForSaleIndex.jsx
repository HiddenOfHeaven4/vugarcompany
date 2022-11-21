import React, { lazy, Suspense, useState, useEffect } from "react";
import CustomLoader from "../../components/CustomLoader/index";

const ForLuxury = lazy(() => import("./index"));

function ForLuxuryIndex() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false) /* true */;
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Suspense fallback={<CustomLoader loading={loading} />}>
        <ForLuxury />
      </Suspense>
    </>
  );
}

export default ForLuxuryIndex;
