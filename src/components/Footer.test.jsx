import { screen, render, cleanup } from "@testing-library/react";
import { describe, it , afterEach, beforeEach, expect} from "vitest";
import { Footer } from './Footer';

describe("Footer tests", ()=> {
    afterEach(cleanup)
    beforeEach(()=> {
        render(<Footer/>)
    })


    it('Should have a link to Grey profile', () => {

        screen.getByText(/@GreyDev/i)

    });
    

    it('Should have a input to subscribe to newsletter', () => {

        screen.getByPlaceholderText(/Correo Electrónico/i)

    });

    it('should have a sitemap', () => {
        screen.getAllByTestId("sitemap")
    });
    


    it('should have three ul', () => {
        expect(screen.getAllByRole("list").length).toBe(3)
    });
    



})