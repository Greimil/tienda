import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { describe, it, afterEach, beforeEach, expect } from "vitest";
import Shop  from "./Shop";

import { BrowserRouter } from "react-router-dom";

describe("Shop component", () => {
  afterEach(cleanup);
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>  
    );
  });

  it("Should have a heading 2 that explain category ", () => {
    screen.getAllByRole("heading");
  });

  it("should have a paragraph that explain what can clients found in that category", () => {
    screen.getByText(
      /En esta sección podrás encontrar todo lo relacionado al apasionante mundo de las gráficas, desde las mas económicas hasta las mas top/i
    );
  });

  it('Should have change category, imgs and description of category when the user click on one link', async () => {
    const  btn = screen.getByRole('button', {  name: /cpu/i})
    const user = userEvent.setup()
    user.click(btn)

    expect( await screen.findByText(/procesadores/i)).toBeInTheDocument()
   
  });



  it('Should have change category, imgs and description of category when the user click on one link', async () => {
    const  btn =  screen.getByRole('button', {  name: /laptops/i})
    const user = userEvent.setup()
    user.click(btn)

    expect( await screen.findByText(/Las mas modernas y rápidas laptops del mercado, para que puedas disfrutar de tus video juegos favoritos a altas tasas de refresco y con la mayor fluidez posible/i)).toBeInTheDocument()
    
  });
  

  // it("should have 5 buttons", () => {
  //   expect(screen.getAllByRole("button").length).toBe(14);
  // });
});
