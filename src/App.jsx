import logo from "./logo.svg";
import back from "./artifacts/contracts/decentralisedIdentityManagement.sol/decentralisedIdentityManagement.json";
import "./App.css";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Getmygovt from "./pages/Getmygovt/Getmygovt";
import { BrowserRouter, Route, Routes, Link, redirect, Navigate, useNavigate } from "react-router-dom";
import Uploadmed from "./pages/Uploadmed/Uploadmed";
import Giveaccess from "./pages/Giveaccess/Giveaccess";
import Firstpage from "./pages/Firstpage/firstpage";
import Otherfile from "./pages/Otherfile/Otherfile";
import AnimatedPage from "./AnimatedPage";
import { AnimatePresence } from "framer-motion";


function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [reload, setreload] = useState(0);
  const nav= useNavigate()
  function sett(){
    setIsConnected(true);
  }

 

  // useEffect(() => {
  const connect = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      try {
        if (provider) {
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            //connect();
           //  window.location.reload();
             setIsConnected(false);
          });
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          setAccount(address);

          let contractAddress = "0xCc87E22184F8167e843640a7cfBc4A663153542D";

          const contract = new ethers.Contract(
            contractAddress,
            back.abi,
            signer
          );

          setContract(contract);
          setProvider(provider);
          console.log(contract);
          console.log(account);
        } else {
          alert("pls install metamask");
        }
      } catch {
        alert(
          "check at the metamask sign for sign up or install the extension"
        );
      }
    };
    provider && loadProvider();
    // }, []);
  };

  return (
  <AnimatePresence wait>
    <>
      {/* {!isConnected && (
        <div className="App">
          {/* {/* <button onClick={connect}>connect to metamask</button> */}
          {/* <h1>{account ? account : "not connected"}</h1> */}
          {/* <button onClick={connect}>connect to metamask</button>
          <button onClick={() => setIsConnected(true)}>
            <Link to="/homepage">Home</Link>
          </button>
        </div>
      // )} */} 
{/* <button onClick={connect}>meta</button>
<button onClick={()=>{nav("/giveaccess")}}>giveaccess</button>
<button onClick={()=>{nav("/homepage")}}>homepage</button> */}

      <Routes>
        <Route
        exact
          path="/"
          element={
           
            <Firstpage
            isConnected={isConnected}
              sett={sett}
              connect={connect}
              account={account}
              provider={provider}
              contract={contract}
            />
          }
        ></Route>
        <Route
          exact
          path="homepage"
          element={isConnected?
           ( <Homepage
              account={account}
              provider={provider}
              contract={contract}
            />) :( <Navigate to="/"/>)
          }
        >
          
        </Route>

        <Route
        exact
          path="/getmygov"
          element={
            isConnected?
           ( <Getmygovt
              account={account}
              provider={provider}
              contract={contract}
            />) :( <Navigate to="/"/>)
          }
        ></Route>
        <Route
          exact
          path="giveaccess"
          element={
            isConnected?
            ( <Giveaccess
               account={account}
               provider={provider}
               contract={contract}
             />) :( <Navigate to="/"/>)
          }
        ></Route>
           <Route
          exact
          path="/Otherfile"
          element={
            isConnected?
            ( <Otherfile
               account={account}
               provider={provider}
               contract={contract}
             />) :( <Navigate to="/"/>)
            
          }
        ></Route>
      </Routes>
    </>
    </AnimatePresence>
  );
}

export default App;
