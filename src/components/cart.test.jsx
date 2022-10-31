import { screen, render, cleanup } from "@testing-library/react";
import { describe, it, afterEach, beforeEach, expect } from "vitest";
import { Cart } from "./cart";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";

const GlobalContext = createContext()

const obj = {
  logInState: {
    user: {
      name: "Grey",
      email: "greyexample@gmail.com",
    },
    pass: "12345",
    logIn: true,
  },
  setLogin: () => {},
  carrito: [
    {
      id: 3,
      titulo: "./src/assets/ProductosImgs/grafica3.png",
      precio: 180,
      img: "GEFORCE GTX 1080",
      descripción: "./src/assets/ProductosImgs/grafica3.png",
      cantidad: 1,
      capacidad: "2GB",
    }
  ],
  setCarrito: () => {},
};

describe("Cart component", () => {
  afterEach(cleanup);
  beforeEach(() => {
    
    render(
      <>

    <GlobalContext.Provider value={ obj } >
        <BrowserRouter>
            <Cart />
        </BrowserRouter>
      </GlobalContext.Provider>


      </>
      
    );
  });

  it('It should have a heading with the the text "Tu carrito" ', () => {
    screen.getAllByRole("heading", { name: /tu carrito/i });
  });

  it('It should have a link with the the text "¿Aun no terminas de comprar?, sigue comprando" ', () => {
    screen.getByRole("link", {
      name: /¿aún no terminas de comprar\?, sigue comprando\./i,
    });
  });

  it('It should have a heading with the the text "resumen de tu carrito" ', () => {
    screen.getAllByRole("heading", { name: /resumen de tu carrito/i });
  });


  it('should have a input where you can enter a code to get an offer', () => {
    screen.getByPlaceholderText(/Ingresa tu código de descuento/i);
  });

  
});
