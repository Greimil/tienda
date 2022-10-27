import { screen, render, cleanup, findByTestId } from "@testing-library/react";
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
                      
        screen.getByRole('button', {  name: /enviar al carrito/i})
        screen.getByRole('button', {  name: /Comprar ahora/i})
                       
    });
    

    it('Should add one item when the user click on the plus sing', async () => {
        const btn = screen.getByTestId('sumarBtn')
        const user = userEvent.setup()
        user.click(btn)


        expect(await screen.findByText(/1/i)).toBeInTheDocument()

        
    });
    

    it('Should subtract one item when the user click on the subtract sing', async () => {
        const btnrestar = screen.getByTestId('restarBtn')
        const btn = screen.getByTestId('sumarBtn')
        
        const user = userEvent.setup()
        
        await user.click(btn)
        await user.click(btnrestar)
        
        const span = await  screen.findByTestId("itemsCount")
       
        console.log(span.textContent, "El texto del span")
        
        expect(span.textContent == 1 ).toBeTruthy()


    
    });

    

    




});
