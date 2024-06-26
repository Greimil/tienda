import React, { FC, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GlobalContext } from "./Wrapper";
import {typeLogin} from "./Wrapper"

interface Props {
  question?: boolean;
}

export const NavBar: FC<Props> = ({ question }) => {
  const location = useLocation();
  const { carrito, setCarrito, setLogin, logInState } = useContext(GlobalContext);
  let totalItems: number = 0 
  carrito.forEach((obj)=> {
    totalItems += obj.cantidad
  })
  


  let stateLogin: boolean = logInState.logIn;

  useEffect(() => {
    stateLogin = logInState.logIn  ;
  }, [logInState]);

  return (
    <nav className="bg-blackPrimary text-white  flex justify-between p-4 md:paddings h-16 md:h-20 items-center font-mono">
      <div className="flex gap-16">
        <h2 className="text-seconday md:text-1xl font-bold cursor-pointer">
          {" "}
          <Link to="/">PC Componentes</Link>
        </h2>
        <ul role="ul" className=" hidden md:flex  gap-3">
          <li className="cursor-pointer">
            {" "}
            <Link to="/tienda">Tienda</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/historias">Historias</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li className="cursor-pointer">
            <div className="flex">
              <input type="text" className="text-black" placeholder="Buscar" />
            </div>
          </li>
        </ul>
      </div>

      <ul role="ul" className=" hidden md:flex gap-3">
        <li className="cursor-pointer">
          {" "}
          <Link to="/carrito" >
          <div className="flex items-center gap-1 justify-center ">
            <FiShoppingCart /> <span data-testid="carritoCount" id="carritoCount" >{totalItems}</span>
          </div>
          </Link>
        </li>
        <li className="cursor-pointer ">
          {location.pathname === "/login" ? (
            ""
          ) : stateLogin ? (
            <FaRegUserCircle />
          ) : (
            <Link to="/login">Iniciar sesión</Link>
          )}
        </li>
      </ul>

      <div className="flex gap-3 items-center md:hidden">
        <GiHamburgerMenu />
        <Link to="/carrito">
        <div className="flex items-center gap-1 ">
          <FiShoppingCart /> <strong>{totalItems}</strong>
        </div>
        </Link>
      </div>
    </nav>
  );
};
