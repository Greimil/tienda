import React, { useState, useEffect, FC } from "react";
import {dataCategories} from "./Shop"
import { nanoid } from "nanoid";
import data from "./categories.json";

interface ImgsInterface {
  Imgs: {
    img1: {
      link: string;
      descrip: string;
      price: string;
    };
    img2: {
      link: string;
      descrip: string;
      price: string;
    };
    img3: {
      link: string;
      descrip: string;
      price: string;
    };
    img4: {
      link: string;
      descrip: string;
      price: string;
    };
    img5: {
      link: string;
      descrip: string;
      price: string;
    };
    img6: {
      link: string;
      descrip: string;
      price: string;
    };
    img7: {
      link: string;
      descrip: string;
      price: string;
    };
    img8: {
      link: string;
      descrip: string;
      price: string;
    };
  };
}

export const GridShop: FC<ImgsInterface> = ({ Imgs }) => {
  const cells = Object.entries(Imgs);

  return (
    <div className="md:ml-32 md:mr-32  grid md:grid-cols-4 gap-4 grid-rows-2 ">
      {cells.map((current) => {
        return (
          <div
            key={nanoid()}
            role="cell"
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
        );
      })}
    </div>
  );
};

// remove this is just for testing


// interface defaultProps {
//   Imgs?: {
//     img1: {
//         link: string;
//         descrip: string;
//         price: string;
//     };
//     img2: {
//         link: string;
//         descrip: string;
//         price: string;
//     };
//     img3: {
//         link: string;
//         descrip: string;
//         price: string;
//     };
//     img4: {
//         link: string;
//         descrip: string;
//         price: string;
//     };
//     img5: {
//         link: string;
//         descrip: string;
//         price: string;
//     };
//     img6: {
//         link: string;
//         descrip: string;
//         price: string;
//     };
//     img7: {
//         link: string;
//         descrip: string;
//         price: string;
//     };
//     img8: {
//         link: string;
//         descrip: string;
//         price: string;
//     };
// } | undefined
// }

GridShop.defaultProps  = {
  Imgs: data.categories.cpu
};
