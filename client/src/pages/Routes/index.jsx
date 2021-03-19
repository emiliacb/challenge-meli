import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { useRoutes } from "hookrouter";

import Homepage from "../Homepage";
const Items = lazy(() => import("../Items"));
const Product = lazy(() => import("../Product"));
const NotFoundPage = lazy(() => import("../NotFoundPage"));

const routes = {
  "/": () => <Homepage />,
  "/items": () => <Items />,
  "/items/:id": ({ id }) => <Product id={id} />,
};

const Routes = () => {
  const routeResult = useRoutes(routes);

  return (
    <Suspense fallback={<Homepage />}>
      {routeResult || <NotFoundPage />}
    </Suspense>
  );
};

export default Routes;

Routes.propTypes = {
  id: PropTypes.string,
};
