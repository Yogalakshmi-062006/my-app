import React,{useState,useEffect} from "react";
import "./Home.css";
import tshirt1 from'./tshirt1.jpg';
import tshirt2 from'./tshirt2.jpg';
import tshirt3 from'./tshirt3.jpg';
import tshirt4 from'./tshirt4.jpg';
import axios from "axios";
import logo from './logo.jpg';
const NavBar = () => (
  <nav className="navBar">
  <img src={logo}alt=""/>
  <div className='Homepage'>
  </div>
  <div className="parent2">
  <div className="root1">
  <p>Home</p>
  </div>
  </div>
  <div className="root2">
  <p>Contact</p>
  </div>
  <div className="root3">
  <p>About</p>
  </div>
  <div className="root4">
  <button id="hello">Login</button>
  </div>
  </nav>
);


const Home = () => {
const[productData,setproductData]=useState([]);
async function getData() {
  await axios.get("https://dummyjson.com/products").then((res)=>{setproductData(res.data.products)})
  
}
useEffect(()=>{
  getData();
},[]);
console.log(productData)

  return (
    <div>
      <NavBar/>
      <div className="container">
        <div className="card">
         <img src={tshirt1}alt="Black T-shirt"/>
         <h3>blue Tshirt</h3>
         <p>$1300</p>
         <button>Add to cart</button> 
      </div>

      <div className="card">
         <img src={tshirt2}alt="Sweater"/>
         <h3>Sweater</h3>
         <p>$150</p>
         <button>Add to cart</button> 
      </div>

      <div className="card">
         <img src={tshirt3}alt="Green Hoodie"/>
         <h3>Green Hoodie</h3>
         <p>$200</p>
         <button>Add to cart</button> 
      </div>

      <div className="card">
         <img src={tshirt4}alt="Blue Jacket"/>
         <h3>Blue Shirt</h3>
         <p>$600</p>
         <button>Add to cart</button> 
      </div>
      </div>
      </div>
  );
};
export default Home;