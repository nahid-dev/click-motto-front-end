import React, { useEffect, useState } from "react";
import ContainerTwo from "../containerTwo/ContainerTwo";

const AllPicture = () => {
  const [query, setQuery] = useState("people");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const getPhotos = async () => {
      const apiKey = import.meta.env.VITE_CONTENT_API;
      setLoading(true);
      await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
        headers: {
          Authorization: apiKey,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setData(data.photos);
        });
    };
    getPhotos();
  }, []);
  return (
    <div className="my-5 md:my-10">
      <ContainerTwo>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold">All</span>
            <span>Photos</span>
            <span>Videos</span>
            <span>Freebies</span>
            <span>360</span>
          </div>
          <div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn m-1">
                Recommended
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Most recent</a>
                </li>
                <li>
                  <a>Most viewed </a>
                </li>
                <li>
                  <a>Most download </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {loading && (
            <span className="loading loading-spinner loading-lg"></span>
          )}
          {data?.map((item, index) => (
            <div key={index}>
              <img className="w-full" src={item.src.medium} alt="" />
            </div>
          ))}
        </div>
      </ContainerTwo>
    </div>
  );
};

export default AllPicture;
