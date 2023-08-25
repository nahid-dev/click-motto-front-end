import React, { useEffect, useState } from "react";
import ContainerOne from "../containerOne/ContainerOne";
import { GoSearch } from "react-icons/go";

const Header = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [value, setValue] = useState("");
  console.log(value);
  // console.log(setQuery);
  //   console.log(backgroundImage);

  useEffect(() => {
    // Fetch random image from Pexels API
    const fetchRandomImage = async () => {
      const apiKey = import.meta.env.VITE_CONTENT_API;
      const randomPage = Math.floor(Math.random() * 100) + 1;
      const apiUrl = `https://api.pexels.com/v1/search?query=nature&per_page=1&page=${randomPage}`;

      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: apiKey,
          },
        });

        const data = await response.json();
        if (data.photos && data.photos.length > 0) {
          setBackgroundImage(data.photos[0].src.large);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchRandomImage();
  }, []);

  return (
    <>
      <ContainerOne>
        <div className="relative">
          {/* Banner Image */}
          <img
            className="w-full  h-[80vh] object-cover"
            src={backgroundImage}
            alt=""
          />

          {/* Banner content */}
          <div className="absolute w-full h-full bg-black top-0 bg-opacity-30 flex items-center">
            <div className="w-2/3 mx-auto md:space-y-5 text-center">
              <h1 className="text-4xl font-bold text-white ">
                Your local source of high quality images and videos directly
                from their creator
              </h1>
              <div className="flex items-center">
                <input
                  placeholder="Search Photos and Videos"
                  className="w-full border-0 p-2 px-5 rounded-s-full focus-visible:outline-none"
                  type="text"
                  onChange={(e) => setValue(e.target.value)}
                />
                <button className="bg-white border-0 p-2 px-5 rounded-e-full ">
                  <GoSearch size={24}></GoSearch>
                </button>
              </div>
              <p className="text-white">
                Recommended: Summer, Food, Covid-19, Real state, Love
              </p>
            </div>
          </div>
        </div>
      </ContainerOne>
    </>
  );
};

export default Header;
