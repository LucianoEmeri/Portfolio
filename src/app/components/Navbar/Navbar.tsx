'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import logo from '@/assets/img/logo.png'
import navIcon1 from '@/assets/img/nav-icon1.svg'
import navIcon2 from '@/assets/img/nav-icon2.svg'
import navIcon3 from '@/assets/img/nav-icon3.svg'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('inicio')
  const [scrolled, setScrolled] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

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

  const socialLinks = [
    { icon: navIcon1, url: 'https://www.linkedin.com/in/lucianoemeri/' },
    { icon: navIcon2, url: 'https://github.com/LucianoEmeri' },
    { icon: navIcon3, url: 'https://www.instagram.com/LucianoEmeri' }
  ]

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarContent}>
          <Link href="/" className={styles.navbarLogo}>
            <Image 
              src={logo} 
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
            {['Inicio', 'Habilidades', 'Proyectos'].map((link) => (
              <Link 
                key={link}
                href={`#${link.toLowerCase()}`} 
                className={`${styles.navbarLink} ${activeLink === link.toLowerCase() ? styles.active : ''}`}
                onClick={() => onUpdateActiveLink(link.toLowerCase())}
              >
                {link}
              </Link>
            ))}
          </div>
          <div className={styles.navbarRight}>
            <div className={styles.socialIcons}>
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
                  <Image src={link.icon} alt="" width={16} height={16} className={styles.socialIconImage} />
                </a>
              ))}
            </div>
            <Link href="#connect" className={styles.connectButtonWrapper}>
              <button className={styles.connectButton}>
                <span>Contacto</span>
              </button>
            </Link>
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
      {isExpanded && (
        <div className={styles.navbarMobile}>
          {['Inicio', 'Habilidades', 'Proyectos'].map((link) => (
            <Link 
              key={link}
              href={`#${link.toLowerCase()}`} 
              className={`${styles.navbarMobileLink} ${activeLink === link.toLowerCase() ? styles.active : ''}`}
              onClick={() => {
                onUpdateActiveLink(link.toLowerCase())
                setIsExpanded(false)
              }}
            >
              {link}
            </Link>
          ))}
          <div className={styles.navbarMobileSocial}>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
                <Image src={link.icon} alt="" width={16} height={16} className={styles.socialIconImage} />
              </a>
            ))}
          </div>
          <div className={styles.navbarMobileConnect}>
            <Link href="#connect" className={styles.connectButtonWrapper}>
              <button className={styles.connectButton}>
                <span>Contacto</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}