
import React,{useState} from 'react';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logonew.png'

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <nav className={styles.navbar}>
    <div className={styles.logo}><img src={logo}></img></div>
    <ul className={`${styles.navItems} ${menuActive ? styles.active : ''}`}>
        <li><a href="#home">Products</a></li>
        <li><a href="#home">Enterprise</a></li>
        <li><a href="#home">Free Trails</a></li>
        <li><a href="#home">Pricing</a></li>
        <li><a href="#about">Support & learning</a></li>
        <li><a href="#services">About Us</a></li>
        <li><a href="#Search"><button className={styles.search}> <FontAwesomeIcon icon={faSearch} /></button></a></li>
        <li><a href="#services">Your Profile</a></li>
        <li><a href="#services">Telerik Platform</a></li>
      </ul>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
