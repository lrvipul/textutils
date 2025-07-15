
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null)

  const toggleMode = () => {
    if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#042743'
        document.body.style.color = 'white'
        showAlert('Darkmode has been enabled','success')
      } else {
        setMode('light')
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        showAlert('Lightmode has been enabled','success')
      }
  }

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  } 

  return (
    <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          {/* /users = component-1 
          /users/info = component-2  
          exact is used to for this purpose */}

          <Routes>
            <Route exact path="/" element={<Textform heading="Enter text to analyse"   showAlert={showAlert} mode={mode}/> } />
            <Route exact path="/about" element={<About />} />
          </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
