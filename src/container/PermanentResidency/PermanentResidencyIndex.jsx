import React, { lazy, Suspense, useState, useEffect } from "react";
import CustomLoader from "../../components/CustomLoader/index";

const PermanentResidency = lazy(() => import("./index"));

function PermanentResidencyIndex() {
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
        <PermanentResidency />
      </Suspense>
    </>
  );
}

export default PermanentResidencyIndex;
