import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it, beforeEach, expect } from "vitest";
import { Login } from "./Login";
import { GlobalContext } from "./Wrapper";
import { BrowserRouter } from "react-router-dom";


const obj = {
    logInState: {
      user: {
        name: "Grey",
        email: "greyexample@gmail.com",
      },
      pass: "12345",
      logIn: true,
    }, setLogin: () => {},
    carrito: [],
    setCarrito: () => {},
  
};
  

   

describe("Login Component", () => {
  afterEach(cleanup);
  beforeEach(() => {
    render(
      <>
        <GlobalContext.Provider value={obj} />
            <BrowserRouter>
            <Login />
            </BrowserRouter>
        <GlobalContext.Provider /> 
      </>
    );
  });


  it("Should have a text where you give the user the welcome", () => {
    screen.getByText(/Bienvenido nuevamente!/i);
  });

  it("Should have Two Inputs email, and password", () => {
    screen.getByPlaceholderText(/email/i);
    screen.getByPlaceholderText(/contraseña/i);
  });

  it("should have a select box that allow us to remember user in local Storage", () => {
    screen.getByText(/Recordar Usuario/i);
  });
});
