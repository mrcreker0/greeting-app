import React, { useState } from 'react';
import './App.css';

// Импорт индивидуальных фотографий для мамы
import mom1 from './images/mom1.jpg';
import mom from './images/mom.jpg';
import mom2 from './images/mom2.jpg';
import mom3 from './images/mom3.jpg';
import mom4 from './images/mom4.jpg';
import mom5 from './images/mom5.jpg';
import mom6 from './images/mom6.jpg';

// Импорт индивидуальных фотографий для сестры
import sis1 from './images/sis1.jpg';
import sis2 from './images/sis2.jpg';
import sis3 from './images/sis3.jpg';
import sis4 from './images/sis4.jpg';
import sis5 from './images/sis5.jpg';
import sis from './images/sis.jpg';

// Импорт совместных фотографий (укажите свои файлы)
import joint1 from './images/both1.jpg';
import joint2 from './images/both2.jpg';
import joint3 from './images/both3.jpg';
import joint4 from './images/both4.jpg';
import joint5 from './images/both5.jpg';
import joint6 from './images/both6.jpg';
import joint7 from './images/both7.jpg';
import joint from './images/both.jpg';

// Массивы с текстами поздравлений
const momGreetings = [
  "Дорогая мама, желаю тебе крепкого здоровья и нескончаемой радости!",
  "Мама, пусть каждый день приносит тебе свет и тепло!",
  "Ты лучшая мама на свете! Пусть счастье всегда будет рядом.",
  "Мама, пусть каждый день будет ярким и счастливым!",
  "Мама, твоя любовь и забота делают этот мир лучше!",
  "Мама, пусть каждый день будет ярким и счастливым!"
];

const sisGreetings = [
  "Дорогая сестра, пусть каждый миг будет наполнен радостью и улыбками!",
  "Сестра, желаю тебе океан счастья и море удачи!",
  "Ты самая замечательная сестра! Пусть жизнь радует каждый день.",
  "Сестра, пусть твоя жизнь будет полна ярких моментов и вдохновения!",
  "Сестра, пусть ты всегда будешь в центре внимания и любима!"
];

// Общее поздравление для совместного фото
const jointGreeting = "Мама и сестра, поздравляю вас с 8 Марта!";

// Массивы с фотографиями
const momPhotos = [mom1, mom2, mom3, mom, mom4, mom5, mom6];
const sisPhotos = [sis1, sis2, sis3, sis4, sis5, sis];
const jointPhotos = [joint1, joint2, joint3, joint4, joint5, joint6, joint7, joint];

function App() {
  // Состояния для текста поздравлений
  const [momGreetingText, setMomGreetingText] = useState(momGreetings[0]);
  const [sisGreetingText, setSisGreetingText] = useState(sisGreetings[0]);

  // Состояния для индекса фотографии (индивидуальные)
  const [momPhotoIndex, setMomPhotoIndex] = useState(0);
  const [sisPhotoIndex, setSisPhotoIndex] = useState(0);

  // Состояния для совместного фото
  const [jointPhotoIndex, setJointPhotoIndex] = useState(0);
  // Значение null означает, что совместное фото не используется; иначе: "mom" или "sis"
  const [jointBlock, setJointBlock] = useState(null);

  const changeContent = () => {
    // Случайный выбор индивидуальных фотографий
    const newMomIndex = Math.floor(Math.random() * momPhotos.length);
    const newSisIndex = Math.floor(Math.random() * sisPhotos.length);
    setMomPhotoIndex(newMomIndex);
    setSisPhotoIndex(newSisIndex);

    // Случайный выбор поздравлений
    const newMomGreeting = momGreetings[Math.floor(Math.random() * momGreetings.length)];
    const newSisGreeting = sisGreetings[Math.floor(Math.random() * sisGreetings.length)];
    setMomGreetingText(newMomGreeting);
    setSisGreetingText(newSisGreeting);

    // С вероятностью 30% выбираем совместное фото для одного из блоков
    if (Math.random() < 0.3) {
      // Выбираем случайно, в каком блоке показать совместное фото
      const block = Math.random() < 0.5 ? "mom" : "sis";
      setJointBlock(block);
      const newJointIndex = Math.floor(Math.random() * jointPhotos.length);
      setJointPhotoIndex(newJointIndex);
    } else {
      setJointBlock(null);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>С 8 Марта!</h1>
        <p>Поздравления для самых дорогих людей</p>
      </header>
      <section className="greeting">
        {/* Блок для мамы */}
        <div className="card">
          <img
            src={jointBlock === "mom" ? jointPhotos[jointPhotoIndex] : momPhotos[momPhotoIndex]}
            alt="Мама"
          />
          <h2>Маме</h2>
          <p>{jointBlock === "mom" ? jointGreeting : momGreetingText}</p>
        </div>
        {/* Блок для сестры */}
        <div className="card">
          <img
            src={jointBlock === "sis" ? jointPhotos[jointPhotoIndex] : sisPhotos[sisPhotoIndex]}
            alt="Сестра"
          />
          <h2>Сестре</h2>
          <p>{jointBlock === "sis" ? jointGreeting : sisGreetingText}</p>
        </div>
      </section>
      <div className="buttons">
        <button onClick={changeContent}>Сменить поздравления и фото</button>
      </div>
    </div>
  );
}

export default App;
