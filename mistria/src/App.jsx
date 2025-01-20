import gridItem from './gridItem.jsx'
import './App.css'
import './fonts/mistria.ttf'
import portrait from './portrait.jsx'
import background from './assets/background.webp'
import birthday from './assets/birthday_icon.webp'
import heart from './assets/heart_icon.webp'
import player from './assets/player_icon.png'
import job from './assets/job_icon.webp'

function App() {
  return (
    <>
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
    </>
  );
}

export default App
