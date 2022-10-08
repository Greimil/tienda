import React, { FC } from "react";
import { NavBar } from "./NavBar";
import { GridShop } from "./GridShop";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Footer } from "./Footer";
import { useState } from "react";
import data from "./categories.json";


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
  
  
  // const [btns, setbtns] = useState([])

  const [items, setItems] = useState<dataCategories >(
    data.categories.gpu
  );
  
  type itemType = "gpu" | "cpu" | "laptop" | "pc"
  
  const setglobalItems = (item: itemType, ) => {
    setItems(data.categories[item]);
    // const newArr = [...btns.filter((current) => !current)];
  
  };

  return (
    <>
      <NavBar />
      <div className="bg-blackPrimary p-4 md:paddings pb-4 pt-4 ">
        <h2 className="font-semibold text-4xl" data-testid="xdxd">
          {items.h2}
        </h2>
        <p className="font-semibold text-base md:max-w-md">{items.p}</p>
      </div>

      <div className="md:paddings pt-12 pb-12">
        <div className=" flex md:justify-between  justify-around flex-wrap gap-4 ">
          <div className="flex  flex-wrap justify-center items-center  gap-2 ">
            <button
              onClick={() => {
                setglobalItems("gpu");
              }}
              className="btnRed md:min-w-[152px] text-sm bg-black pl-2 pr-2 "
            >
              GPU
            </button>
            <button
              onClick={() => {
                setglobalItems("cpu");
              }}
              className="btnRed md:min-w-[152px] text-sm pl-2 pr-2"
            >
              CPU
            </button>
            <button
              onClick={() => {
                setglobalItems("laptop");
              }}
              className="btnRed md:min-w-[152px] text-sm pl-2 pr-2"
            >
              Laptops
            </button>
            <button
              onClick={() => {
                setglobalItems("pc");
              }}
              className="btnRed md:min-w-[152px] text-sm pl-2 pr-2"
            >
              Escritorio
            </button>
          </div>
          <div className="flex  items-center justify-end  flex-row  gap-3">
            <span>Ordenar por: </span>
            <button className="btnRed  pr-2 pl-2 text-sm  flex items-center ">
              Popularidad <IoIosArrowDown />{" "}
            </button>
          </div>

          <div className="hidden  p-3">Mostrando 8 productos</div>
        </div>
      </div>

      <GridShop Imgs={items.imgs} />

      <div className="p-9">
        <div className="flex items-center  justify-center">
          <IoIosArrowBack color="#C70000" className="mr-3 cursor-pointer " />
          <div>
            <button className="p-4 text-seconday ">1</button>{" "}
            <button className="p-4  ">2</button>{" "}
            <button className="p-4  ">3</button>
            <button className="p-4  ">4</button>{" "}
            <button className="p-4  ">5</button>{" "}
            <button className="p-4  ">6</button>
            <button className="p-4  ">7</button>{" "}
            <button className="p-4  ">8</button>
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
