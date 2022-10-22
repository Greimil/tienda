import React, { FC, useState, useCallback, useContext } from "react";
import { GlobalContext } from "./Wrapper";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import datajson from "./categories.json"

interface dataApasar {
  link: string;
  descrip: string;
  price: number;
  descripcionProduct: string

  }

interface PropsBtns  {
  additem: () => () => void,
  substractItem: () => () => void,
  itemCount: number, 
  addItemCarrito: (data: dataApasar) => void
  data: dataApasar
  

} 

const Botones:FC<PropsBtns> = ({additem, substractItem, itemCount, addItemCarrito, data}) => {
  

  



  return (
    <div className="flex flex-col gap-5 mt-16 md:w-1/2">
      <div className="flex justify-around ">
        <div className="border border-seconday pr-2 pl-2 h-12 text-sm gap-2 flex items-center justify-between min-w-[160px] ">
          {" "}
         <span onClick={substractItem()} data-testid="restarBtn" ><GrFormSubtract /></span>  <strong data-testid="itemsCount" >{itemCount}</strong> <span onClick={additem()} data-testid="sumarBtn"><AiOutlinePlus /> </span> {" "}
        </div>
        <div className="btnRed   pr-2 pl-2 text-sm  h-12 flex items-center justify-between  min-w-[160px] ">
          6GB <IoIosArrowDown />{" "}
        </div>
      </div>

      <div className="flex justify-around">
        <button className="bg-blackPrimary hover:text-seconday   pr-4 pl-4  h-12" onClick={(e) => addItemCarrito(data) } >
          Enviar al carrito
        </button>
        <button className="pr-4 pl-4  h-12 bg-seconday ">Comprar ahora</button>
      </div>
    </div>
  );
};



interface dataLocation  {
  link: string;
  descrip: string;
  price: string;
  descripcionProduct?: string
}




export const Product: FC<dataLocation> = () => {
 
  const location = useLocation();
  const data:dataLocation = location.state  || datajson.categories.cpu.imgs.img1 // Just for testing remove this-
  const [itemsCount, setItemsCount] = useState<number>(1)
  const { carrito, setCarrito, setLogin, logInState } = useContext(GlobalContext);


 
  const additem = () => useCallback(()=> {
    setItemsCount(prevCount => prevCount + 1)
  }, [itemsCount])

  const substractItem = () => useCallback(()=> {
    setItemsCount(prevCount => prevCount > 0 ? prevCount - 1 : prevCount )
  }, [itemsCount])
    
  
 
  const dataApasar: dataApasar = {
    link: data.descrip.toString() ,
    price: Number(data.price),
    descrip: data.link.toString(),
    descripcionProduct: data.descrip.toString()
    
    
  }


 


  const addItemCarrito = useCallback((data: dataApasar, itemCount: number) =>  {


    

    const itemCarritoObj = (titulo: string, precio: number, img: string, descrip: string) => {

      return {
        titulo, 
        precio, 
        img, 
        descrip
      }



    }


    if (itemCount > 1) {
      
    }



    const obj = {
      titulo: data.descrip.toString() ,
      precio: Number(data.price),
      img: data.link.toString(),
      descripción: data.descrip.toString()

    }


    setCarrito(arr => [...arr, {...obj} ] )
    



  }, []
)
 
  return (
    <>
      <NavBar />

      <section className=" md:flex  font-mono mb-12  ">
        
        <div className=" flex md:paddings md:pt-20 pt-2 ">
          <div className=" flex justify-around items-center m-auto  md:w-[550px] md:h-[550px]  bg-white ">
            <div className="w-14 h-14 bg-[rgba(0,0,0,0.25)] grid place-items-center rounded-[50%] cursor-pointer ">
              <IoIosArrowBack className="text-seconday " />
            </div> 
            <img src={data.link} className="object-contain md:w-[400px]  " alt="" />
            <div className="w-14 h-14 bg-[rgba(0,0,0,0.25)] grid place-items-center rounded-[50%] cursor-pointer" >
                <IoIosArrowForward className="text-seconday" />

            </div>
          </div>
         
         
        </div>

        <div className="md:h-2/3 flex flex-col justify-around  ">
          <div className="pl-4 pr-4 md:pt-20 pt-4 md:w-1/2" >
            <h2 className="text-4xl font-medium ">{data.descrip}</h2>
            <div className="text-lg mt-8 font-normal" > <h6>{data.price}</h6> </div>
            <p className="text-lg md:mt-16 mt-8 "  data-testid="paragraph">
              {data.descripcionProduct}
            </p>
          </div>
          <Botones additem={additem} substractItem={substractItem} itemCount={itemsCount}  addItemCarrito={addItemCarrito}   data={dataApasar} />
        </div>
      </section>

      <Footer />
    </>
  );
};



















