import Header from "../../components/header/Header";
import CategorySlider from "../../components/categories/CategorySlider";
import AllPicture from "../../components/allPicture/AllPicture";

const Home = () => {
  return (
    <>
      {/* Header area */}
      <Header></Header>
      {/* Category Area */}
      <CategorySlider></CategorySlider>
      {/* All picture area */}
      <AllPicture></AllPicture>
    </>
  );
};

export default Home;
