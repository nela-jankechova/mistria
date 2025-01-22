import { useState, useRef } from 'react'
import './styles/GridItem.scss'
import unknown from './assets/unknown_icon.png'

const GridItem = function () {
  const [file, setFile] = useState();

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
      <img src={file || unknown} className="grid-image" />
    </div>
  );
}

export default GridItem;