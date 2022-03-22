import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  // Toggle state of application
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(28 41 77)';
      triggerAlert('Dark Mode Enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      triggerAlert('Light Mode Enabled', 'success');
    }
  }
  // Trigger alert for certain action
  const triggerAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(()=>{setAlert(null)}, 2000);
  }
  return (
    <>
    <Navbar brand = "TextUtils" aboutText = "About" mode={mode} toggleMode = {toggleMode} />
    <Alert alert = {alert}/>
    <TextForm heading = "Enter text to be analyzed" mode={mode} triggerAlert = {triggerAlert} />
    {/* <About mode={mode}/> */}
    </>
  );
}

export default App;
