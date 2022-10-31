import { FC , useRef} from 'react';
import { nanoid } from 'nanoid';
import {dataApasar} from "./Product"
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";
import { Link } from 'react-router-dom';

interface PropsBtns {
    additem: () => () => void;
    subtractItem: () => () => void;
    itemCount: number;
    addItemCarrito: (data: dataApasar, itemCount: number) => void;
    data: dataApasar;
    
  }
  
export  const Botones: FC<PropsBtns> = ({
    additem,
    subtractItem,
    itemCount,
    addItemCarrito,
    data,

  }) => {

   
  
    // console.log(selection.current)
    
    return (
      <div className="flex flex-col gap-5 mt-16 ">
        <div className="flex justify-center gap-4 ">
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
          <select name='capacidad' id='selection'  className=" p-2 cursor-pointer inputtxt   border-1 border-seconday text-seconday pr-2 pl-2 text-sm  h-12 flex items-center justify-between  min-w-[160px]" >
              {data.capacidad.map((current) => {
                return <option key={nanoid()} value={current} >{current}</option>
              })} 
          </select>
        </div>
  
        <div className="flex justify-center gap-4">
          <button
            className="bg-blackPrimary hover:text-seconday   pr-4 pl-4  h-12"
            onClick={() => addItemCarrito(data, itemCount)}
          >
            Enviar al carrito
          </button>
          <Link to="/carrito" onClick={() => addItemCarrito(data, itemCount)} ><button className="pr-4 pl-4  h-12 bg-seconday ">Comprar ahora</button> </Link>
        </div>
      </div>
    );
  };
  