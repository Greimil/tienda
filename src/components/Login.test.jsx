import { cleanup, render , screen} from '@testing-library/react';
import { afterEach, describe, it, beforeEach, expect } from 'vitest';
import { Login } from './Login';
import { BrowserRouter } from 'react-router-dom';


describe('Login Component', () => { 
    afterEach(cleanup)
    beforeEach(()=> {
        render(
        <BrowserRouter>
            <Login/>
        </BrowserRouter>
        )
    })



    it('Should have a text where you give the user the welcome', () => {
        screen.getByText(/Bienvenido nuevamente!/i)
    });

    it('Should have Two Inputs email, and password', () => {
         screen.getByPlaceholderText(/email/i)
         screen.getByPlaceholderText(/contraseña/i)
    });
    
    it('should have a select box that allow us to remember user in local Storage', () => {
        screen.getByText(/Recordar Usuario/i)
    });
    



 })