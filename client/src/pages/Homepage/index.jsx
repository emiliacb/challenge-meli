import React, { useMemo } from "react";
import Layout from "organisms/Layout";

const Homepage = () => {
  const seo = useMemo(() => {
    return {
      title: "Homepage | Meli Challenge",
      description: "Página principal del desafío técnico",
    };
  }, []);

  return (
    <Layout seo={seo}>
      <div></div>
    </Layout>
  );
};

export default Homepage;
