import React from 'react'
import styles from './Footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className={styles['footer-section']}>
        <div className="container">
            <div className={`${styles['footer-cta']} pt-5 pb-5`}>
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className={styles['single-cta']}>
                          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" style={{ color: '#c9bbae',  marginTop: '8px' }} />
                            <div className={styles['cta-text']}>
                                <h4>Мы находимся:</h4>
                                <span> г. Екатеринбург, ул. Московская 196</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className={styles['single-cta']}>
                          <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: '#c9bbae',  marginTop: '8px' }}/>
                            <div className={styles['cta-text']}>
                                <h4>Позвоните нам:</h4>
                                <span>+7 922 220-78-57</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className={styles['single-cta']}>
                          <FontAwesomeIcon icon={faEnvelopeOpen} size="2x" style={{ color: '#c9bbae',  marginTop: '8px' }}/>
                            <div className={styles['cta-text']}>
                                <h4>Напишите нам:</h4>
                                <span>krotov-mebel@mail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer