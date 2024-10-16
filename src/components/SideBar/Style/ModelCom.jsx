import React, { useState } from "react";
// import Button from "../Button";
import { Link } from "react-router-dom";
import Cross from "../Cross";
import { Fade } from "react-reveal";

const MItems = [
  { id: 1, shows: "/Images/show_1.png", STitle: "Oxford" },
  { id: 2, shows: "/Images/show_1.png", STitle: "DERBY" },
  { id: 3, shows: "/Images/show_1.png", STitle: "MONK" },
  { id: 4, shows: "/Images/show_1.png", STitle: "LOAFERS" },
  { id: 5, shows: "/Images/show_1.png", STitle: "DRESS BOOT" },
  { id: 6, shows: "/Images/show_1.png", STitle: "CHUKKA BOOTS" },
  { id: 7, shows: "/Images/show_1.png", STitle: "CHELSEA BOOTS" },
];

const ModelCom = () => {
  const [activeId, setActiveId] = useState(null); // Track active item by ID

  const handleClick = (id) => {
    setActiveId(id); // Set active item ID
  };

  return (
    <>
    <Fade right>
      <div className="flex">
        <div className="w-[19rem] sticky top-0">
          <p className="mt-7 h-10 text-center text-xl sticky top-0">Model </p>
          <div
            className="h-[32rem] overflow-y-scroll pt-10"
            style={{ scrollbarWidth: "none", "-ms-overflow-style": "none" }}
          >
            <div className="flex flex-col justify-center items-center text-center">
            {MItems.map((item) => (
              <div
                key={item.id}
                className={` my-8 w-[10rem] ${
                  activeId === item.id ? "border-b-4 border-[#bd9d51]" : ""
                }`}
                onClick={() => handleClick(item.id)}
              >
                <Link>
                  <img src={item.shows} alt={item.STitle} width={200} />
                </Link>
                <Link className="text-[#212127] mt-5 text-lg ">
                  {item.STitle}
                </Link>
              </div>
            ))}
            </div>
          </div>
          <Cross link={"style"}/>
        </div>
      </div>
      </Fade>
    </>
   
  );
};

export default ModelCom;
