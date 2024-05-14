import { useState } from 'react';
import './App.css';
import About from './Components/About';
// import AboutText from './Components/AboutText';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);
  const showAlert =(message,type)=>{
    setalert({
      msg:message,
      typ:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
  const [mode, setmode] = useState('light');

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-dark') 
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-' +cls);
    if(mode ==='light'){
      setmode('dark')
      document.body.style.background = 'black';
      showAlert('Dark mode enabled ','success');
      document.title='TextUtils Dark Mode'; 
    }else{
      setmode('light');
      document.body.style.background = 'white';
      showAlert('Light mode enabled ','success');
      document.title='TextUtils Light Mode';
    }
  }
  return (
   <>
   <BrowserRouter>

    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} aboutText = 'aboutText'/>
    <Alert alert= {alert}/> 
   <Routes>
          <Route exact path='/textUtils' element={<TextForm  showAlert={showAlert} mode={mode} heading= 'Enter text to analyse....'/>} />  
          <Route exact path='/about' element={<About />} mode={mode}/> 
          </Routes>

   </BrowserRouter> 
   </>
  );
}

export default App;
