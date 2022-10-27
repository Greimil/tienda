import React, { useState, useEffect, FC } from "react";
import { dataCategories } from "./Shop";
import { nanoid } from "nanoid";
import data from "./categories.json";
import { Link } from "react-router-dom";

interface ImgsInterface {
  Imgs: {
    img1: {
      id: number,
      link: string;
      descrip: string;
      price: string;
      descripcionProduct?: string
      
    };
    img2: {
      id: number,
      link: string;
      descrip: string;
      price: string;
      descripcionProduct?: string
      
    };
    img3: {
      id: number,
      link: string;
      descrip: string;
      price: string;
      descripcionProduct?: string
      
    };
    img4: {
      id: number,
      link: string;
      descrip: string;
      price: string;
      descripcionProduct?: string
      
    };
    img5: {
      id: number,
      link: string;
      descrip: string;
      price: string;
      descripcionProduct?: string
      
    };
    img6: {
      id: number,
      link: string;
      descrip: string;
      price: string;
      descripcionProduct?: string
      
    };
    img7: {
      id: number,
      link: string;
      descrip: string;
      price: string;
      descripcionProduct?: string
      
    };
    img8: {
      id: number,
      link: string;
      descrip: string;
      price: string;
      descripcionProduct?: string
      
    };
  };
}

export const GridShop: FC<ImgsInterface> = ({ Imgs }) => {
  const cells = Object.entries(Imgs);
  console.log(cells)
  

  return (
    <div className="md:ml-32 md:mr-32  grid md:grid-cols-4 gap-4 grid-rows-2 ">
      {cells.map((current) => {
        return (
          <Link to={`/product:${current[1].descrip.split(" ").join("-").toLowerCase()}`} state={current[1]} key={nanoid()} role="cell"  >
            <div
              className="  h-[332px] cursor-pointer  "
            >
              <img
                className="m-auto  w-60 h-60 object-cover"
                src={current[1].link}
                alt=""
              />
              <figcaption className="text-center  ">
                {current[1].descrip}
              </figcaption>
              <strong className="font-semibold text-center   block ">
                {current[1].price}
              </strong>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

// remove this is just for testing

GridShop.defaultProps = {
  Imgs: data.categories.cpu,
};
