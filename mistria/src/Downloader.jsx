import { useState} from 'react'
import html2canvas from 'html2canvas';
import downloadjs from 'downloadjs';

const Downloader = function (id) {
  const [checked, setChecked] = useState(true);

  const handleCaptureClick = async () => {
    var target = document.body
    if (!checked) {
      target = document.getElementById("main-panel")
    }
    const canvas = await html2canvas(target);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
  };


  

  const handleCheckboxClick = () => {
    setChecked(!checked);
  };

  return (
    <><h2> Download </h2>
      <div className='rectangle-container'>
        <li>
          <a href="#" onClick={handleCaptureClick}>
            Click to Download Profile
          </a>
        </li>
      </div>
      <input type="checkbox" checked={checked}
          onChange={handleCheckboxClick}/> <text>Include Background</text>
    </>
  );
}

export default Downloader;