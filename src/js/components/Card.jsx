import React from "react";


const Card = (props) => {

	return (
    
          <div className="card" style={{ width: "18rem" }}>
            <img src= {props.img} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">{props.titulo}</h5>
              <p className="card-text">{props.descripcion}</p>
              <a href="#" className="btn btn-primary">Botón</a>
            </div>
          </div>
       
     
        
  );
};


export default Card;