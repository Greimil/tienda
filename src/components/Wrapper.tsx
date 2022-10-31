import React, { FC, useState, createContext , lazy, Suspense} from "react";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";



import Home from "./Home";
import Loading from "./Loading";

// const Loading = lazy(()=> import("./Loading"))
const Shop = lazy(()=> import("./Shop"))
const Login = lazy(()=> import("./Login"))
const Product = lazy(()=> import("./Product"))
const Cart = lazy(()=> import("./cart"))


export type ContextType = {
  logInState: typeLogin;
  setLogin: React.Dispatch<React.SetStateAction<typeLogin>>;
  carrito: ObjCarrito[];
  setCarrito: React.Dispatch<React.SetStateAction<ObjCarrito[]>>;
}

export interface ObjCarrito  {
  id:  number;
  titulo: string;
  precio: number;
  img: string;
  descripción: string;
  cantidad: number; 
  capacidad: string;
  subtotal: number;
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
  logIn: boolean;
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
        <Suspense fallback={<Loading/>}  >
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product:id" element={<Product />}/>
          <Route path="/carrito" element={<Cart/>}/>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
};



export default Wrapper;
