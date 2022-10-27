import React, { FC, useState, useCallback, useContext } from "react";
import { GlobalContext , ObjCarrito} from "./Wrapper";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation } from "react-router-dom";
import datajson from "./categories.json";
import {Botones} from "./Botones"

export interface dataApasar {
  id: number,
  link: string;
  descrip: string;
  price: number;
  descripcionProduct: string;
}


interface obj {
  id: number,
  titulo: string;
  precio: number;
  img: string;
  descripción: string;
}
interface dataLocation {
  id: number,
  link: string;
  descrip: string;
  price: string;
  descripcionProduct?: string;
}

export const Product: FC<dataLocation> = () => {
  const location = useLocation();
  const data: dataLocation =
  location.state || datajson.categories.cpu.imgs.img1; // Just for testing remove this-
  const [itemsCount, setItemsCount] = useState<number>(1);
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
  }; 

  const addItemCarrito = (data: dataApasar, itemCount: number) => {
    const obj = {
      id: data.id,
      titulo: data.descrip.toString(),
      precio: data.price,
      img: data.link.toString(),
      descripción: data.descrip.toString(),
    };

    let i = 0;


    const reduceArray = (arr: Array<ObjCarrito>, id: number  ): Array<ObjCarrito>  => {

      let position  = arr.findIndex((obj) => obj.id == id  ) 
      
      arr.splice(position, 1)

      return arr

    }


   
    

    if (itemCount < carrito.length ) {
      
      let obj = reduceArray(carrito, data.id )

      console.log(obj);

      setCarrito(obj)
      

    } else {

      while (i < itemCount) {
        setCarrito((arr) => [...arr,  { ...obj } ]);
  
        i += 1;
      }

    }


    // console.log(carrito)



  };

  return (
    <>
      <NavBar />

      <section className=" md:flex  font-mono mb-12  ">
        <div className=" flex md:paddings md:pt-20 pt-2 ">
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

        <div className="md:h-2/3 flex flex-col justify-around  ">
          <div className="pl-4 pr-4 md:pt-20 pt-4 md:w-1/2">
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
      </section>

      <Footer />
    </>
  );
};
