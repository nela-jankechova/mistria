import { useState, useEffect } from 'react'
import GridItem from './GridItem.jsx'
import Portrait from './Portrait.jsx'
import Downloader from './Downloader.jsx'
import './styles/App.scss'
import birthday from './assets/birthday_icon.webp'
import heart from './assets/heart_icon.webp'
import player from './assets/player_icon.png'
import job from './assets/job_icon.webp'
import logo from './assets/logo.png'
import rosehip from './assets/rose_hip.png'

function App() {

  const [checked, setChecked] = useState(true);
  const [description, setDescription] = useState('');

  const handleCheckboxClick = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    document.title = 'Mistria Profile Maker';
  }, []);

  return (
    <div className='panel-layout'>
      <div className="panel-child small" data-html2canvas-ignore="true">
        <img src={logo} className='fit' />
        <h1>Profile Maker</h1>
        <h2>About</h2>
        <text>This is a profile maker inspired by NPC Studio's <a target="_blank" rel="noopener noreferrer" href="https://www.fieldsofmistria.com/">Fields of Mistria</a>. Create your own character page as it would appear in the game!</text>
        <h2>Instructions</h2>
        <text>Click on the profile or any of the liked items to upload your own image. You can download game sprites from the <a target="_blank" rel="noopener noreferrer" href="https://fieldsofmistria.wiki.gg/wiki/Fields_of_Mistria_Wiki">Fields of Mistria Wiki</a>.</text>
        <div className='rectangle-container'>
          <text>Tip: Arrange your likes and loves in alphabetical order.</text>
        </div>
        <div>
          <input type="checkbox" checked={checked}
            onChange={handleCheckboxClick} /> <text>Show Description</text>
          <br />
          <textarea name="description" maxLength={600} placeholder='Enter description' value={description}
            onChange={e => setDescription(e.target.value)} />
        </div>
        <Downloader />
      </div>
      <div className='panel-child large' id="main-panel">
        <div className="flex-parent">
          <div className="flex-child">
            <div><img src={logo} width="250px" /></div>
            <Portrait />
            <text className={checked ? "textarea" : "hidden"}>{description}</text>
          </div>
          <div className="flex-child">
            <h2>Loved Gifts</h2>
            <div className="grid-container">
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
            </div>
            <h2>Liked Gifts</h2>
            <div className="grid-container">
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem />
            </div>
          </div>
        </div>
        <div className="rectangle-container">
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
            <input className="input" name="relationship" defaultValue="Enter relationship info" />
          </div>
        </div>
      </div>
      <div className="panel-child small" data-html2canvas-ignore="true">
        <h2> Disclaimer </h2>
        <text>I am not affiliated with NPC Studios or Fields of Mistria. This is a fan project for which I am not making money. If you wish for this content to be modified or taken down, please send me a message.</text>
        <h2> Contact </h2>
        <text>This page was made with love by Nela Jankechova, Toronto-based biologist and programmer. Please reach out!</text>
        <div className='rectangle-container'>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="mailto:nelajankechova@gmail.com">
              Email
            </a>
          </li>
        </div>
        <div className='rectangle-container'>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/nela-jankechova/">
              GitHub
            </a>
          </li>
        </div>
        <div className='rectangle-container'>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nela-jankechova-38882416b/">
              LinkedIn
            </a>
          </li>
        </div>
        <img src={rosehip} className='small' />
        <div className='rectangle-container'>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://fontstruct.com/fontstructions/show/2611132/fields-of-mistria">
              Download my Fields of Mistria Font
            </a>
          </li>
        </div>
      </div>

    </div>);
}

export default App
