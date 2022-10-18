import React, { FC, useState, createContext } from "react";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Login } from "./Login";
import { Product } from "./Product";


 export type ContextType = {
  logInState?: typeLogin;
  setLogin?: React.Dispatch<React.SetStateAction<typeLogin>>;
  carrito?: ObjCarrito[];
  setCarrito?: React.Dispatch<React.SetStateAction<ObjCarrito[]>>;
}

export type ObjCarrito = {
  titulo: string;
  precio: number;
  img: string;
  descripción: string;
};


const obj = {
  logInState: {
    user: {
      name: "Grey",
      email: "greyexample@gmail.com",
    },
    pass: "12345",
    logIn: false,
  }, setLogin: () => {},
  carrito: [],
  setCarrito: () => {},

}

export const GlobalContext = createContext<ContextType>(obj);

export type typeLogin = {
  user?: {
    name: string;
    email: string;
  };
  pass?: string;
  logIn?: boolean;
};

const Wrapper: FC = () => {
  const [logIn, setLogin] = useState<typeLogin>({
    user: {
      name: "",
      email: "",
    },
    pass: "",
    logIn: false,
  });
  const [carrito, setCarrito] = useState<Array<ObjCarrito>>([]);


  let obj = {
    logInState: logIn,
    setLogin,
    carrito,
    setCarrito,
  }


  return (
    <GlobalContext.Provider
      value={{
        logInState: logIn,
        setLogin,
        carrito,
        setCarrito,
      }}
    >
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product:id" element={<Product />}/>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
};



export default Wrapper;
