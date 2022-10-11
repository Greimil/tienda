import React, { FC } from "react";
import { NavBar } from "./NavBar";
import { GridShop } from "./GridShop";
import { json, Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Footer } from "./Footer";
import { useState } from "react";
import data from "./categories.json";
import { nanoid } from "nanoid";
import { Product } from "./Product";






export interface dataCategories {
  h2: string;
  p: string;
  imgs: {
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

export const Shop: FC = () => {
  const [btns, setbtns] = useState<boolean[]>([true, false, false, false]);
  const botones: any = [
    { titulo: "GPU" },
    { titulo: "CPU" },
    { titulo: "laptops" },
    { titulo: "Pc" },
  ];
  const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  const [items, setItems] = useState<dataCategories>(data.categories.gpu);

  interface currentInterface {
    titulo: string;
  }

  type itemType = "gpu" | "cpu" | "laptops" | "pc";

  const setglobalItems = (item: itemType, idx: number) => {
    setItems(data.categories[item]);
    let newBtnState: boolean[] = [false, false, false, false];
    newBtnState[idx] = true;
    setbtns(newBtnState);
  };

  return (
    <>
      <NavBar />
      <div className="bg-blackPrimary p-4 md:paddings pb-4 pt-4 font-mono ">
        <h2 className="font-semibold text-4xl" data-testid="xdxd">
          {items.h2}
        </h2>
        <p className="font-semibold text-base md:max-w-md">{items.p}</p>
      </div>

      <div className="md:paddings pt-12 pb-12">
        <div className=" flex md:justify-between  justify-around flex-wrap gap-4 ">
          <div className="flex  flex-wrap justify-center items-center  gap-2 ">
            {botones.map((current: currentInterface, idx: number) => {
              let item: string = current.titulo.toLowerCase();
              let itemCast: itemType = item as itemType;

              return (
                <button
                  onClick={() => {
                    setglobalItems(itemCast, idx);
                  }}
                  key={nanoid()}
                  className={`${
                    btns[idx] ? "bg-black" : ""
                  } btnRed md:min-w-[152px] text-sm pl-2 pr-2`}
                >
                  {current.titulo}
                </button>
              );
            })}
          </div>
          <div className="flex  items-center justify-end  flex-row  gap-3">
            <span>Ordenar por: </span>
            <button className="btnRed  pr-2 pl-2 text-sm  flex items-center ">
              Popularidad <IoIosArrowDown />{" "}
            </button>
          </div>
        </div>
      </div>

      <GridShop Imgs={items.imgs} />

      <div className="p-9">
        <div className="flex items-center  justify-center">
          <IoIosArrowBack color="#C70000" className="mr-3 cursor-pointer " />
          <div>
            {nums.map((current: number, idx) => {
              return (
                <button
                  key={nanoid()}
                  className={`${current === 1 ? "text-seconday" : ""} p-4`}
                >
                  {" "}
                  {current}
                </button>
              );

            })}
          </div>
          <IoIosArrowForward
            className="ml-3 cursor-pointer   "
            color="#C70000"
          />
        </div>
      </div>

      <Footer />

      
    </>
  );
};
