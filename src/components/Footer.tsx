import React,{FC} from "react";

export const Footer: FC = () => {
  return (
    <footer className="" >
      <div className=" flex  md:paddings  justify-between flex-wrap items-center " >
        
        <div className="flex md:w-[30%] flex-col gap-2 justify-center items-center md:items-start p-3 max-w-lg" >
          <h3 className="text-2xl md:text-4xl md:text-left text-center" >Regístrate en nuestro Newsletter</h3>
          <p className="text-sm md:text-xl" >
            Se el primero en conocer nuestras ofertas especiales, lanzamientos
            de nuevos productos y eventos.
          </p>
          
          <form action="" method="post" className="w-full flex gap-2"  >
            <input type="text" className="w-3/4 h-8"  placeholder="Correo Electrónico"/>
            <button type="submit" className="w-1/4 h-8 bg-seconday" >Subscribir</button>
          </form>

        </div>

        <div data-testid="sitemap" className="flex  md:w-[70%] justify-around  p-4  " >
          <div className="p-2 md:text-lg">
            <h5 className="font-bold" >Tienda</h5>
            <ul className="text-textSecondary text-[14px] md:text-lg cursor-pointer  " >
              <li className="hover:decoration-2 hover:decoration-seconday hover:underline" >Tarjetas Gráficas</li>
              <li className="hover:decoration-2 hover:decoration-seconday hover:underline" >Procesadores</li>
              <li className="hover:decoration-2 hover:decoration-seconday hover:underline" >Placas base</li>
              <li className="hover:decoration-2 hover:decoration-seconday hover:underline" >Pc-s de escritorio</li>
              <li className="hover:decoration-2 hover:decoration-seconday hover:underline" >Laptops</li>
              <li className="hover:decoration-2 hover:decoration-seconday hover:underline" >Tarjetas de regalo</li>
            </ul>
          </div>

          <div className="p-2 md:text-lg">
            <h5 className="font-bold" >Ayuda</h5>
            <ul className="text-textSecondary text-[14px] md:text-lg cursor-pointer ">
              <li className="hover:decoration-2 hover:decoration-seconday hover:underline" >Centro de ayuda</li>
              <li className="hover:decoration-2 hover:decoration-seconday hover:underline" >Estatus de orden</li>
              <li className="hover:decoration-2 hover:decoration-seconday hover:underline" >Reembolso y garantía</li>
              <li className="hover:decoration-2 hover:decoration-seconday hover:underline" >Pc-s de escritorio</li>
              <li className="hover:decoration-2 hover:decoration-seconday hover:underline" >Contactos</li>
            </ul>
          </div>

          <div className="p-2 md:text-lg">
            <h5 className="font-bold" >Nosotros</h5>
            <ul className="text-textSecondary text-[14px] md:text-lg cursor-pointer ">
              <li className="hover:decoration-2 hover:decoration-seconday hover:underline" >Nosotros</li>
              <li className="hover:decoration-2 hover:decoration-seconday hover:underline" >Responsabilidad</li>
              <li className="hover:decoration-2 hover:decoration-seconday hover:underline" >Tecnología e innovación</li>
              <li className="hover:decoration-2 hover:decoration-seconday hover:underline" >Conoce nuestras historias</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blackPrimary h-16 md:h-20 1 text-seconday  flex items-center  justify-center">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          {"Creado por Greimil Nunez Y Runiel Martinez"}
        </a>
      </div>
    </footer>
  );
};
