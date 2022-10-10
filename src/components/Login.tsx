import React, { useContext, useState } from "react";
import { NavBar } from "./NavBar";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "./Wrapper";

export const Login = () => {
  type inputInterface = {
    email?: string;
    pass?: string;
  };

  const [inputInfo, setInputInfo] = useState<inputInterface>();
  const { setLogin, logInState } = useContext(GlobalContext);
  const navigate = useNavigate();

  const validateInfo = () => {
    if (inputInfo?.email === "greyexample@gmail.com" && inputInfo.pass === "12345") {
      setLogin({
        user: {
          name: "Grey",
          email: "greyexample@gmail.com",
        },
        pass: "12345",
        logIn: true,
      });

      navigate(-1);
    }
  };

  return (
    <>
      <NavBar question={false} />

      <section className="flex h-[90%] justify-center items-center p-6">
        <div className="bg-white w-96 flex flex-col rounded-lg">
          <h5 className="text-center text-blackPrimary font-bold text-2xl m-3">
            Bienvenido Nuevamente!
          </h5>

          <div className="flex flex-col p-4 gap-4">
            <input
              onChange={(e) => {
                let newState: inputInterface = {
                  email: e.target.value,
                  pass: inputInfo?.pass,
                };
                setInputInfo(newState);
              }}
              type="text"
              className="border h-9 text-black rounded-sm border-slate-600"
              placeholder="Email"
            />
            <input
              onChange={(e) => {
                let newState: inputInterface = {
                  email: inputInfo?.email ,
                  pass: e.target.value,
                };
                setInputInfo(newState);
              }}
              type="text"
              className="border h-9  text-black  rounded-sm border-slate-600"
              placeholder="Contraseña"
            />
          </div>

          <div className="pl-6 flex gap-2">
            <input type="checkbox" name="checkbox" />
            <label className="text-blackPrimary" htmlFor="checkbox">
              Recordar Usuario
            </label>
          </div>

          <button
            onClick={() => validateInfo()}
            className="btnRed  text-blackPrimary m-4"
          >
            Iniciar Sesión
          </button>

          <h6 className="text-blackPrimary  rounded-sm text-center p-4 cursor-pointer">
            Olvide mi contraseña
          </h6>
        </div>
      </section>
    </>
  );
};
45;
