import React from 'react';
import styles from './Header.module.css';
import bannerImage from '../assets/resume_builder_banner.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.bannerContainer}>
        <img src={bannerImage} alt="Resume Builder" className={styles.banner} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Craft Your Perfect Resume</h1>
        <p className={styles.subtitle}>Transform Your Career Journey with Our Professional Resume Builder</p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <i className="fi fi-rr-document"></i>
            <span>Professional Templates</span>
          </div>
          <div className={styles.feature}>
            <i className="fi fi-rr-cloud-download"></i>
            <span>Easy Download</span>
          </div>
          <div className={styles.feature}>
            <i className="fi fi-rr-edit"></i>
            <span>Simple Editing</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
