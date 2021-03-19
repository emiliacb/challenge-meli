import React, { Suspense } from "react";
import PropTypes from "prop-types";

import Seo from "atoms/Seo";
import NavBar from "organisms/NavBar/index.jsx";
import Footer from "organisms/Footer/index.jsx";

import style from "./styles.module.scss";

const Layout = ({ children, seo }) => {
  return (
    <>
      <Seo seo={seo} />
      <NavBar />
      <Suspense
        fallback={
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              minHeight: "calc(100vh - 6rem)",
            }}
          >
            <h1>Loading ...</h1>
          </div>
        }
      >
        <main className={style.root}>
          <div className={style.container}>{children}</div>
        </main>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  seo: PropTypes.object,
};
