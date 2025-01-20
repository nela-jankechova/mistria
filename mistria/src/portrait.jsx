import { useState } from 'react'
import './App.css'
import example from './assets/example_portrait.png'

const portrait = function() {
  const [file, setFile] = useState();
  const [display, setDisplay] = useState("notdisplayed");
  
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  const showButton = e => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideButton = e => {
    e.preventDefault();
    setDisplay("notdisplayed");
  };

  return (
   <div className="portrait-container" onChange={handleChange} onMouseEnter={e => showButton(e)} onMouseLeave={e => hideButton(e)}>
      <input type="file" className={display}/>
      <img className="portrait" src={file || example}  alt="Portrait"/>
    </div>
  );
}

export default portrait;