import { useState } from 'react'
import './App.css'
import './fonts/mistria.ttf'

function App() {
  const [count, setCount] = useState(0)

  function Liked_Item() {
    return (
      <img
        src="https://fieldsofmistria.wiki.gg/images/e/ed/Marmalade.png?20240812052022"
        alt="Liked Item"
        height="50px"
        width="50px"
      />
    );
  }
  
  return (
    <>
    <h2>Loved Gifts</h2>
    <div className="container">
      <div className="item"><Liked_Item /></div>
      <div className="item"><Liked_Item /></div>
      <div className="item"><Liked_Item /></div>
      <div className="item"><Liked_Item /></div>
      <div className="item"><Liked_Item /></div>
      <div className="item"><Liked_Item /></div>
      <div className="item"><Liked_Item /></div>
      <div className="item"><Liked_Item /></div>
      <div className="item"><Liked_Item /></div>
      <div className="item"><Liked_Item /></div>
    </div>
    </>
  );
}

export default App
