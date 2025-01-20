import { useState } from 'react'
import './App.css'
import unknown from './assets/unknown_icon.png'

const gridItem = function () {
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
    <div className="grid-item" onChange={handleChange} onMouseEnter={e => showButton(e)} onMouseLeave={e => hideButton(e)}>
      <input type="file" className={display} />
      <img src={file || unknown} height="50px" width="50px" />
    </div>
  );
}

export default gridItem;