import React, { useEffect, useState } from "react";
import "./Getmygovt.css";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../AnimatedPage";
export default function Getmygovt({ contract, account, provider }) {
  const nav = useNavigate();
  const [g, setg] = useState(1);
  const [data, setdata] = useState("");
  const [n, setn] = useState(false);
  const getdata = async () => {
    if (g === 1) {
      try{
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
        setn(true);}}catch{
          console.log("cpold not find");
        }
      }
     else if (g === 2) {
      try{
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
        setn(true);}}catch{
          console.log("cpold not find");
        }
      }
     else if (g === 3) {
      try{
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
        setn(true);}}catch{
          console.log("cpold not find");
        }
      }
     else if (g === 4) {
      try{
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
        setn(true);}}catch{
          console.log("cpold not find");
        }
      }
    };
    // console.log(datarray);
    // console.log(datarray);
    // const isEmpty = Object.keys(datarray).length == 0;
  useEffect(()=>{
   account && getdata();
  },[account,g])

  return (
    <AnimatedPage>
    <>
      <div className="grandparent2">
        <video autoPlay loop muted id="myVideo2">
          <source src="/Videos/video1.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="sidebar2">
          <div className="p12">
            <button
              onClick={() => {
                nav("/homepage");
                // document
                //   .querySelector(".govtfun2")
                //   .classList.toggle("govtfunt2");
              }}
              className="sidebtn2"
            >
              <h2>Upload Credentials</h2>
            </button>
            <div className="govtfun2">
              <ul>
                <div className="submenu2">
                  <button className="sidebtn2">
                    <h3>Upload Govt Id</h3>
                  </button>
                </div>
                <hr />
                <div className="submenu2">
                  <button className="sidebtn2">
                    <h3>Upload Medical Id</h3>
                  </button>
                  <hr />
                </div>
                <div className="submenu2">
                  <button className="sidebtn2">
                    <h3>Upload educational id</h3>
                  </button>
                  <hr />
                </div>
                <div className="submenu2">
                  <button className="sidebtn2">
                    <h3>Upload General Photos</h3>
                  </button>
                  <hr />
                </div>
              </ul>
            </div>
          </div>
          <div className="p22">
            <button
              onClick={() => {
                nav("/giveaccess");
              }}
              className="sidebtn2"
            >
              <h2>Give Access to Others</h2>
            </button>
          </div>
          <div className="p21">
            <button
              onClick={() => {
                //   setpi(null);
              }}
              className="sidebtn1"
            >
              <h2 style={{ backgroundColor: "green" }}>____Get my data_____</h2>
            </button>
            <div className="govtfunt1">
              <ul>
                <div className="submenu1" id="submenuid1">
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
                    className="sidebtn1"
                  >
                    <h3>Get my Govt Ids</h3>
                  </button>
                </div>
                <hr />
                <div className="submenu1" id="submenuid2">
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
                    className="sidebtn1"
                  >
                    <h3>Get my Medical Ids</h3>
                  </button>
                  <hr />
                </div>
                <div className="submenu1" id="submenuid3">
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
                    className="sidebtn1"
                  >
                    <h3>Get my educational ids</h3>
                  </button>
                  <hr />
                </div>
                <div className="submenu1" id="submenuid4">
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
                    className="sidebtn1"
                  >
                    <h3>Get my General Photos</h3>
                  </button>
                  <hr />
                </div>
              </ul>
            </div>
          </div>
          <div className="p22">
            <button
              onClick={() => {
                nav("/Otherfile");
              }}
              className="sidebtn2"
            >
              <h2>Get others details</h2>
            </button>
          </div>
        </div>

        <>
          <div className="parent2">
            {/* <button onClick={add}>add users </button> */}
            {/* {!n ? (
              <button className="fill-button2" onClick={getdata}>
                get my data
              </button>
            ) : ( */}
              <div >
               
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
                    {/* Go back */}
                  </button>
                </div>
              </div>
            
          </div>
        </>
      </div>
    </>
    </AnimatedPage>
  );
}
