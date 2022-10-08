import { cleanup, render , screen} from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { NavBar } from './NavBar'; 

import { BrowserRouter } from 'react-router-dom';

describe('NavBar Component', () => {
    afterEach(cleanup)
    beforeEach(()=> {
        render(
            <BrowserRouter>
            <NavBar/>
            
            </BrowserRouter>
        )
    })


    it('Should exist', () => {
        screen.getByRole('navigation')

    });
    

    it('Should render the heading/name logo', () => {
        screen.getByText("PC Componentes")

    });



    it('Should have ul element ', () => {
        screen.getAllByRole("ul")
 
     });



    it('Should have 4 links ', () => {
        
       expect(screen.getAllByRole("link").length).toBe(4)

    });
    

    
});
