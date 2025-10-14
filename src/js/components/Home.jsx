import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx"


//create your first component
const Home = () => {
  return (
<>
      <div className="w-100">
        <Navbar />
      </div>

      <div className="container">
		 <div className="bg-body-secondary p-4 mt-2 shadow-sm">
        <Jumbotron />
		 </div>
		 </div>
	<div className="container">
        <Card />
      </div>
	  
	  
  </>
  );
};

export default Home;