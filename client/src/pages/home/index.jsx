import React, { useMemo } from "react";
import Layout from "../../components/organisms/Layout/index.jsx";

const Home = () => {
  const seo = useMemo(() => {
    return {
      title: "Home | Meli Challenge",
      description: "Página principal del desafío técnico",
    };
  }, []);

  return (
    <Layout seo={seo}>
      <div></div>
    </Layout>
  );
};

export default Home;
