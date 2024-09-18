'use client'

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronUp } from "lucide-react"
import styles from './Navbar.module.css'

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('inicio')
  const [scrolled, setScrolled] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const touchStartY = useRef(0)
  const navbarMobileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isExpanded) return

    const touchEndY = e.touches[0].clientY
    const diff = touchStartY.current - touchEndY

    if (diff > 50) { // Si el gesto hacia arriba es mayor a 50px
      closeNavbar()
    }
  }

  const closeNavbar = () => {
    if (navbarMobileRef.current) {
      const height = navbarMobileRef.current.offsetHeight
      navbarMobileRef.current.style.height = `${height}px`
      navbarMobileRef.current.offsetHeight // Force reflow
      navbarMobileRef.current.style.height = '0'
    }
    setIsClosing(true)
    setTimeout(() => {
      setIsExpanded(false)
      setIsClosing(false)
      if (navbarMobileRef.current) {
        navbarMobileRef.current.style.height = ''
      }
    }, 300) // Este tiempo debe coincidir con la duración de la transición en CSS
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
    closeNavbar()
  }

  const socialLinks = [
    { icon: '/assets/nav-icon1.svg', url: 'https://www.linkedin.com/in/lucianoemeri/' },
    { icon: '/assets/nav-icon2.svg', url: 'https://github.com/LucianoEmeri' },
    { icon: '/assets/nav-icon3.svg', url: 'https://www.instagram.com/LucianoEmeri' }
  ]

  return (
    <nav 
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className={styles.navbarContainer}>
        <div className={styles.navbarContent}>
          <Link href="/" className={styles.navbarLogo}>
            <Image 
              src="/assets/logo.png"
              alt="Logo" 
              width={180}
              height={60}
              quality={100}
              className="transition duration-300 hover:scale-105"
              style={{
                maxWidth: '90%',
                height: 'auto',
                filter: 'invert(1)'
              }}
              priority
            />
          </Link>
          <div className={styles.navbarLinks}>
            {[
              { name: 'Inicio', id: 'home' },
              { name: 'Habilidades', id: 'skills' },
              { name: 'Proyectos', id: 'projects' }
            ].map((link) => (
              <button 
                key={link.name}
                className={`${styles.navbarLink} ${activeLink === link.id ? styles.active : ''}`}
                onClick={() => {
                  onUpdateActiveLink(link.id)
                  scrollToSection(link.id)
                }}
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className={styles.navbarRight}>
            <div className={styles.socialIcons}>
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
                  <Image src={link.icon} alt={`Social Icon ${index + 1}`} width={16} height={16} className={styles.socialIconImage} />
                </a>
              ))}
            </div>
            <button 
              className={styles.connectButton}
              onClick={() => scrollToSection('connect')}
            >
              <span>Contacto</span>
            </button>
          </div>
          <div className={styles.navbarToggle}>
            <button 
              className={styles.toggleButton}
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label="Alternar menú"
            >
              {isExpanded ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {(isExpanded || isClosing) && (
        <div ref={navbarMobileRef} className={`${styles.navbarMobile} ${isClosing ? styles.closing : ''}`}>
          {[
            { name: 'Inicio', id: 'home' },
            { name: 'Habilidades', id: 'skills' },
            { name: 'Proyectos', id: 'projects' }
          ].map((link) => (
            <button 
              key={link.name}
              className={`${styles.navbarMobileLink} ${activeLink === link.id ? styles.active : ''}`}
              onClick={() => {
                onUpdateActiveLink(link.id)
                scrollToSection(link.id)
              }}
            >
              {link.name}
            </button>
          ))}
          <div className={styles.navbarMobileSocial}>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
                <Image src={link.icon} alt={`Social Icon ${index + 1}`} width={16} height={16} className={styles.socialIconImage} />
              </a>
            ))}
          </div>
          <div className={styles.navbarMobileConnect}>
            <button 
              className={styles.connectButton}
              onClick={() => scrollToSection('connect')}
            >
              <span>Contacto</span>
            </button>
          </div>
          <div className={styles.swipeIndicator}>
            <ChevronUp size={24} />
            <span>Desliza hacia arriba para cerrar</span>
          </div>
        </div>
      )}
    </nav>
  )
}