import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import defaultImage from "images/Logo_ML_x2.png";

const defaultSeo = {
  title: "Emilia | Meli Challenge",
  description: "Desafío técnico para Mercado Libre",
  imageURL: defaultImage,
  publicURL: "https://challenge-meli-frontend.vercel.app/",
  type: "website",
};

const Seo = ({ seo = defaultSeo }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{seo.title}</title>
      <link rel="icon" href="./images/favicon.ico" type="image/x-icon" />
      <meta name="Description" content={seo.description} />

      {/*Og Tags*/}
      <meta name="title" property="og:title" content={seo.title} />
      <meta property="og:type" content={seo?.type} />
      <meta
        name="image"
        itemProp="image"
        property="og:image"
        content={seo?.imageURL || defaultSeo.imageURL}
      />
      <meta
        name="description"
        property="og:description"
        content={seo.description}
      />
      <meta
        property="og:url"
        content={seo?.publicURL || defaultSeo.publicURL}
      />

      {/*Twitter Tags*/}
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta
        name="twitter:image"
        content={seo?.imageURL || defaultSeo.imageURL}
      />
      <meta
        name="twitter:card"
        content={seo?.imageURL || defaultSeo.imageURL}
      />
    </Helmet>
  );
};

export default Seo;

Seo.propTypes = {
  seo: PropTypes.object,
};
