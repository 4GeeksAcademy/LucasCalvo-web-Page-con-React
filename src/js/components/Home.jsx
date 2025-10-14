import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx"


//create your first component
const Home = () => {
  let paisajes = [
    {
      img: "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU", titulo: "Snow Mountain", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    { 
      img: "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE", titulo: "Sound Lake", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },

    { 
      img: "https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g", titulo: "Yellow Tree", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { 
      img: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4", titulo: "Work", descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },

  ]

  return (
    <>
     <div className="w-100">
  <Navbar />
</div>

<div className="container">
  <div className="bg-body-secondary p-4 mt-2 shadow-sm mb-4">
    <Jumbotron />
  </div>

  <div className="row justify-content-center">
    {paisajes.map((item, index) => (
      <div className="col-md-3" key={index}>
        <Card img={item.img} titulo={item.titulo} descripcion={item.descripcion} />
      </div>
    ))}
  </div>
</div>
    </>
  );
};

export default Home;