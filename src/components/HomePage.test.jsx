import { cleanup, render , screen} from '@testing-library/react';
import { afterEach, describe, it, beforeEach, expect } from 'vitest';
import  Home  from './Home';

import { BrowserRouter } from 'react-router-dom';

describe('home Component', () => {
    afterEach(cleanup)
    beforeEach(()=> {
        render(
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
        )
    })
   

    it('Home page should have a Navbar', () => {
        screen.getByRole('navigation')

    });


    it('should have a heading ', () => {
        screen.getByText(/Mas rendimiento al menor precio/i)
    });
    
    it('should have a paragraph ', () => {
        screen.getByRole('heading', {  name: /mas rendimiento al menor precio/i})
    });
    

    it('should have a img', () => {
        expect(screen.getAllByRole("img").length).toBe(5)
    });
    


    it('Should have a button', () => {
        screen.getByRole("button", {name: /Ver tienda/i})

    });
 
    
    it('should  have a footer', () => {
        screen.getByRole("contentinfo")
    });
    


    



});
