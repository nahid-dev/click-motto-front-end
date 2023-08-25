import React, { useState } from "react";
import Header from "../../components/header/Header";
import CategorySlider from "../../components/categories/CategorySlider";
import AllPicture from "../../components/allPicture/AllPicture";

const Home = () => {
  const [query, setQuery] = useState("people");
  return (
    <>
      {/* Header area */}
      <Header setQuery={setQuery}></Header>
      {/* Category Area */}
      <CategorySlider></CategorySlider>
      {/* All picture area */}
      <AllPicture></AllPicture>
    </>
  );
};

export default Home;
