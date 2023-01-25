import React from 'react';
import styles from './footer.module.css';
import Section from '../../components/Section/Section';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <Section className="bg-primary-light">
        <div className={`${styles.root}`}>
            <div className={`${styles['footer-card']} pb-20`}>
                <Logo />
                <p className={`paragraph mt-20`}>
                    Lorem ipsum dolor sit amet. Qui odio placeat qui inventore officiis ea cupiditate dolores. Ea iure suscipit qui perspiciatis quos quo doloribus aperiam.
                </p>
            </div>
        </div>
    </Section>
  )
}

export default Footer