import React, { useState } from "react";
import "./Otherfile.css";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../AnimatedPage";
export default function Otherfile({ contract, account, provider }) {
  const [text, setText] = useState("");
  const nav = useNavigate();
  const [g, setg] = useState(1);
  const [shown, setShown] = useState(false);
  const [data, setdata] = useState("");
  const [n, setn] = useState(false);
  const getdata = async () => {
    if (g === 1) {
      let datarray = await contract.getMyGovernmentIDs();
      if (datarray) {
        const str = datarray.toString();
        const str_array = str.split(",");
        //console.log(str_array);
        // const images = str_array.map((item,i)=>{

        //     <a href={item} key={i} target='_blank' src={item}>
        //         <img key={i} src={item} />
        //     </a>
        // })
        setdata(str_array);
        console.log("hello");
        console.log(data);
        setn(true);
      }
    } else if (g === 2) {
      let datarray = await contract.getMyMedicalRecords();
      if (datarray) {
        const str = datarray.toString();
        const str_array = str.split(",");
        //console.log(str_array);
        // const images = str_array.map((item,i)=>{

        //     <a href={item} key={i} target='_blank' src={item}>
        //         <img key={i} src={item} />
        //     </a>
        // })
        setdata(str_array);
        console.log("hello");
        console.log(data);
        setn(true);
      }
    } else if (g === 3) {
      let datarray = await contract.getMyEducationalCertificates();
      if (datarray) {
        const str = datarray.toString();
        const str_array = str.split(",");
        //console.log(str_array);
        // const images = str_array.map((item,i)=>{

        //     <a href={item} key={i} target='_blank' src={item}>
        //         <img key={i} src={item} />
        //     </a>
        // })
        setdata(str_array);
        console.log("hello");
        console.log(data);
        setn(true);
      }
    } else if (g === 4) {
      let datarray = await contract.getMyGeneralPhotos();
      if (datarray) {
        const str = datarray.toString();
        const str_array = str.split(",");
        //console.log(str_array);
        // const images = str_array.map((item,i)=>{

        //     <a href={item} key={i} target='_blank' src={item}>
        //         <img key={i} src={item} />
        //     </a>
        // })
        setdata(str_array);
        console.log("hello");
        console.log(data);
        setn(true);
      }
    }
    // console.log(datarray);
    // console.log(datarray);
    // const isEmpty = Object.keys(datarray).length == 0;
  };

  return (
    <AnimatedPage>
    <>
      <div className="grandparent3">
        <video autoPlay loop muted id="myVideo3">
          <source src="/Videos/video1.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="sidebar3">
          <div className="p23">
            <button
              onClick={() => {
                nav("/homepage")
              }}
              className="sidebtn3"
            >
              <h2>Upload ur Credentials</h2>
            </button>
          </div>
          <div className="p23">
            <button
              onClick={() => {
                nav("/giveaccess")
              }}
              className="sidebtn3"
            >
              <h2>Give Access</h2>
            </button>
          </div>
          <div className="p23">
            <button
              onClick={() => {
                nav("/getmygov")
              }}
              className="sidebtn3"
            >
              <h2>_Get my details_</h2>
            </button>
          </div>

          <div className="p13">
            <button
              onClick={() => {

                //    document.querySelector(".govtfun3").classList.toggle("govtfunt3");
              }}
              className="sidebtn3"
            >
              <h2 style={{ backgroundColor: "green" }}>Get other details</h2>
            </button>
            <div className="govtfunt3">
              <ul>
                <div className="submenu3" id="submenuid1">
                  <button
                    style={{ all: "unset", cursor: "pointer" }}
                    onClick={() => {
                      setg(1);
                      document.querySelector("#submenuid1").style.background =
                        "yellow";
                      document.querySelector("#submenuid2").style.background =
                        "white";
                      document.querySelector("#submenuid3").style.background =
                        "white";
                      document.querySelector("#submenuid4").style.background =
                        "white";
                    }}
                    className="sidebtn3"
                  >
                    <h3>Get other Govt Id</h3>
                  </button>
                </div>
                <hr />
                <div className="submenu3" id="submenuid2">
                  <button
                    style={{ all: "unset", cursor: "pointer" }}
                    onClick={() => {
                      setg(2);
                      document.querySelector("#submenuid1").style.background =
                        "white";
                      document.querySelector("#submenuid2").style.background =
                        "yellow";
                      document.querySelector("#submenuid3").style.background =
                        "white";
                      document.querySelector("#submenuid4").style.background =
                        "white";
                    }}
                    className="sidebtn3"
                  >
                    <h3>Get other Medical Id</h3>
                  </button>
                  <hr />
                </div>
                <div className="submenu3" id="submenuid3">
                  <button
                    style={{ all: "unset", cursor: "pointer" }}
                    onClick={() => {
                      setg(3);
                      document.querySelector("#submenuid1").style.background =
                        "white";
                      document.querySelector("#submenuid2").style.background =
                        "white";
                      document.querySelector("#submenuid3").style.background =
                        "yellow";
                      document.querySelector("#submenuid4").style.background =
                        "white";
                    }}
                    className="sidebtn3"
                  >
                    <h3>Get other educational id</h3>
                  </button>
                  <hr />
                </div>
                <div className="submenu3" id="submenuid4">
                  <button
                    style={{ all: "unset", cursor: "pointer" }}
                    onClick={() => {
                      setg(4);
                      document.querySelector("#submenuid1").style.background =
                        "white";
                      document.querySelector("#submenuid2").style.background =
                        "white";
                      document.querySelector("#submenuid3").style.background =
                        "white";
                      document.querySelector("#submenuid4").style.background =
                        "yellow";
                    }}
                    className="sidebtn3"
                  >
                    <h3>Get other General Photos</h3>
                  </button>
                  <hr />
                </div>
              </ul>
            </div>
          </div>
        </div>

        <>
          <div className="parent3">
            {/* <button onClick={add}>add users </button>
    <button onClick={getdata}>getmy data </button>
    <div>
          
      
          { data &&  data.map((item,i)=>{
                return( <img src={item} alt="" />)
             })}
         
         </div> */}
            {!n ? (
              <>
                <h1 className="heading3">Personal Information</h1>
                <div className="infobox3">
                  <div className="rotated-image3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/768px-MetaMask_Fox.svg.png?20220831120339"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div className="inpuut3">
                    <h1>Give Acess to your ______ documents</h1>

                    <TextField
                      className="address"
                      fullWidth
                      label="fullWidth"
                      id="fullWidth"
                      onChange={(e) => {
                        setText(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        getdata()
                      }}
                      class="fill-button3"
                    >
                      Get other Data and images
                    </button>
                    {/* <button class = "fill-button1" >Acess the  Government list</button> */}
                    {/* {
                    list && list.map((item,i)=>{
                        return()
                    })
                } */}
                  </div>
                </div>
              </>
            ) : (
              <div>
                {data ? (
                  data.map((item, i) => {
                    return <img src={item} alt="" />;
                  })
                ) : (
                  <h1 style={{ color: "white" }}>Null</h1>
                )}
                <div>
                  <button
                    onClick={() => {
                      setn(false);
                    }}
                    className="fill-button2"
                  >
                    Go back
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      </div>
    </>
    </AnimatedPage>
  );
}
