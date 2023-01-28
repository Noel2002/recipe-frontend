import React from 'react';
import styles from './navbar.module.css';
import Logo from '../../Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const NavigationBar = () => {
    const [isCollapse, setIsCollapse] = useState(false);
    const toggleCollapse = ()=>{
        setIsCollapse(!isCollapse);
    }
  return (
    <nav className={`${styles.root}`}>
        <Logo />
        <div className={`${styles["links-wrapper"]} ${isCollapse?"":styles["hide"]}`}>
            <ul role={'list'} className={`${styles['links-list']}`}>

                <span 
                    className={`${styles["nav-icon"]}`} 
                    role="close"
                    onClick={toggleCollapse}
                >
                    <FontAwesomeIcon icon={faClose} />
                </span>

                <li>Home</li>
                <li>Breakfast</li>
                <li>lunch</li>
                <li>Dinner</li>
                <li>drinks</li>
                <li>contacts</li>
            </ul>
        </div>
        
        <span 
            className={`${styles["nav-icon"]}`} 
            role="open"
            onClick={toggleCollapse}

        >
            <FontAwesomeIcon icon={faBars} />
        </span>
    </nav>
  )
}

export default NavigationBar