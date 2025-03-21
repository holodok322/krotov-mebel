import React, { useState, useEffect, useRef } from 'react';
import styles from './ModelsPanel.module.css';
import parse from 'html-react-parser';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ModelsPanel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [displayedSlide, setDisplayedSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const titleRef = useRef(null);
  const contentTitleRef = useRef(null);
  const contentSubtitleRef = useRef(null);
  const contentSubtitleRef2 = useRef(null);
  const imageRef = useRef(null);
  
  const environmentalData = [
    {
      id: "1",
      title: "Чили",
      contentTitle: "от 2480 рублей (с НДС)",
      contentSubtitle: "<h>· Проекционный размер изделия:</h> <p>- Длинна 495мм;</p> <p>- Ширина 550мм;</p> <p>- Высота 810мм;</p> <h>· Ножки разборные:</h> <p>- Труба редуцированная;</p> <p>- Диаметр 32мм;</p> <p>- Толщина металла 1.2мм;</p> <p>- Покрытие - порошковая краска;</p> <p>- Цвет черный;</p>",
      contentSubtitle2: " <h>· Каркас стула:</h> <p>- Березовая гнутоклееная фанера;</p> <p>- Толщина 10.5мм</p> <h>· Мягкое наполнение:</h> <p>- ППУ марки ST2236;</p> <p>- Толщина 30 / 10 мм;</p> <h>· Ткань</h> <p>- мебельный велюр Velutto:</p> <p>- Velutto 06;</p> <p>- Velutto 23;</p> <p>- Velutto 32;</p> ",
      image: "./models/model_chill.png"
    },
    {
      id: "2",
      title: "Релакс",
      contentTitle: "от 2990 рублей (с НДС)",
      contentSubtitle: "<h>· Проекционный размер изделия:</h> <p>- Длинна 440мм;</p> <p>- Ширина 530мм;</p> <p>- Высота 810мм;</p> <h>· Ножки цельносварные:</h> <p>- Труба редуцированная;</p> <p>- Диаметр 22мм;</p> <p>- Толщина металла 1.2мм;</p> <p>- Покрытие - порошковая краска;</p> <p>- Цвет черный;</p> ",
      contentSubtitle2: "<h>· Каркас стула:</h> <p>- Березовая гнутоклееная фанера;</p> <p>- Толщина 10.5мм</p> <h>· Мягкое наполнение:</h> <p>- ППУ марки ST1825;</p> <p>- Толщина 20 / 10 мм;</p> <h>· Ткань</h> <p>- мебельный велюр Aloba:</p> <p>- New Gray;</p> <p>- New Latte;</p> <p>- New Dark Brown;</p>",
      image: "./models/model_relaks.png"
    }
  ];
  
  useEffect(() => {
    fadeIn();
  },[]);

  useEffect(() => {
    // Установка атрибута data для перехода фона
    document.documentElement.setAttribute('data-sld', activeSlide);
    
    if (activeSlide !== displayedSlide) {
      setIsAnimating(true);
      
      // Сначала полностью скрываем текущие элементы
      fadeOut();
      
      // После полного исчезновения обновляем контент и начинаем анимацию появления
      setTimeout(() => {
        setDisplayedSlide(activeSlide);
        
        // Небольшая задержка для обновления DOM
        setTimeout(() => {
          fadeIn();
          setIsAnimating(false);
        }, 50);
      }, 500); // Полная продолжительность анимации исчезновения
    }
  }, [activeSlide, displayedSlide]);
  
  // Полное исчезновение
  const fadeOut = () => {
    if (titleRef.current) {
      titleRef.current.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      titleRef.current.style.opacity = '0';
      titleRef.current.style.transform = 'translateY(20px)';
    }
    
    if (contentTitleRef.current) {
      contentTitleRef.current.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      contentTitleRef.current.style.opacity = '0';
      contentTitleRef.current.style.transform = 'translateY(20px)';
    }
    
    if (contentSubtitleRef.current) {
      contentSubtitleRef.current.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      contentSubtitleRef.current.style.opacity = '0';
      contentSubtitleRef.current.style.transform = 'translateY(20px)';
    }

    if (contentSubtitleRef2.current) {
      contentSubtitleRef2.current.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      contentSubtitleRef2.current.style.opacity = '0';
      contentSubtitleRef2.current.style.transform = 'translateY(20px)';
    }
    
    if (imageRef.current) {
      imageRef.current.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      imageRef.current.style.opacity = '0';
      imageRef.current.style.transform = 'scale(0.9)';
    }
  };
  
  // Анимация появления
  const fadeIn = () => {
    if (titleRef.current) {
      titleRef.current.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      titleRef.current.style.opacity = '1';
      titleRef.current.style.transform = 'translateY(0)';
    }
    
    if (contentTitleRef.current) {
      contentTitleRef.current.style.transition = 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s';
      contentTitleRef.current.style.opacity = '1';
      contentTitleRef.current.style.transform = 'translateY(0)';
    }
    
    if (contentSubtitleRef.current) {
      contentSubtitleRef.current.style.transition = 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s';
      contentSubtitleRef.current.style.opacity = '1';
      contentSubtitleRef.current.style.transform = 'translateY(0)';
    }

    if (contentSubtitleRef2.current) {
      contentSubtitleRef2.current.style.transition = 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s';
      contentSubtitleRef2.current.style.opacity = '1';
      contentSubtitleRef2.current.style.transform = 'translateY(0)';
    }
    
    if (imageRef.current) {
      imageRef.current.style.transition = 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s';
      imageRef.current.style.opacity = '1';
      imageRef.current.style.transform = 'scale(1)';
    }
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setActiveSlide(prev => (prev === 0 ? environmentalData.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    if (isAnimating) return;
    setActiveSlide(prev => (prev === environmentalData.length - 1 ? 0 : prev + 1));
  };
  
  const currentSlide = environmentalData[displayedSlide];
  
  return (
    <>
      <div className={styles.header}>
      Модели:
      </div>
      <div className={styles.container}>
        <div className={styles.main} id={currentSlide.id}>
          <div className={styles.leftSide}>
            <div className={styles.mainWrapper}>
              <h1 className={styles.mainTitle} ref={titleRef}>{currentSlide.title}</h1>
            </div>
            <div className={styles.mainContent}>
              <div className={styles.mainContentTitle} ref={contentTitleRef}>{currentSlide.contentTitle}</div>
              <div className={styles.contentSubtitles}>
                <div className={styles.mainContentSubtitle} ref={contentSubtitleRef}>{ parse(currentSlide.contentSubtitle)}</div>
                <div className={styles.mainContentSubtitle} ref={contentSubtitleRef2}>{ parse(currentSlide.contentSubtitle2)}</div>
              </div>
              
            </div>
          </div>
          <div className={styles.center}>
            <div className={styles.rightSideImg}>
              <img className={styles.image} ref={imageRef} src={currentSlide.image} alt={currentSlide.title} />
            </div>
          </div>
        </div>
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
      </div>
    </>
    
  );
};

export default ModelsPanel;