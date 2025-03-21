import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './Slider.module.css';

const Slider = () => {

    const initialSlides = [
        
        {
          id: 1,
          title: "Цех обивки и пошива изделий",
          description: "Отвечает за контроль качества обивки и швов, соединяющих ткани. Что позволяет создавать удобные и комфортные стулья для клиентов с учётом всех необходимых требований. Это делает заготовку прочной и точной в геометрических параметрах.",
          image: "./tools/s7.png"
        },
        {
          id: 2,
          title: "Цех сварки ножек",
          description: "Наличие цеха позволяет нам полноценно контролировать качество швов сварки. Благодаря этому мы можем обеспечить высокое качество и надежность изделия",
          image: "./tools/s1.png"
        },
        {
          id: 3,
          title: "Цех порошковой окраски",
          description: "Обеспечивает котроль над качеством нанесения краски и текстуры на металлические каркасы стульев, что предотвращает коррозию металла и улучшает его свойства",
          image: "./tools/s2.png"
        },
        {
          id: 4,
          title: "Цех изготовления шпона",
          description: "Позволяет отобрать только качественные материалы для изготовления изделия и проконтролировать процесс склеивания материалов с различными типами обивки. Это делает заготовку прочной и точной в геометрических параметрах",
          image: "./tools/s3.png"
        },
        {
          id: 5,
          title: "Цех прессования ТВЧ",
          description: "Применение технологии ТВЧ - прессования гнутоклееных заготовок, позволяет обеспечить высокую прочность, надежность и долговечность конечного продукта, а также позволяет формировать сложные и точные геометрические формы",
          image: "./tools/s4.png"
        },
        {
          id: 6,
          title: "Цех изготовления гнутоклееных заготовок",
          description: "Заготовки проходят обработку на 5-ти координатном станке. Данный способ обработки изделия позволяет точно отработать геометрию и сохранить жесткость изделия",
          image: "./tools/s5.png"
        },
        {
          id: 7,
          title: "Цех лазерной резки",
          description: "Использует технологию, которая обеспечивает быстрое и качественное разрезание ткани. После воздействия лазерного луча ткань не осыпается, и края становятся ровными. Благодаря этому мы можем вырезать даже мелкие детали",
          image: "./tools/s6.png"
        }];

    const [slides, setSlides] = useState(initialSlides);
    const timeoutRef = useRef(null);
    const [autoChangeInterval, setAutoChangeInterval] = useState(5000); // 5 секунд по умолчанию

    const useWindowSize = () => {
      const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
      });
    
      useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      return windowSize;
    };
    const { width } = useWindowSize();

    const getItemStyles = (index) => {
      const baseStyles = {
        backgroundImage: `url(${slides[index].image})`,
      };
      
      // Стили для первых двух слайдов (активных)
      if (index === 0 || index === 1) {
        return {
          ...baseStyles,
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          transform: 'none',
          borderRadius: 0,
          boxShadow: 'none',
          opacity: 1
        };
      }

      if (width > 900) {
        // Десктоп
        if (index === 2) return { ...baseStyles, left: '50%' };
        if (index === 3) return { ...baseStyles, left: 'calc(50% + 220px)' };
        if (index === 4) return { ...baseStyles, left: 'calc(50% + 440px)' };
        return { ...baseStyles, left: 'calc(50% + 660px)', opacity: 0 };
      } else if (width > 650) {
        // Планшет
        if (index === 2) return { ...baseStyles, left: '15%' };
        if (index === 3) return { ...baseStyles, left: 'calc(15% + 220px)' };
        if (index === 4) return { ...baseStyles, left: 'calc(15% + 440px)' };
        return { ...baseStyles, left: 'calc(15% + 660px)', opacity: 0 };
      } else {
        // Мобильный
        if (index === 2) return { ...baseStyles, left: '15%' };
        if (index === 3) return { ...baseStyles, left: 'calc(15% + 150px)' };
        if (index === 4) return { ...baseStyles, left: 'calc(15% + 300px)' };
        return { ...baseStyles, left: 'calc(15% + 450px)', opacity: 0 };
      }
    };

    // Функция для перемещения слайдов вперед
    const handleNext = (userInitiated = false) => {
      setSlides(prevSlides => {
        const newSlides = [...prevSlides];
        newSlides.push(newSlides.shift());
        return newSlides;
      });
  
      // Если пользователь сам переключил слайд, увеличиваем интервал
      if (userInitiated) {
        setAutoChangeInterval(30000); // 15 секунд после взаимодействия пользователя
      }
    };
  
    // Функция для перемещения слайдов назад
    const handlePrev = () => {
      setSlides(prevSlides => {
        const newSlides = [...prevSlides];
        newSlides.unshift(newSlides.pop());
        return newSlides;
      });
      
      // Пользователь сам переключил слайд, увеличиваем интервал
      setAutoChangeInterval(30000); // 15 секунд после взаимодействия пользователя
    };
  
    // Эффект для автоматического переключения слайдов
    useEffect(() => {
      // Очищаем предыдущий таймер
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Устанавливаем новый таймер
      timeoutRef.current = setTimeout(() => {
        handleNext(false);
        setAutoChangeInterval(10000); // Возвращаем обычный интервал
      }, autoChangeInterval);
      
      // Очищаем таймер при размонтировании компонента
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }, [slides, autoChangeInterval]);
  
    return (
      <main className={styles.main}>
        <ul className={styles.slider}>
          {slides.map((slide, index) => (
            <li
              key={slide.id}
              className={styles.item}
              style={getItemStyles(index)}
            >
              <div className={`${styles.content} ${index === 1 ? styles.activeContent : ''}`}>
                <h2 className={styles.title}>{slide.title}</h2>
                <p className={styles.description}>{slide.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <nav className={styles.nav}>
          <button 
            className={`${styles.btn} ${styles.prev}`} 
            onClick={() => handlePrev()}
          >
            <ArrowLeft />
          </button>
          <button 
            className={`${styles.btn} ${styles.next}`} 
            onClick={() => handleNext(true)}
          >
            <ArrowRight />
          </button>
        </nav>
      </main>
    );
  };

export default Slider;