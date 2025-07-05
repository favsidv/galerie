import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [currency, setCurrency] = useState('EUR')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className={isVisible ? 'header-visible' : 'header-hidden'}>
        <a href="" className='header-catalogue'>CATALOGUE</a>
        <p className='header-logo' onClick={() => window.location.href = '/'}>GALERIE</p>
        <div className='header-currency'>
          <select 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value)}
            className='currency-select'
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <a href="" className='header-contact'>CONTACT</a>
        
        <div className='hamburger-menu' onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      </header>
      
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className='mobile-menu-content'>
          <a href="" className='mobile-menu-item'>CATALOGUE</a>
          <a href="" className='mobile-menu-item'>CONTACT</a>
          <div className='mobile-menu-currency'>
            <label>Devise:</label>
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)}
              className='mobile-currency-select'
            >
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>
      </div>
    </> 
  )
}

export default Header
