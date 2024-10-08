import React, { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const LazyLoad = (importFunc) => {
  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc());
      }, 1500);
    });
  });
  //const LazyComponent = lazy(importFunc);

  return (props) => (
    <Suspense fallback={<Loading />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default LazyLoad;
