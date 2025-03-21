import React from 'react'
import styles from './InfoPanel.module.css';

const InfoPanel = () => {
  return (
    <>
    <div className={styles.header}>
      О нас:
    </div>
    <div className={styles.info} style={{ backgroundImage: `url(./infopage.jpeg)` }} > 
      <div className={styles.textcontainter}>
        Компания "Кротов Мебель", является дочерней компанией ООО "МебельКом Урал".<br />
        Компания работает на российском рынке уже более 8 лет и предлогает высококачественную:<br />
        - Корпусную мебель<br />
        - Мягкую мебель<br />
        - Металлическую мебель<br />
        - Мебель для офисов<br />
        - Мебель для образовательных учреждений<br />
        - Мебель для актовых залов<br />
        - Столовые группы<br />
        Уральские традиции надёжности и качества позволили компании стать надёжным партнёром и поставщиком для организации по всей стране.
      </div>
    </div>
    </>
  )
}

export default InfoPanel