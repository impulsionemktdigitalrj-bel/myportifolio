import logoFelipe from '@/assets/images/logo-felipe.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { useTheme } from '@/context/ThemeContext'
import useScrollEvent from '@/hooks/useScrollEvent'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const TopNavbar = ({ isDark }: { isDark?: boolean }) => {
  const [open, setOpen] = useState<boolean>(false)
  const { theme, toggleTheme } = useTheme()

  const { scrollY } = useScrollEvent()

  const {pathname} = useLocation()

  const toggleMenu = () => {
    setOpen(!open)
  }

  const ThemeToggleBtn = () => (
    <button
      onClick={toggleTheme}
      className="btn btn-sm theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <IconifyIcon
        icon={theme === 'light' ? 'feather:moon' : 'feather:sun'}
        width={24}
        height={24}
      />
    </button>
  )


  return (
    <nav className={`navbar navbar-expand-lg fixed-top sticky ${isDark && 'light-active'} ${scrollY > 80 && 'nav-sticky'}`} id="navbar">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={logoFelipe} alt='Felipe Belmont' height={44} />
        </Link>
        <span className="d-lg-none"><ThemeToggleBtn /></span>
        <Link to="" onClick={toggleMenu} className="navbar-toggler" aria-controls="navbarNav" aria-expanded={open} aria-label="Toggle navigation">
          <span className="navbar-toggle-icon"><IconifyIcon width={24} height={24} icon='feather:menu' /></span>
        </Link>
        <div className={`collapse navbar-collapse ${open && 'show'}`} id="navbarNav">
          <div className="navbar-nav mx-auto navbar-center mt-lg-0 mt-2">
            <li className="nav-item">
              <Link to="/" onClick={() => setOpen(false)} className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Início</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" onClick={() => setOpen(false)} className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>Sobre</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" onClick={() => setOpen(false)} className={`nav-link ${pathname === '/services' ? 'active' : ''}`}>Serviços</Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" onClick={() => setOpen(false)} className={`nav-link ${pathname === '/resume' ? 'active' : ''}`}>Currículo</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" onClick={() => setOpen(false)} className={`nav-link ${pathname === '/projects' ? 'active' : ''}`}>Projetos</Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" onClick={() => setOpen(false)} className={`nav-link ${pathname === '/blogs' ? 'active' : ''}`}>Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/certifications" onClick={() => setOpen(false)} className={`nav-link ${pathname === '/certifications' ? 'active' : ''}`}>Certificações</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" onClick={() => setOpen(false)} className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contato</Link>
            </li>
          </div>
          <a href="/curriculo-felipe-belmont.pdf" download className="btn btn-sm nav-btn text-primary mb-4 mb-lg-0">
            Baixar CV <IconifyIcon icon='feather:download' className="icon-xxs ms-1" />
          </a>
          <span className="d-none d-lg-inline-flex ms-2"><ThemeToggleBtn /></span>
        </div>
      </Container>
    </nav>
  )
}

export default TopNavbar
