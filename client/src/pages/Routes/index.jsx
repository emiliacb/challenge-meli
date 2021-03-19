import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { useRoutes } from "hookrouter";

import Home from "../Home";
const Items = lazy(() => import("../Items"));
const Product = lazy(() => import("../Product"));
const NotFoundPage = lazy(() => import("../NotFoundPage"));

const routes = {
  "/": () => <Home />,
  "/items": () => <Items />,
  "/items/:id": ({ id }) => <Product id={id} />,
};

const Routes = () => {
  const routeResult = useRoutes(routes);

  return (
    <Suspense fallback={<Home />}>{routeResult || <NotFoundPage />}</Suspense>
  );
};

export default Routes;

Routes.propTypes = {
  id: PropTypes.string,
};
