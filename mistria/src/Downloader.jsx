import html2canvas from 'html2canvas';
import downloadjs from 'downloadjs';

const Downloader = function () {
  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.body);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
  };

  return (
    <><h2> Download </h2>
      <div className='rectangle-container'>
        <li>
          <a href="#" onClick={handleCaptureClick}>
            Click to Download Image
          </a>
        </li>
      </div>
    </>
  );
}

export default Downloader;