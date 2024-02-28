import React from "react";
import Icono from "../img/user.png"

function navbar() {
  return (
    <>
      <div className="w-full bg-[#325B87] flex flex-row p-3">
        <h1 className="timmana-regular text-wrap text-4xl my-auto ml-4 mr-0 mt-4 text-white">SGE | UT</h1>
        <div class="flex flex-row m-auto text-[#F8F8F8] gap-7 mr-4 inter-variacion ">
          
            <h3 class="div__ul-li m-auto">
                Gestión de estadias
            </h3>
            <h3 class="div__ul-li m-auto">
                Proyecto
            </h3>
            <h3 class="div__ul-li m-auto">
                Calendario
            </h3>
            <h3 class="div__ul-li m-auto">
                Documentos
            </h3>
            <img src={Icono} className='h-[10%] w-[10%] items-center' alt="user"/>
        </div>
        <div class="flex-item user-img"></div>
      </div>
    </>
  );
}

export default navbar;