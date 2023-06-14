import React, { useEffect, useState } from 'react'
import "./Giveaccess.css"
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import AnimatedPage from '../../AnimatedPage';
export default function Giveaccess({ contract, account, provider }) {
  const nav= useNavigate();
    const [list,setList]=useState(null);
    const  [add,setadd]= useState(null);
    const [see,setsee] = useState(null);
    const [pi1,setpi1] = useState(1);
    const sharing = async () => {
    //    const address = document.querySelector(".address").value;
    //    console.log(address)
      
      if(pi1===1) {await contract.giveGovernmentIdAccess(add)}
      else if(pi1===2) {await contract.giveMedicalRecordsAccess(add)}
     else if(pi1===3) {await contract.giveEducationalCertificatesAccess(add)}
      else if(pi1===4) {await contract.giveGeneralPhotosAccess(add)};
    //     setModalOpen(false);
      };
   
        const accessList = async () => {
        
          if(pi1===1){try {const addressList = await contract.checkWhoHasGovernmentIdAccess();
            const alladdressList= await Promise.all(
              addressList.map((player)=>{
                return player
              })
            )
            
            console.log(addressList);      
          setList(alladdressList);
          console.log(list)
          setsee(!see)} catch(err){alert(err) }}
          if(pi1===2){try {const addressList = await contract.checkWhoHasMedicalRecordsAccess();
            const alladdressList= await Promise.all(
              addressList.map((player)=>{
                return player
              })
            )
            
            console.log(addressList);      
          setList(alladdressList);
          console.log(list)
          setsee(!see)} catch(err){alert(err) }}
          if(pi1===3){try {const addressList = await contract.checkWhoHasEducationalCertificatesAccess();
            const alladdressList= await Promise.all(
              addressList.map((player)=>{
                return player
              })
            )
            
            console.log(addressList);      
          setList(alladdressList);
          console.log(list)
          setsee(!see)} catch(err){alert(err) }}
          if(pi1===4){try {const addressList = await contract.checkWhoHasgGeneralPhotosAccess();
            const alladdressList= await Promise.all(
              addressList.map((player)=>{
                return player
              })
            )
            
            console.log(addressList);      
          setList(alladdressList);
          console.log(list)
          setsee(!see)} catch(err){alert(err) }}
        }
              
          
      
        // };
        //contract && accessList();
 
  return (
    <AnimatedPage>
    <>
      <div className="grandparent1">
        <video autoPlay loop muted id="myVideo1">
          <source src="/Videos/video1.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="sidebar1">
          <div className="p11">
            <button
              onClick={() => {
                nav("/homepage")
               // document.querySelector(".govtfun1").classList.toggle("govtfunt1");
              }}
              className="sidebtn1"
            >
              <h2>Upload Ur Credentials</h2>
            </button>
          
          </div>
          <div className="p21">
            <button
              onClick={() => {
                //   setpi(null);
              }}
              className="sidebtn1"
            >
              <h2 style={{background:'green'}}>Give Access to Others</h2>
            </button>
            <div className="govtfunt1">
              <ul>
                <div className="submenu1" id="submenuid1">
                <button style={{all:"unset", cursor:"pointer"}}onClick={()=>{setpi1(1);document.querySelector("#submenuid1").style.background="yellow";document.querySelector("#submenuid2").style.background="white";document.querySelector("#submenuid3").style.background="white";document.querySelector("#submenuid4").style.background="white";}} className="sidebtn1">
                    <h3>Share Govt Id</h3>
                  </button>
                </div>
                <hr />
                <div className="submenu1" id="submenuid2">
                <button style={{all:"unset", cursor:"pointer"}} onClick={()=>{setpi1(2);document.querySelector("#submenuid1").style.background="white";document.querySelector("#submenuid2").style.background="yellow";document.querySelector("#submenuid3").style.background="white";document.querySelector("#submenuid4").style.background="white";}} className="sidebtn1">
                    <h3>Share Medical Id</h3>
                  </button>
                  <hr />
                </div>
                <div className="submenu1" id="submenuid3">
                <button style={{all:"unset", cursor:"pointer"}} onClick={()=>{setpi1(3);document.querySelector("#submenuid1").style.background="white";document.querySelector("#submenuid2").style.background="white";document.querySelector("#submenuid3").style.background="yellow";document.querySelector("#submenuid4").style.background="white";}} className="sidebtn1">
                    <h3>Share educational id</h3>
                  </button>
                  <hr />
                </div>
                <div className="submenu1" id="submenuid4">
                <button style={{all:"unset", cursor:"pointer"}} onClick={()=>{setpi1(4);document.querySelector("#submenuid1").style.background="white";document.querySelector("#submenuid2").style.background="white";document.querySelector("#submenuid3").style.background="white";document.querySelector("#submenuid4").style.background="yellow";}} className="sidebtn1">
                    <h3>Share General Photos</h3>
                  </button>
                  <hr />
                </div>
              </ul>
            </div>
            
          </div>
          <div className="p11">
            <button
              onClick={() => {
                nav("/getmygov")
               // document.querySelector(".govtfun1").classList.toggle("govtfunt1");
              }}
              className="sidebtn1"
            >
              <h2>Get my details</h2>
            </button>
            
          </div>
          <div className="p11">
            <button
              onClick={() => {
                nav("/Otherfile")
               // document.querySelector(".govtfun1").classList.toggle("govtfunt1");
              }}
              className="sidebtn1"
            >
              <h2>Get others details</h2>
            </button>
          
          </div>
        </div>

        <>
          <div className="parent1">
              {/* <button  onClick={accessList}> chechk  who has acces </button> */}


        { !see  ?(<><h1 className="heading1">Personal Information</h1>
            <div className="infobox1">
              <div className="rotated-image1">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/768px-MetaMask_Fox.svg.png?20220831120339"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="inpuut1">
        
                    <h1>Give Acess to your ______ documents</h1>
                    
      <TextField className='address' fullWidth label="fullWidth" id="fullWidth" onChange={(e)=>{setadd(e.target.value);console.log(e.target.value)}}/>
                <button
                  class="fill-button1"
                  onClick={sharing}
                >
                Share the Government info with others
                </button>
                <button onClick={accessList} class = "fill-button1" >Check who has access</button>
                {/* {
                    list && list.map((item,i)=>{
                        return()
                    })
                } */}
              </div>
            </div></>) : (  <div className='shown'>
            
        
            { list ?  list[0].map((item,i)=>{
                  return( <div className='shownlist'><h1 style={{color:"white"}}>{item}</h1></div>




                 )
               }): (<h1 style={{color : "white"}}>Empty list</h1>)}
           <div className='shownchild'><button onClick={()=>{setsee(null)}} className='shownchildbtn fill-button1'>Back to access other</button></div>
           </div>)}
          </div>
        </>
      </div>
    </>
    </AnimatedPage>
  )
}
