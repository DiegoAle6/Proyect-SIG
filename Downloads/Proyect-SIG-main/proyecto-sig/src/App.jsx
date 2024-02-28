import React from 'react';
import './style.css'; // Asegúrate de importar tu archivo de estilos CSS

const TuComponente = () => {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <header>
        Documentos del alumno
      </header>

      <h2 className="blue-text">Formatos</h2>

      {/* Primera Card */}
      <div className="card-section">
        <div className="card">
          <div className="content-wrapper">
            <div className="text-content">
            <p className="blue-text">Formato de anteproyecto</p>
              <p>Lorem ipsum dolor sit amet consectetur. Tortor cursus id gravida amet a congue porttitor. Dapibus facilisi facilisi sagittis accumsan amet ultrices.</p>
            </div>
            
            <div className="image-container">
              <img
                src="https://articles-images.sftcdn.net/wp-content/uploads/sites/2/2018/11/microsoft-word-pdf.jpg"
                alt="Descripción de la imagen"
                style={{ width: '50%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>


      <h2 className="blue-text">Cartas</h2>

      {/* Segunda Card: Carta de digitalización de memoria */}
      <div className="card-section">
        <div className="card">
          <div className="content-wrapper">
            <div className="text-content">
              <p className="blue-text">Carta de digitalización de memoria</p>
              <p>Lorem ipsum dolor sit amet consectetur. Tortor cursus id gravida amet a congue porttitor. Dapibus facilisi facilisi sagittis accumsan amet ultrices.</p>
            </div>
            
            <div className="image-container">
              <img
                src="https://articles-images.sftcdn.net/wp-content/uploads/sites/2/2018/11/microsoft-word-pdf.jpg"
                alt="Descripción de la imagen"
                style={{ width: '50%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tercera Card: Carta de aprobación de memoria */}
      <div className="card-section">
        <div className="card">
          <div className="content-wrapper">
            <div className="text-content">
              <p className="blue-text"> Carta de aprobación de memoria</p>
              <p>Lorem ipsum dolor sit amet consectetur. Tortor cursus id gravida amet a congue porttitor. Dapibus facilisi facilisi sagittis accumsan amet ultrices.</p>
            </div>
            
            <div className="image-container">
              <img
                src="https://articles-images.sftcdn.net/wp-content/uploads/sites/2/2018/11/microsoft-word-pdf.jpg"
                alt="Descripción de la imagen"
                style={{ width: '50%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TuComponente;
