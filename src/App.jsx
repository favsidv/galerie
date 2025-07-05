import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <p className='app-undertitle'>ONCHAIN<br />GALERIE</p>
        <p className='app-title'>DiGital Arts<br /><span style={{fontFeatureSettings: '"ss01" on'}}>&</span><br />DESIGN</p>
        <p className='app-sort'>Balance<br /><span style={{marginLeft: '50px'}}>your space,</span><br /><span style={{marginLeft: '200px'}}>and</span><br /><span style={{position: 'absolute', transform: 'translate(70px, 10px)'}}>Tokenize<br />your vision.</span><br /><span style={{position: 'absolute', transform: 'translate(50px, 150px)'}}>Enter<br />the gallery.</span></p>
        <img src="/images/arrow.svg" alt="app-image" className='app-arrow' />
        <button className='app-button'>SHOP NOW</button>
      </div>
      <img src="/images/joconde.jpg" alt="Mona Lisa, La Joconde" className='app-monalisa' />
    </> 
  )
}

export default App
