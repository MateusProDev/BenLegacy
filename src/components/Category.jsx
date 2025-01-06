import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css';

const Category = () => {
  const navigate = useNavigate();

  return (
    <div className="containerFlexCar">
      <div className="categoryContainer">
        <div className="boxCate" onClick={() => navigate('/Pizzas')}>
          <img src="./img/WATCH.png" alt="Pizzas" />
          <h3>Smart's</h3>
        </div>
        <div className="boxCate" onClick={() => navigate('/Pasteis')}>
          <img src="./img/RELOGIOANA.png" alt="Páteis" />
          <h3>Analógicos</h3>
        </div>
        <div className="boxCate" onClick={() => navigate('/Calzones')}>
          <img src="./img/ANA.png" alt="Calzones" />
          <h3>Antigos</h3>
        </div>
      </div>
    </div>
  );
}

export default Category;
