
import './App.css';
// import About1 from './components/About1';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import React,{useState} from 'react'
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState("")
  
      const showAlert = (message,type)=>{
         setAlert({msg: message,
                  type: type
      })

      setTimeout(() => {
          setAlert(null);
      }, 2000);
    } 

   const togglemode = ()=>{
     if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = '#042743';
     showAlert("Dark Mode has been enabled","success");
     document.title = "TextUtils-Dark Mode Enabled";
     }
     else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled","success");
    document.title = "TextUtils-Light Mode Enabled";
   }
  }

  return (
    <>
    {/* <BrowserRouter> */}

 <Navbar title = "textUtils" mode={mode} togglemode={togglemode} />
 <Alert  alert={alert}/>
    <div className="container my-3">
       {/* <Routes> */}
        {/* <Route path="/about" element={<About1/>}></Route> */}
        {/* <Route  */}
  <Textbox heading = "Enter the text to analyze below:" showAlert={showAlert} mode={mode}/>
        {/* </Route> */}
      {/* </Routes> */}
    </div>
    
    {/* </BrowserRouter> */}
  </>
  );
}

export default App;
