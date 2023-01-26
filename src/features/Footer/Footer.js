import React from 'react';
import styles from './footer.module.css';
import Section from '../../components/Section/Section';
import Logo from '../Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Section className="bg-primary-light">
        <div className={`${styles.root}`}>
            <div className={`${styles['footer-card']} pb-20`}>
                <Logo />
                <p className={`paragraph mt-20`}>
                    Lorem ipsum dolor sit amet. Qui odio placeat qui inventore officiis ea cupiditate dolores. Ea iure suscipit qui perspiciatis quos quo doloribus aperiam.
                </p>
                <p className={`${styles["footer-card-title"]} mt-20`}>
                    connect
                </p>
                <div className={`${styles.socials} mt-10`}>
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
            </div>
            <div className={`${styles['footer-card']} pb-20`}>
                <p className={`${styles["footer-card-title"]} mt-20`}>
                    Quick links
                </p>
                <ul role='list' className={`${styles['footer-list']} mt-10`}>
                    <li>Breakfast</li>
                    <li>Dinner</li>
                    <li>Vegetarian</li>
                    <li>Drinks</li>
                    <li>Videos</li>
                </ul>
            </div>
            <div className={`${styles['footer-card']} pb-20`}>
                <p className={`${styles["footer-card-title"]} mt-20`}>
                    company
                </p>
                <ul role='list' className={`${styles['footer-list']} mt-10`}>
                    <li>Privacy Policy</li>
                    <li>Our story</li>
                    <li>Team</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={`${styles['footer-card']} pb-20`}>
                <p className={`${styles["footer-card-title"]} mt-20`}>
                    contacts
                </p>
                <ul role='list' className={`${styles['footer-list']} mt-10`}>
                    <li>(852) 000 000</li>
                    <li>123 Hung Toi, Hong Kong</li>
                    <li>123example@example@gmail.com</li>
                </ul>
            </div>
        </div>
        <center>
            <p className={`${styles['copyright-tag']} paragraph mt-20`}>
                Copyright &#169; 2023 . recipes . All rights reserved
            </p>
        </center>
    </Section>
  )
}

export default Footer