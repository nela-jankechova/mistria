import gridItem from './gridItem.jsx'
import portrait from './portrait.jsx'
import html2canvas from 'html2canvas';
import downloadjs from 'downloadjs';
import './App.css'
import './fonts/mistria.ttf'
import background from './assets/background.webp'
import birthday from './assets/birthday_icon.webp'
import heart from './assets/heart_icon.webp'
import player from './assets/player_icon.png'
import job from './assets/job_icon.webp'
import logo from './assets/logo.png'
import magic from './assets/magic_icon.webp'
import rosehip from './assets/rose_hip.png'

function App() {

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.body);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
  };

  return (
    <div className='panel-layout'>
      <div className="panel-child small">
        <img src={logo} className='fit' />
        <h1>Profile Maker</h1>
        <img src={magic} />
        <h2>About</h2>
        <text>This is a profile maker inspired by NPC Studio's <a href="Fields of Mistria">Fields of Mistria</a>. Create your own character page as it would appear in the game!</text>
        <h2>Instructions</h2>
        <text>Click on the profile or any of the liked or loved items to upload your own image. You can download game sprites from the <a href="https://fieldsofmistria.wiki.gg/wiki/Fields_of_Mistria_Wiki">Fields of Mistria Wiki</a>.</text>
        <div className='bio-container'>
          <text>Tip: If you want to follow in-game design rules, arrange your likes and loves in alpahebtical order.</text>
        </div>
        <text> When you're done, you can download a .png of your profile using the link at the bottom of the page.</text>
      </div>
      <div className='panel-child'>
        <div className="flex-parent">
          <div className="flex-child">
            <h2>Portrait</h2>
            {portrait()}
          </div>
          <div className="flex-child">
            <h2>Loved Gifts</h2>
            <div className="grid-container">
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
            </div>
            <h2>Liked Gifts</h2>
            <div className="grid-container">
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
              {gridItem()}
            </div>
          </div>
        </div>
        <div className="bio-container">
          <div className="bio">
            <img
              src={player}
              alt="Player Icon"
              height="35px"
              width="35px"
            />
            <input className="input" name="name" defaultValue="Enter name" />
          </div>
          <div className="bio">
            <img
              src={birthday}
              alt="Birthday Icon"
              height="35px"
              width="35px"
            />
            <input className="input" name="birthday" defaultValue="Enter birthday" />
          </div>
          <div className="bio">
            <img
              src={job}
              alt="Employment"
              height="35px"
              width="35px"
            />
            <input className="input" name="job" defaultValue="Enter job" />
          </div>
          <div className="bio">
            <img
              src={heart}
              alt="Heart Icon"
              height="35px"
              width="35px"
            />
            <input className="input" name="relationship" defaultValue="Enter relationship status" />
          </div>
        </div>
      </div>
      <div className="panel-child small">
        <h2> Download </h2>
        <div className='bio-container'>
          <li>
            <a href="#" onClick={handleCaptureClick}>
              Click to Download Image
            </a>
          </li>
        </div>
        <h2> Disclaimer </h2>
        <text>I am not affiliated with NPC Studios or Fields of Mistria in any capacity. This is a transformative fan work for which I am not making money. If you wish for this content to be modified or taken down, please send me a message.</text>
        <h2> Contact </h2>
        <text>This page was made with love by Nela Jankechova, aspiring biologist and programmer. </text>
        <div className='bio-container'>
          <li>
            <a href="mailto:nelajankechova@gmail.com">
              Email
            </a>
          </li>
        </div>
        <div className='bio-container'>
          <li>
            <a href="https://github.com/nela-jankechova/">
              GitHub
            </a>
          </li>
        </div>
        <div className='bio-container'>
          <li>
            <a href="https://www.linkedin.com/in/nela-jankechova-38882416b/">
              LinkedIn
            </a>
          </li>
        </div>
        <img src={rosehip} className='small' />
        <div className='bio-container'>
          <li>
            <a href="https://fontstruct.com/fontstructions/show/2611132/fields-of-mistria">
              Download my Fields of Mistria Font
            </a>
          </li>
        </div>
      </div>

    </div>);
}

export default App
