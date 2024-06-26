import React, { FC, useState, useCallback, useContext, useRef, MouseEvent } from "react";
import { GlobalContext, ObjCarrito } from "./Wrapper";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation } from "react-router-dom";
import datajson from "./categories.json";
import { Botones } from "./Botones";
import { useNavigate } from "react-router-dom";




export interface dataApasar {
  id: number;
  link: string;
  descrip: string;
  price: number;
  descripcionProduct: string;
  cantidad: number;
  capacidad: Array<string> 
  subtotal: number
}


interface dataLocation {
  id: number;
  link: string;
  descrip: string;
  price: string;
  descripcionProduct?: string;
  capacidad: Array<string> 
}

const Product: FC<dataLocation> = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const data: dataLocation =
    location.state || datajson.categories.cpu.imgs.img1; // Just for testing remove this-
  const [itemsCount, setItemsCount] = useState<number>(1);
  const [capacidad, setcapacidad] = useState<string>("");
  const { carrito, setCarrito, setLogin, logInState } =
    useContext(GlobalContext);

  const additem = () =>
    useCallback(() => {
      setItemsCount((prevCount) => prevCount + 1);
    }, [itemsCount]);

    const subtractItem = () =>
    useCallback(() => {
      setItemsCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
    }, [itemsCount]);

  
  const dataApasar: dataApasar = {
    id: data.id,
    link: data.descrip.toString(),
    price: Number([...data.price].slice(1).join("")),
    descrip: data.link.toString(),
    descripcionProduct: data.descrip.toString(),
    cantidad: itemsCount,
    capacidad: data.capacidad,
    subtotal: itemsCount * Number([...data.price].slice(1).join(""))
  };

  const addItemCarrito = (data: dataApasar, itemCount: number) => {
   

    let select = (document.getElementById("selection") as HTMLInputElement).value;
    
    
    const obj = {
      id: data.id,
      titulo: data.descrip.toString(),
      precio: data.price,
      img: data.link.toString(),
      descripción: data.descrip.toString(),
      cantidad: itemsCount,
      capacidad: select, 
      subtotal: itemsCount * data.price
    };

    if (carrito.findIndex((obj) => obj.id === data.id) === -1) {
      setCarrito((arr) => [...arr, { ...obj }]);
    } else {
      setCarrito((arr) => {
        return arr.map((obj) => {
          if (obj.id === data.id) {
            return { ...obj, cantidad: itemCount };
          }

          return obj;
        });
      });
    }
  };


 

  return (
    <>
      <NavBar />

      <div className="h-12 md:paddings flex items-center">
      
      

      </div>

      <section className=" md:flex justify-center font-mono mb-12  ">
        <div
          id="wrapper"
          className="flex flex-col justify-center md:flex-row md:pt-20 pt-2 md:w-4/5    "
        >
          <div className=" flex  ">
            <div className=" flex justify-around items-center m-auto  md:w-[550px] md:h-[550px]  bg-white ">
              <div className="w-14 h-14 bg-[rgba(0,0,0,0.25)] grid place-items-center rounded-[50%] cursor-pointer ">
                <IoIosArrowBack className="text-seconday " />
              </div>
              <img
                src={data.link}
                className="object-contain md:w-[400px]  "
                alt=""
              />
              <div className="w-14 h-14 bg-[rgba(0,0,0,0.25)] grid place-items-center rounded-[50%] cursor-pointer">
                <IoIosArrowForward className="text-seconday" />
              </div>
            </div>
          </div>

          <div className=" flex flex-col p-12 justify-around md:w-[550px] ">
            <div className="">
              <h2 className="text-4xl font-medium ">{data.descrip}</h2>
              <div className="text-lg mt-8 font-normal">
                {" "}
                <h6>{data.price}</h6>{" "}
              </div>
              <p className="text-lg md:mt-16 mt-8 " data-testid="paragraph">
                {data.descripcionProduct}
              </p>
            </div>
            <Botones
              additem={additem}
              subtractItem={subtractItem}
              itemCount={itemsCount}
              addItemCarrito={addItemCarrito}
              data={dataApasar}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default  Product