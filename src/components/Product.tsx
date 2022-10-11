import React, { FC } from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import data from "./categories.json";
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";

import imgPrueba from "../assets/ProductosImgs/grafica3.png";

interface Props {}

const Botones = () => {
  return (
    <div className="flex flex-col gap-5 mt-16">
      <div className="flex justify-around ">
        <button className="border border-seconday pr-2 pl-2 h-12 text-sm  flex items-center justify-between w-32 ">
          {" "}
          <GrFormSubtract /> <strong>1</strong> <AiOutlinePlus />{" "}
        </button>
        <button className="btnRed   pr-2 pl-2 text-sm  h-12 flex items-center justify-between  w-32">
          6GB <IoIosArrowDown />{" "}
        </button>
      </div>

      <div className="flex justify-around">
        <button className="bg-blackPrimary hover:text-seconday  pr-4 pl-4  h-12">
          Añadir al carrito
        </button>
        <button className="pr-4 pl-4  h-12 bg-seconday ">Comprar ahora</button>
      </div>
    </div>
  );
};

export const Product: FC<Props> = () => {
  return (
    <>
      <NavBar />

      <section className="h-full md:flex b font-mono  ">
        <div className=" h-80 md:h-2/3 bg-slate-600 flex items-center  justify-center md:w-1/2   ">
          <BiLeftArrow className="text-seconday" />
          <div className=" md:w-1/2 ml-6 mr-6 md:bg-white ">
            <img src={imgPrueba} className=" md:w-96 " alt="" />
          </div>
          <BiRightArrow className="text-seconday" />
        </div>

        <div className="md:h-2/3   ">
          <div className="pl-4 pr-4" >
            <h2 className="text-2xl font-medium ">RX 6950 XT</h2>
            <strong>$50</strong>
            <p data-testid="paragraph">
              La nueva tarjeta gráfica AMD para jugar a todo a 4K cuesta ahora
              menos que nunca en PcComponentes
            </p>
          </div>
          <Botones />
        </div>
      </section>

      <Footer />
    </>
  );
};
