import { useState, useRef } from 'react'
import './App.css'
import example from './assets/example_portrait.png'

const portrait = function () {

  const [file, setFile] = useState();

  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="portrait-container" onClick={handleClick}>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
      <img className="portrait" src={file || example} alt="Portrait" />
    </div>
  );
}

export default portrait;