import React from 'react';
import styles from './header.module.css';
import NavigationBar from '../../../features/NavigationBar/NavigationBar';
import Hero from './Hero/Hero';

const Header = () => {
  return (
    <div className={`${styles.root}`}>
        <div className={`${styles["header-wrapper"]} container mini-section`}>
            <NavigationBar theme='light' />
            <Hero />
            
        </div>
    </div>
  )
}

export default Header