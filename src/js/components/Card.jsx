import React from "react";


const Card = () => {
	return (
    
    <div className="container mt-5">
      <div className="row justify-content-center">
  {/* 1 */}
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Carta 1</h5>
              <p className="card-text">Texto de ejemplo de la carta 1.</p>
              <a href="#" className="btn btn-primary">Botón</a>
            </div>
          </div>
        </div>

      
      {/* 2 */}
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Carta 2</h5>
              <p className="card-text">Texto de ejemplo de la carta 2.</p>
              <a href="#" className="btn btn-primary">Botón</a>
            </div>
          </div>
        </div>

        {/* 3*/}
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Carta 3</h5>
              <p className="card-text">Texto de ejemplo de la carta 3.</p>
              <a href="#" className="btn btn-primary">Botón</a>
            </div>
          </div>
        </div>
        {/* 4*/}
        <div className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Carta 3</h5>
              <p className="card-text">Texto de ejemplo de la carta 3.</p>
              <a href="#" className="btn btn-primary">Botón</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card;