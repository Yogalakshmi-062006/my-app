import React from 'react'
import './Login.css';
const Login = () => {
  var userData=[
    {userName:"yoga",passcode:123,cart:[]},
    {userName:"yoga",passcode:123,cart:[]},
    {userName:"yoga",passcode:123,cart:[]},
  ];
/* const signup=()=>{
    var username=document.getElementById("username").Value;
    var userpasscode=document.getElementById("passcode").Value;*/
    var activeuser=localStorage.getItem("userName");
    function navigate(){
      window.location.replace("/Home");
    }
   /* var activeuserdetails=userData.filter((data)=>{
      return username===data.username;
    });
    console.log(activeuserdetails);
    if(activeuserdetails.length>0)
    {
      if(activeuserdetails[0].passcode===userpasscode)
      {
        localStorage.setItem("username",activeuserdetails[0].username);
          window.location.replace("/Home");
      }
      else{
        console.log("wrong password");
        
      }
    }
    
  }*/
  
  return (
    
    <div class="parent">
      <div class="child">
        
        <label >UserName</label>
        <input type="text" id="userName"/>
        <label>Password</label>
        <input type="number" id="passcode"/>
        <button onClick={navigate} className='hi'>Login</button>
        
      </div>
    </div>
  );
};

export default Login                                                      