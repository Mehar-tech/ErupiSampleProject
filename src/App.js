import React, {useState} from 'react'
import './App.css'
function App() {
  const [backendData, setBackendData] = useState([{}]);
 const [data, setData] = useState({
  userName: '',
  email: '',
  password: ''
 })
 const {username, email, password} = data;
 const changeHandler = e => {
  e.preventDefault();
  setData({...data, [e.target.name]: e.target.value})
 }

 const submitHandler = e => {
  e.preventDefault();
  fetch("/api")
  .then(response => response.json())
  .then(data => setBackendData(data))
 }
  return(
    <div style= {{backgroundColor: 'blueviolet', height: 1000}}>
      <br></br>
      <marquee style={{ color: 'white', fontSize: '3.5em' }}>Welcome to Digital ERupi </marquee> <br></br>
      <div style={{backgroundColor: 'white', width:250, height:250, borderRadius:10, marginLeft:500, backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Digital_Rupee.svg/1200px-Digital_Rupee.svg.png")`}}>
      <center>
        <form onSubmit={submitHandler}> 
          <input style = {{marginTop: 40}} type="text" name= "username" value={username} placeholder='Name' onChange={changeHandler}/> <br/>
          <input style = {{marginTop: 10}}  type="email" name= "email" value={email} placeholder='Email' onChange={changeHandler}/> <br/>
          <input style = {{marginTop: 10}}  type="password" name= "password" value={password} placeholder='password' onChange={changeHandler}/> <br/>
          <input style = {{marginTop: 20}}  type="submit" name= "submit" /> <br/>
        </form>
      </center>
      </div>
      <br></br>
      <div style={{textAlign:"center", color:'white', fontSize:"1.5em"}}>
      {(typeof backendData.User === 'undefined') ? (
        <p>Data is not coming from backend</p>
      ):(
        backendData.User.map((User, i) => (
          <p key={i}>{User}</p>
        ))
      )}
    </div>
    </div>
  ) 
} 

export default App