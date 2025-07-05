import './App.css'
import { useEffect, useRef } from 'react'

function App() {
  const monalisaRef = useRef(null)
  const artworkContainerRef = useRef(null)
  const artwork5Ref = useRef(null)
  const maxProgressRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      if (monalisaRef.current && artworkContainerRef.current && artwork5Ref.current) {
        const scrollY = window.scrollY
        const maxScroll = 350
        
        const currentProgress = Math.min(scrollY / maxScroll, 1)
        
        if (currentProgress > maxProgressRef.current) {
          maxProgressRef.current = currentProgress
        }
        
        const progress = maxProgressRef.current
        
        const translateY = progress * maxScroll
        
        const initialRotation = -10
        const finalRotation = 0
        const currentRotation = initialRotation + (finalRotation - initialRotation) * progress
        
        const initialTopPercentage = 60
        const newTopPercentage = initialTopPercentage + (translateY / window.innerHeight) * 100
        
        monalisaRef.current.style.top = `${newTopPercentage}%`
        monalisaRef.current.style.transform = `translateX(-50%) rotate(${currentRotation}deg)`
        
        // Calculer la position finale du app-monalisa pour positionner le artwork-container
        const finalTranslateY = 1 * maxScroll // Position finale quand progress = 1
        const finalTopPercentage = initialTopPercentage + (finalTranslateY / window.innerHeight) * 100
        
        // Positionner le artwork-container en dessous de la position finale du app-monalisa
        // On ajoute un offset pour l'espacement et la hauteur de l'image
        const containerTopPercentage = finalTopPercentage + 0 // 10% d'offset pour l'espacement
        artworkContainerRef.current.style.top = `${containerTopPercentage}%`
        
        // Gérer la visibilité seulement pour l'artwork 5
        if (progress >= 1) {
          // Animation terminée: cacher le monalisa et montrer l'artwork 5
          monalisaRef.current.style.opacity = '0'
          artwork5Ref.current.style.opacity = '1'
        } else {
          // Animation en cours: montrer le monalisa et cacher l'artwork 5
          monalisaRef.current.style.opacity = '1'
          artwork5Ref.current.style.opacity = '0'
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Appeler handleScroll au montage pour définir la position initiale
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className='app'>
        <p className='app-undertitle'>ONCHAIN<br />GALERIE</p>
        <p className='app-title'>DiGital Arts<br /><span style={{fontFeatureSettings: '"ss01" on'}}>&</span><br />DESIGN</p>
        <p className='app-sort'>Balance<br /><span style={{marginLeft: '50px'}}>your space,</span><br /><span style={{marginLeft: '200px'}}>and</span><br /><span style={{position: 'absolute', transform: 'translate(70px, 10px)'}}>Tokenize<br />your vision.</span><br /><span style={{position: 'absolute', transform: 'translate(50px, 150px)'}}>Enter<br />the gallery.</span></p>
        <img src="/images/arrow.svg" alt="app-image" className='app-arrow' />
        <button className='app-button'>SHOP NOW</button>
      </div>
      <img 
        ref={monalisaRef}
        src="/images/joconde.jpg" 
        alt="Mona Lisa, La Joconde" 
        className='app-monalisa' 
      />
      <div 
        ref={artworkContainerRef}
        className='artwork-container'
      >
        <div className='artwork-scroll'>
          <img src="/images/joconde.jpg" alt="Artwork 1" className='artwork-item' />
          <img src="/images/joconde.jpg" alt="Artwork 2" className='artwork-item' />
          <img src="/images/joconde.jpg" alt="Artwork 3" className='artwork-item' />
          <img src="/images/joconde.jpg" alt="Artwork 4" className='artwork-item' />
          <img 
            ref={artwork5Ref}
            src="/images/joconde.jpg" 
            alt="Artwork 5" 
            className='artwork-item' 
          />
          <img src="/images/joconde.jpg" alt="Artwork 6" className='artwork-item' />
          <img src="/images/joconde.jpg" alt="Artwork 7" className='artwork-item' />
          <img src="/images/joconde.jpg" alt="Artwork 8" className='artwork-item' />
          <img src="/images/joconde.jpg" alt="Artwork 9" className='artwork-item' />
        </div>
      </div>
    </>
  )
}

export default App
