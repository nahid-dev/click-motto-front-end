import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import ContainerTwo from "../containerTwo/ContainerTwo";
import { SwiperNavBtn } from "../swiperNavBtn/SwiperNavBtn";

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    const fetchCategories = async () => {
      const apiKey = import.meta.env.VITE_CONTENT_API;
      const keywords = [
        "nature",
        "city",
        "food",
        "technology",
        "workspace",
        "summer",
        "gravity",
        "love",
        "sea",
        "art",
        "sky",
        "dog",
        "flower",
        "cats",
      ];
      const categoriesData = await Promise.all(
        keywords.map(async (keyword) => {
          const response = await fetch(
            `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`,
            {
              headers: {
                Authorization: apiKey,
              },
            }
          );
          const data = await response.json();
          return {
            name: keyword,
            image: data.photos[0].src.large,
          };
        })
      );

      setCategories(categoriesData);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <ContainerTwo>
        <div className=" mt-5 shadow-xl">
          <div className="border md:px-6 py-2">
            <div>
              <h3 className="font-semibold text-2xl">Top Categories</h3>
            </div>
            <div className="my-5">
              <Swiper
                slidesPerView={6}
                spaceBetween={20}
                loop={true}
                breakpoints={{
                  300: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 50,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                {categories?.map((category, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative">
                      <img
                        className="h-[100px] w-full"
                        src={category.image}
                        alt=""
                      />
                      <div className="absolute top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                        <p className="text-white font-medium">
                          {category.name}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <SwiperNavBtn></SwiperNavBtn>
              </Swiper>
            </div>
          </div>
        </div>
      </ContainerTwo>
    </>
  );
};

export default CategorySlider;
