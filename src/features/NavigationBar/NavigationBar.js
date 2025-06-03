import React from 'react';
import styles from './navbar.module.css';
import Logo from '../Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = (props) => {
    const [isCollapse, setIsCollapse] = useState(false);
    const toggleCollapse = ()=>{
        setIsCollapse(!isCollapse);
    }
  return (
    <nav className={`${styles.root} ${'clr-txt-' + props.theme}`}>
        <Link to={"/"}> <Logo /> </Link>
        <div className={`${styles["links-wrapper"]} ${isCollapse?"":styles["hide"]}`}>
            <ul role={'list'} className={`${styles['links-list']} list-none`}>

                <span 
                    className={`${styles["nav-icon"]}`} 
                    role="close"
                    onClick={toggleCollapse}
                >
                    <FontAwesomeIcon icon={faClose} />
                </span>

                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/breakfast"}><li>Breakfast</li></Link>
                <Link to={"/lunch"}><li>lunch</li></Link>
                <Link to={"/dinner"}><li>Dinner</li></Link>
                <Link to={"/drinks"}><li>drinks</li></Link>
                <Link to={"/contacts"}><li>contacts</li></Link>
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