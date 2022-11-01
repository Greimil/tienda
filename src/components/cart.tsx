import React, { FC, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { GlobalContext } from "./Wrapper";
import { nanoid } from "nanoid";
import { Acordeon } from "./acordeon";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";
import { ObjCarrito } from "./Wrapper";

interface ObjSubtotal extends ObjCarrito {
  subtotal: number;
}

const Cart: FC = () => {
  const { carrito, setCarrito, setLogin, logInState } =
    useContext(GlobalContext);
  let subtotal: number = 0;

  carrito.map((current) => {
    subtotal += current.subtotal;
  });

  const eliminarItem = (id: number) => {
    setCarrito(carrito.filter((obj) => obj.id !== id));
  };

  const substractItem = (id: number) => {
    const cantidad: number =
      Number(
        (document.getElementById(`classID-${id}`) as HTMLInputElement).value
      ) - 1;
    console.log(cantidad);
    const newState = carrito.map((obj) => {
      if (obj.id == id) {
        return {
          ...obj,
          cantidad: obj.cantidad - 1,
          subtotal: obj.precio * cantidad,
        };
      }
      return obj;
    });

    setCarrito((prev) =>
      prev.every((obj) => obj.cantidad >= 1) ? newState : prev
    );
  };

  const addItem = (id: number) => {
    const cantidad: number =
      Number(
        (document.getElementById(`classID-${id}`) as HTMLInputElement).value
      ) + 1;

    const newState = carrito.map((obj) => {
      if (obj.id == id) {
        return {
          ...obj,
          cantidad: obj.cantidad + 1,
          subtotal: obj.precio * cantidad,
        };
      }

      return obj;
    });

    setCarrito(newState);
  };

  return (
    <>
      <NavBar />
      <main className=" md:pt-20 md:paddings mb-4">
        <div className="flex justify-around  flex-col md:flex-row bg">
          <section id="cart" className="  ">
            <h2 className="font-semibold text-4xl mt-4 mb-4">Tu carrito</h2>
            <Link to="/tienda" className="pt-2 pb-2 h-6">
              ¿Aún no terminas de comprar? ¡sigue comprando!
            </Link>

            <div className="h-96 divCarrito">
              {carrito.map((current) => {
                return (
                  <div
                    data-testid="imgsCarrito"
                    key={nanoid()}
                    className="flex justify-between h-32 min-w-[560px] max-w-[760px] m-4 md:m-0  border-b-2 border-gray-500 p-1"
                  >
                    <div className="w-40  bg-white p-2">
                      <img
                        src={current.titulo}
                        alt=""
                        className="w-full h-full aspect-video"
                      />
                    </div>
                    <div className="h-full flex-1 p-2 md:p-4 text-black">
                      <h4 className="font-bold">{current.img}</h4>
                      <strong className="font-normal text-sen">
                        Capacidad: <strong>{current.capacidad}</strong>{" "}
                      </strong>
                      <strong className="flex gap-2  font-normal">
                        Cantidad:{" "}
                        <div className="flex pl-1 pr-1  items-center  border border-seconday">
                          {" "}
                          <span onClick={() => substractItem(current.id)}>
                            <GrFormSubtract />
                          </span>{" "}
                          <input
                            id={`classID-${current.id}`}
                            readOnly
                            className={`bg-[#2D3033]  w-10 text-center flex-1 focus:outline-none  `}
                            value={current.cantidad}
                          />{" "}
                          <span onClick={() => addItem(current.id)}>
                            {" "}
                            <AiOutlinePlus />{" "}
                          </span>{" "}
                        </div>{" "}
                      </strong>
                      <strong className="block ">${current.precio}</strong>
                    </div>

                    <div className="flex items-end">
                      <button
                        onClick={() => eliminarItem(current.id)}
                        className="underline font-medium text-black"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="hidden md:block">
              <Acordeon />
            </div>
          </section>

          <section className="md:w-[40%] p-4  ">
            <h1 className="text-2xl mt-6 mb-6 ">Resumen de tu carrito</h1>
            <input
              type="text"
              className="md:w-3/5 w-full  h-10 bg-[#2D3033] border border-seconday focus:outline-none indent-1 "
              placeholder="Ingresa tu código de descuento"
            />

            <div className="">
              {carrito.map((current) => {
                return (
                  <div
                    key={nanoid()}
                    className="flex justify-between md:w-3/5 mt-6 mb-6 "
                  >
                    <strong>{current.img}:</strong>
                    <strong>${current.subtotal}</strong>
                  </div>
                );
              })}

              <div className="flex justify-between md:w-3/5 mt-6 mb-6 ">
                <strong>Subtotal:</strong>
                <strong>${subtotal}</strong>
              </div>

              <div className="flex justify-between md:w-3/5 border-b-2 mt-6 mb-6  border-black pb-2">
                <strong>Envio:</strong>
                <strong>$20</strong>
              </div>

              <div className="flex justify-between md:w-3/5 mt-6 mb-6  ">
                <strong>Total:</strong>
                <strong>${subtotal + 20}</strong>
              </div>
            </div>

            <button className="btnRed font-medium bg-seconday  w-full md:w-3/5">
              Efectuar Compra
            </button>
          </section>
        </div>

        <div className="md:hidden ml-2 mr-2">
          {" "}
          <Acordeon />{" "}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cart;
