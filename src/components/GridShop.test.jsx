import { screen, render, cleanup } from "@testing-library/react";
import { describe, it , afterEach, beforeEach, expect} from "vitest";
import  {GridShop}  from "./GridShop";

describe('Grid shop component', () => { 
     afterEach(cleanup)
     beforeEach(()=> {
        
        render(<GridShop  />)
    })
    


    it('Should have 8 cells', () => {
        screen.getAllByRole("cell")
    });
    

   
    




})