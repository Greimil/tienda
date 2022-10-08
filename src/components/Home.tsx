import React,{FC} from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import NvidiaLogo from "../assets/nvidiaLogo.png"
import intel from "../assets/intel.png"
import amd from "../assets/amd.png"
import ryzen from "../assets/ryzen.png"
import graficaBg from "../assets/graficaBG.png"
import { Link } from "react-router-dom";

export const Home: FC = () => {
  return (
    <>

      <section className="h-full bg-[url('./assets/graficaBG-modified.png')] md:bg-none bg-no-repeat   " >
      <NavBar />
        <div className="h-[90%] flex items-center justify-center"  >
          <div className="hidden md:inline" >
            <img src={graficaBg} alt="" />
          </div>

          <div className="h-full flex justify-center items-center gap-2 md:gap-6 flex-col" >
            <h1 className="text-2xl md:text-5xl" >Mas rendimiento al menor precio</h1>
            <p className=" text-center md:text-lg" >
              Disfruta del mejor rendimiento, con la nueva RTX 3090 al menor
              precio
            </p>
            <Link to="/tienda" > <button  className="w-40 pl-6 pr-6 pt-3 pb-3 btnRed hover:text-black  " >Ver Tienda</button> </Link>
          </div>
        </div>
        <div className="bg-blackPrimary p-3 md:p-8 " >
          
          <h4 className="text-center text-lg md:text-2xl md:m-6 m-3" >Distribuidores oficiales de: </h4>
          
          <div className=" flex-wrap flex justify-evenly items-center gap-3 h-full mb-4 " >
          <div className="" ><img className="h-16"  src={NvidiaLogo} alt="" srcSet="" /></div>
          <div className="" ><img className="h-16" src={intel} alt="" srcSet="" /></div>
          <div className="" ><img className="h-16" src={amd} alt="" srcSet="" /></div>
          <div className="" ><img  className="h-16" src={ryzen} alt="" srcSet="" /></div>
          </div>
        
        </div>

      <Footer />
      </section>

    </>
  );
};
