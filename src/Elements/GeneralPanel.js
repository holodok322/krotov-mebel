import React from 'react'
import styles from './GeneralPanel.module.css';

const GeneralPanel = () => {
  return (
    <div className={styles.container}>
        <div className={styles.general}>
            <div className={ `${styles.firstcol} ${styles.col}`}>
                <div className={styles.photo}>
                    <img src='./chili.png' className={styles.image}/>
                </div>
                <div className={styles.photo}>
                    <img src='./stul1.png' className={styles.image}/>
                </div>
            </div>
           
            <div className={ `${styles.twocol} ${styles.col}`}>
                <div className={styles.photo}>
                    <img src='./prestij.png' className={styles.image} />
                </div>
                <div className={styles.photo}>
                    <img src='./stul2.png' className={styles.image}/>
                </div>
            </div>


        </div>
        <div className={styles['name-container']}>
            <div className={styles['name']}>
                ООО «Кротов Мебель»
            </div>
        </div>
    </div>  
  )
}

export default GeneralPanel