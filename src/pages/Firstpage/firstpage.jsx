import React from 'react'
import App from '../../App'
import { useNavigate } from 'react-router-dom';
export default function Firstpage({isConnected,sett,connect,account,provider,contract}) {
  const nav= useNavigate();
  const add = async() => {
    await contract.addUser();
  };
  return (
    
  <div className="Firstpage">
    {/* {/* <button onClick={connect}>connect to metamask</button> */}
    {/* <h1>{account ? account : "not connected"}</h1> */}
    <button onClick={connect}>connect to metamask</button>
    <button onClick={()=>{sett();console.log(isConnected)}}>hello</button>
    <button onClick={()=>{add(); nav("/homepage")}}>add user</button>
    </div> 
  
  )
}
