import React, {FC} from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

const Nologgin: FC = () => {
  return (
    <>
    <NavBar/>

    <div className="h-full flex justify-center gap-4 items-center flex-col ">
      {" "}

        <strong className="tex-5xl" >😭</strong>

      <h1 className="text-2xl  md:text-2xl text-center">
        Necesitas iniciar sesión para poder acceder al carrito
      </h1>{" "}
      <Link className="btnRed" to="/login">Iniciar Sección</Link>{" "}
    </div>
    </>
  );
};

export default Nologgin;
