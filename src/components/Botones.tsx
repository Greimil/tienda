import { FC } from 'react';
import {dataApasar} from "./Product"
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";

interface PropsBtns {
    additem: () => () => void;
    subtractItem: () => () => void;
    itemCount: number;
    addItemCarrito: (data: dataApasar, itemCount: number) => void;
    data: dataApasar;
  }
  
export  const Botones: FC<PropsBtns> = ({
    additem,
    subtractItem: subtractItem,
    itemCount,
    addItemCarrito,
    data,
  }) => {
    return (
      <div className="flex flex-col gap-5 mt-16 md:w-1/2">
        <div className="flex justify-around ">
          <div className="border border-seconday pr-2 pl-2 h-12 text-sm gap-2 flex items-center justify-between min-w-[160px] ">
            {" "}
            <span onClick={subtractItem()} data-testid="restarBtn">
              <GrFormSubtract />
            </span>{" "}
            <strong data-testid="itemsCount">{itemCount}</strong>{" "}
            <span onClick={additem()} data-testid="sumarBtn">
              <AiOutlinePlus />{" "}
            </span>{" "}
          </div>
          <div className="btnRed   pr-2 pl-2 text-sm  h-12 flex items-center justify-between  min-w-[160px] ">
            6GB <IoIosArrowDown />{" "}
          </div>
        </div>
  
        <div className="flex justify-around">
          <button
            className="bg-blackPrimary hover:text-seconday   pr-4 pl-4  h-12"
            onClick={(e) => addItemCarrito(data, itemCount)}
          >
            Enviar al carrito
          </button>
          <button className="pr-4 pl-4  h-12 bg-seconday ">Comprar ahora</button>
        </div>
      </div>
    );
  };
  