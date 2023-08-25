import React from "react";
import Header from "../../components/header/Header";
import CategorySlider from "../../components/categories/CategorySlider";

const Home = () => {
  return (
    <>
      {/* Header area */}
      <Header></Header>
      {/* Category Area */}
      <CategorySlider></CategorySlider>
    </>
  );
};

export default Home;
