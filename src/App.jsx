import './App.css'
import { useEffect, useRef, useState } from 'react'
import InfoSection from './InfoSection';
import HowItWorks from './HowItWorks';
import MarketPerformance from './MarketPerformance';
import FAQ from './FAQ';
import Footer from './Footer';

function App() {
  const monalisaRef = useRef(null)
  const artworkContainerRef = useRef(null)
  const artwork5StaticRef = useRef(null)
  const artwork5ScrollingRef = useRef(null)
  const artworkScrollRef = useRef(null)
  const maskRef = useRef(null)
  const maskPathRef = useRef(null)
  const maxProgressRef = useRef(0)
  const [isNewSectionVisible, setIsNewSectionVisible] = useState(false);
  const [keyframes, setKeyframes] = useState('');

  useEffect(() => {
    const calculateScroll = () => {
      if (!artworkScrollRef.current || !artwork5ScrollingRef.current) {
        return;
      }

      const scrollContainer = artworkScrollRef.current;
      const artwork5 = artwork5ScrollingRef.current;

      const viewportCenter = window.innerWidth / 2;
      const artwork5Center = artwork5.offsetLeft + artwork5.offsetWidth / 2;
      
      const initialTranslateX = viewportCenter - artwork5Center;
      
      const scrollDistance = scrollContainer.scrollWidth / 2;
      const endTranslateX = initialTranslateX - scrollDistance;

      scrollContainer.style.transform = `translateX(${initialTranslateX}px)`;

      const newKeyframes = `
        @keyframes scrollLeft {
          0% {
            transform: translateX(${initialTranslateX}px);
          }
          100% {
            transform: translateX(${endTranslateX}px);
          }
        }
      `;
      setKeyframes(newKeyframes);
    }
    
    const timer = setTimeout(calculateScroll, 100);
    window.addEventListener('resize', calculateScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateScroll);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (monalisaRef.current && artworkContainerRef.current && artwork5StaticRef.current && artwork5ScrollingRef.current && maskRef.current) {
        const scrollY = window.scrollY
        const maxScroll = 350
        const maskStartScroll = 500
        const maskMaxScroll = 1000
        
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
        
        const finalTranslateY = 1 * maxScroll
        const finalTopPercentage = initialTopPercentage + (finalTranslateY / window.innerHeight) * 100
        
        const containerTopPercentage = finalTopPercentage + 0
        artworkContainerRef.current.style.top = `${containerTopPercentage}%`
        
        if (progress >= 1) {
          monalisaRef.current.style.opacity = '0';
          artwork5StaticRef.current.style.opacity = '0';
          artwork5ScrollingRef.current.style.opacity = '1';
          artworkContainerRef.current.classList.add('scrolling');
        } else {
          monalisaRef.current.style.opacity = '1';
          artwork5ScrollingRef.current.style.opacity = '0';
          artworkContainerRef.current.classList.remove('scrolling');

          artwork5StaticRef.current.style.opacity = progress > 0.9 ? '1' : '0';
        }
        
        if (scrollY >= maskStartScroll) {
          const maskProgress = Math.min((scrollY - maskStartScroll) / (maskMaxScroll - maskStartScroll), 1)

          const y_peak = 100 - 200 * maskProgress
          const sideProgress = Math.sin(maskProgress * Math.PI / 2)
          const y_side = 100 - 100 * sideProgress

          const d = `M 0,${y_side} C 33,${y_peak}, 67,${y_peak}, 100,${y_side} L 100,100 L 0,100 Z`

          if (maskPathRef.current) {
            maskPathRef.current.setAttribute('d', d)
          }

          const blurValue = 10 * (1 - maskProgress);

          if (maskRef.current) {
            maskRef.current.classList.add('visible');
            maskRef.current.style.filter = `blur(${blurValue}px)`
          }

          if (maskProgress > 0.95) {
            setIsNewSectionVisible(true)
          } else {
            setIsNewSectionVisible(false)
          }
        } else if (maskRef.current && maskPathRef.current) {
            const d = 'M 0,100 C 33,100, 67,100, 100,100 L 100,100 L 0,100 Z'
            maskPathRef.current.setAttribute('d', d)
            maskRef.current.classList.remove('visible');
            maskRef.current.style.filter = 'blur(10px)'
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <style>{keyframes}</style>
      <div className='app'>
        <p className='app-undertitle'>ONCHAIN<br />GALLERY</p>
        <p className='app-title'>A GALERIE<br />FOr<br />DIGITAL ArTS</p>
        <p className='app-sort'>Balance<br /><span className="app-sort-s1">your space,</span><br /><span className="app-sort-s2">and</span><br /><span className="app-sort-s3">Tokenize<br />your vision.</span></p>
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
        <div className='artwork-scroll' ref={artworkScrollRef}>
          {/* Premier groupe d'artworks */}
          <img src="/images/artwork1.webp" alt="Artwork 1" className='artwork-item' />
          <img src="/images/artwork2.jpeg" alt="Artwork 2" className='artwork-item' />
          <img src="/images/artwork3.jpg" alt="Artwork 3" className='artwork-item' />
          <img src="/images/artwork4.jpg" alt="Artwork 4" className='artwork-item' />
          <img 
            ref={artwork5ScrollingRef}
            src="/images/joconde.jpg" 
            alt="Artwork 5" 
            className='artwork-item' 
          />
          <img src="/images/artwork6.jpg" alt="Artwork 6" className='artwork-item' />
          <img src="/images/artwork7.jpg" alt="Artwork 7" className='artwork-item' />
          <img src="/images/artwork8.jpg" alt="Artwork 8" className='artwork-item' />
          <img src="/images/artwork9.jpg" alt="Artwork 9" className='artwork-item' />
          
          {/* Deuxième groupe d'artworks (duplication pour l'effet infini) */}
          <img src="/images/artwork1.webp" alt="Artwork 1" className='artwork-item' />
          <img src="/images/artwork2.jpeg" alt="Artwork 2" className='artwork-item' />
          <img src="/images/artwork3.jpg" alt="Artwork 3" className='artwork-item' />
          <img src="/images/artwork4.jpg" alt="Artwork 4" className='artwork-item' />
          <img src="/images/joconde.jpg" alt="Artwork 5" className='artwork-item' />
          <img src="/images/artwork6.jpg" alt="Artwork 6" className='artwork-item' />
          <img src="/images/artwork7.jpg" alt="Artwork 7" className='artwork-item' />
          <img src="/images/artwork8.jpg" alt="Artwork 8" className='artwork-item' />
          <img src="/images/artwork9.jpg" alt="Artwork 9" className='artwork-item' />
        </div>
        <img
          ref={artwork5StaticRef}
          src="/images/joconde.jpg"
          alt="Artwork 5"
          className='artwork-item artwork-main'
        />
      </div>
      
      <svg
        ref={maskRef}
        className='fabric-mask'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <path
          ref={maskPathRef}
          d='M 0,100 C 33,100, 67,100, 100,100 L 100,100 L 0,100 Z'
          fill='#F5F1E9'
        />
      </svg>
      <div className={`info-section-wrapper ${isNewSectionVisible ? 'visible' : ''}`}>
        <InfoSection />
        <HowItWorks />
        <MarketPerformance />
        <FAQ />
        <Footer />
      </div>
    </>
  )
}

export default App
