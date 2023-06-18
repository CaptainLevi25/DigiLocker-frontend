import React, { useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Link } from "@mui/material";
import Getmygovt from "../Getmygovt/Getmygovt";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../AnimatedPage";
export default function Homepage({ contract, account, provider }) {
  const [pi, setpi] = useState(1);
  const [head,setHead]= useState("Government");
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const nav= useNavigate();
  const [fileName, setFileName] = useState("No image selected");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `ca0292fac6f26867ff46`,
            pinata_secret_api_key: `
            c316a29f8fe20918975a4f5b11a738feacbb2662a3eb2c694ab9545954146f5e`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        console.log(ImgHash);
        if (pi === 1) {
          contract.uploadGovernmentID(ImgHash); ; 
        } else if (pi === 2) {
          contract.uploadMedicalRecords(ImgHash);
        } else if (pi === 3) {
          contract.uploadEducationalCertificates(ImgHash);
        } else if (pi === 4) {
          contract.uploadGeneralPhotos(ImgHash);
        }
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
    alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFile(null);                                                                                                                           
    
   
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
   
  };
  useEffect(()=>{
  if(pi===1) setHead("Government");
  else if(pi===2) setHead("Medical");
 else  if(pi===3) setHead("Educational");
  else if(pi===4) setHead("General");
  },[pi])
  return (
    <AnimatedPage>
    <>
      <div className="grandparent">
        <video autoPlay loop muted id="myVideo">
          <source src="/Videos/video1.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="sidebar">
          <div className="p1">
            <button
              onClick={() => {
             
                // document.querySelector(".govtfun").classList.toggle("govtfunt");
              }}
              className="sidebtn"
            >
              <h2 style={{backgroundColor:"green"}}>__Upload Credentials_</h2>
            </button>
            <div className="govtfunt">
              <ul>
                <div className="submenu" id="submenuid1">
                  <button style={{all:"unset", cursor:"pointer"}}onClick={()=>{setpi(1);document.querySelector("#submenuid1").style.background="yellow";document.querySelector("#submenuid2").style.background="white";document.querySelector("#submenuid3").style.background="white";document.querySelector("#submenuid4").style.background="white";}} className="sidebtn">
                    <h3>Upload Govt Id</h3>
                  </button>
                </div>
                <hr />
                <div className="submenu" id="submenuid2">
                  <button style={{all:"unset", cursor:"pointer"}} onClick={()=>{setpi(2);document.querySelector("#submenuid1").style.background="white";document.querySelector("#submenuid2").style.background="yellow";document.querySelector("#submenuid3").style.background="white";document.querySelector("#submenuid4").style.background="white";}} className="sidebtn">
                    <h3>Upload Medical Id</h3>
                  </button>
                  <hr />
                </div>
                <div className="submenu" id="submenuid3">
                  <button style={{all:"unset", cursor:"pointer"}} onClick={()=>{setpi(3);document.querySelector("#submenuid1").style.background="white";document.querySelector("#submenuid2").style.background="white";document.querySelector("#submenuid3").style.background="yellow";document.querySelector("#submenuid4").style.background="white";}} className="sidebtn">
                    <h3>Upload educational id</h3>
                  </button>
                  <hr />
                </div>
                <div className="submenu" id="submenuid4">
                  <button style={{all:"unset", cursor:"pointer"}} onClick={()=>{setpi(4);document.querySelector("#submenuid1").style.background="white";document.querySelector("#submenuid2").style.background="white";document.querySelector("#submenuid3").style.background="white";document.querySelector("#submenuid4").style.background="yellow";}} className="sidebtn">
                    <h3>Upload General Photos</h3>
                  </button>
                  <hr />
                </div>
              </ul>
            </div>
          </div>
          <div className="p2">
            <button
              onClick={() => {
                nav("/giveaccess")
              }}
              className="sidebtn"
            >
              <h2>Give Access</h2>
            </button>
          </div>
          <div className="p2">
            <button
              onClick={() => {
                nav("/getmygov")
              }}
              className="sidebtn"
            >
              <h2>Get my details </h2>
            </button>
          </div>
          <div className="p2">
            <button
              onClick={() => {
                nav("/Otherfile")
              }}
              className="sidebtn"
            >
              <h2>Get other details</h2>
            </button>
          </div>
        </div>

        <>
          <div className="parent">
            <h1 style={{color:"white"}} className="heading">{head} Information</h1>
            <div className="infobox">
              <div className="rotated-image">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/768px-MetaMask_Fox.svg.png?20220831120339"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="inpuut">
                <form className="form" onSubmit={handleSubmit}>
                  <label htmlFor="file-upload" className="fill-button">
                    Choose Image
                  </label>
                  <input
                    disabled={!account}
                    type="file"
                    id="file-upload"
                    name="data"
                    onChange={retrieveFile}
                  />
                  <div className="textArea">Image:{fileName}</div>
                  <button type="submit" className="upload" disabled={!file}>
                    Upload File
                  </button>
                </form>

                <button
                  class="fill-button"
                  onClick={() => {
                    setpi(null);
                  }}
                >
                  Go To Next Page
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
