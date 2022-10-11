import { screen, render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { describe, it, afterEach, beforeEach, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";

import { Product } from './Product';


describe('Product Component', () => {
    afterEach(cleanup)
    beforeEach(()=> {
        render(
        <BrowserRouter>
        <Product />
      </BrowserRouter>
        )
    })

    it('Should have a navbar', () => {
        screen.getByRole("navigation");
    });



    it('Should display the product Img in order to let the client see the product', () => {
        screen.getByRole("img")


    });


    


    it('Should have a p element that describe briefly the Product', () => {
        screen.getByTestId("paragraph")


    });
    



    it('should have two main buttons "añadir al carrito" and "comprar ahora" ', () => {
                      
        screen.getByRole('button', {  name: /Añadir al carrito/i})
        screen.getByRole('button', {  name: /Comprar ahora/i})
                       
    });
    


    


});
