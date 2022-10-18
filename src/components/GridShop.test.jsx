import { screen, render, cleanup } from "@testing-library/react";
import { describe, it , afterEach, beforeEach, expect} from "vitest";
import  {GridShop}  from "./GridShop";

import data from "./categories.json"
import { BrowserRouter } from 'react-router-dom';

describe('Grid shop component', () => { 
     afterEach(cleanup)
     beforeEach(()=> {
        
        render(
        <BrowserRouter>
            <GridShop Imgs={data.categories.gpu.imgs} />
        </BrowserRouter>
        )
    })
    


    it('Should have 8 cells', () => {
        screen.getAllByRole("cell")
    });
    

   
    




})