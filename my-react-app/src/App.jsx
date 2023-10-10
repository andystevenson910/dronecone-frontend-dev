import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import background from './assets/vecteezy_retro-style-80s-sci-fi-background.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div>


        
      </div>
      {/*Logo will go here with fancier font*/}
      <div> 
        <h1>DRONE CONES</h1> 
      
      </div>

      {/*introduction div*/} 

      {/*Log in button*/} 

      {/*View menu button*/} 

       {/*Vecteezy said we need this. If we don't use their photos we can delete this*/}
      <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
      


      {/*STARTER CONTENT*/} 
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    {/*END STARTER CONTENT*/} 
    </> 
  )
}


{/*background image and formatting */}
document.body.style.backgroundImage = `url(${background})`;
document.body.style.width ='100%';
document.body.style.height ='100%';
document.body.style.backgroundSize ='cover';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundAttachment = 'fixed';
document.body.style.backgroundColor = 'black';
export default App
