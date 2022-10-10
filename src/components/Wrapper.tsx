import React, { FC, useState, createContext } from "react";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Login } from "./Login";


export type ObjCarrito = {
  titulo: string;
  precio: number;
  img: string;
  descripción: string;
};

export const GlobalContext = createContext<any>(null);

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
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
};



export default Wrapper;
