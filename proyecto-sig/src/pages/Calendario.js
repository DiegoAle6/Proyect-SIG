import Fechas from '../components/fechas';
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Title from '../components/title';

const Calendario = () => {
  const [checkedItems, setCheckedItems] = useState(new Set());

  const handleCheckboxChange = (event) => {
    const targetId = event.target.id;
    const updatedCheckedItems = new Set(checkedItems);

    if (checkedItems.has(targetId)) {
      updatedCheckedItems.delete(targetId);
    } else {
      updatedCheckedItems.add(targetId);
    }

    setCheckedItems(updatedCheckedItems);
  };

  return (
    <>
    <div className='bg-[#F8F8F8] h-full'>
    <Navbar/>
    <Title titulo={'Calendario'} />
    <div className="flex  h-full m-auto  gap-10 p-5 my-[35px] mx-20 flex-row">
      <div className="">
        <div className="p-6 max-w-sm bg-white rounded-xl shadow-md">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <svg
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* Add your SVG content here */}
              </svg>
            </div>
            <div>
              <div className="text-xl font-medium text-black">Mis tareas</div>
              <p className="text-gray-500">Fecha de entrega:</p>
              <p className="text-gray-500">27/06/24</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 text-gray-500 mt-8">
            <div className="flex items-center space-x-2">
            <label htmlFor="correccionObjetivoPrincipal" className="ml-2">
                Corrección de objetivo principal:
              </label>
              <input
                id="correccionObjetivoPrincipal"
                type="checkbox"
                checked={checkedItems.has('correccionObjetivoPrincipal')}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              
            </div>
            <div className="flex items-center space-x-2">
            <label htmlFor="correccionTitulo" className="ml-2">
                Corrección de título:
              </label>
              <input
                id="correccionTitulo"
                type="checkbox"
                checked={checkedItems.has('correccionTitulo')}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              
            </div>
          </div>
        </div>
      </div>
      <Fechas/>
    </div>
    <Footer/>
    </div>
    </>
  );
};

export default Calendario;

