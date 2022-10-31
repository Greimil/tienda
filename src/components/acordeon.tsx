import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import { nanoid } from 'nanoid';
import {FC} from 'react'


interface items {
    heading: string, 
    content: string
}


export const Acordeon: FC = () => {
  
    let items: Array<items> = [

        {
            heading: "Política de Reembolso", 
            content: "Los productos adquiridos por esta via tienen un tiempo máximo de  3 meses para ser devueltos en caso de presentar un problema."
        },  
        {
            heading: "Tiempo de entrega estimado", 
            content: "Los tiempos de entrega suelen estar sujetos a un conjunto de factores, por lo que los tiempos de entrega pueden variar de una semana hasta 1 mes."
        }, 
        {
            heading: "Garantía", 
            content: "Todos nuestros productos tiene una garantía de 3 meses, siempre y cuando el equipo presente problemas de fabrica, (no aceptamos equipos dañados, mojados etc)."
        }



    ]

  
    return (
    
    <div className='md:max-w-xl mt-7 ' >
    <h1 className='font-semibold text-2xl border-black border-b-2  p-3'>Información de tu orden</h1>
    <Accordion allowMultipleExpanded={false}>
    {items.map((item) => (
        <AccordionItem className='text-gray-400 m-4 border-b-2 text-lg border-gray-300 pb-2 ' key={nanoid()}>
            <AccordionItemHeading>
                <AccordionItemButton className='text-base font-medium'  >
                    {item.heading}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className='text-gray-400 p-2' >
              {item.content}
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>

</div>
  )
}
