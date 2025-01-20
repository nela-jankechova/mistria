import { useState, useRef } from 'react'
import './App.css'
import unknown from './assets/unknown_icon.png'

const gridItem = function () {
  const [file, setFile] = useState();
  const [display, setDisplay] = useState();

  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="grid-item" onClick={handleClick}>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
      <img src={file || unknown} className="stretch"/>
    </div>
  );
}

export default gridItem;