import { cleanup, render, screen } from "@testing-library/react";
import { GlobalContext } from "./Wrapper";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { NavBar } from "./NavBar";

import { BrowserRouter } from "react-router-dom";

describe("NavBar Component", () => {
  afterEach(cleanup);
  beforeEach(() => {
    render(
      <>
        <GlobalContext.Provider
          value={{
            logInState: {
              user: {
                name: "Grey",
                email: "greyexample@gmail.com",
              },
              pass: "12345",
              logIn: true,
            },
            setLogin: () => {},
            carrito: [],
            setCarrito: () => {},
          }}
        />
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
        <GlobalContext.Provider />
      </>
    );
  });

  it("Should exist", () => {
    screen.getByRole("navigation");
  });

  it("Should render the heading/name logo", () => {
    screen.getByText("PC Componentes");
  });

  it("Should have ul element ", () => {
    screen.getAllByRole("ul");
  });

  it("Should have 5 links ", () => {
    expect(screen.getAllByRole("link").length).toBe(5);
  });
});
