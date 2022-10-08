import React, {FC} from 'react'
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import {FaSearch} from "react-icons/fa"


export const NavBar: FC = () => {
  return (
    <nav
      className="bg-blackPrimary text-white  flex justify-between p-4 md:paddings h-16 md:h-20 items-center"
    >
      <div className="flex gap-16">
        <h2 className="text-seconday md:text-1xl font-bold cursor-pointer" > <Link to="/" >PC Componentes</Link></h2>
        <ul role="ul" className=" hidden md:flex  gap-3">
          <li className="cursor-pointer" > <Link to="/tienda" >Tienda</Link></li>
          <li className="cursor-pointer" ><Link to="/historias" >Historias</Link></li>
          <li className="cursor-pointer" ><Link to="/nosotros" >Nosotros</Link></li>
          <li className="cursor-pointer" >
            <div className="flex" >
              <input type="text" className="text-black" placeholder="Buscar"/>
                
            </div>
          </li>
        </ul>
      </div>

      <ul role="ul" className=" hidden md:flex gap-3">
        <li className="cursor-pointer" >
          {" "}
          <div className="flex items-center gap-1 ">
            <FiShoppingCart /> <strong>5</strong>
          </div>
        </li>
        <li className="cursor-pointer" >Iniciar sesión </li>
      </ul>

      <div className="flex gap-3 items-center md:hidden">
        <GiHamburgerMenu />
        <div className="flex items-center gap-1 ">
          <FiShoppingCart /> <strong>5</strong>
        </div>
      </div>
    </nav>
  );
};
