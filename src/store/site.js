import { createSlice } from "@reduxjs/toolkit";
import ekat from '../assets/photos/ekat.png';
import evg from '../assets/photos/evg.png';
import wifi from '../assets/icons/wifi.svg'
import cond from '../assets/icons/cond.svg'
import express from '../assets/icons/express.svg'
import first from '../assets/icons/first.svg'
import second from '../assets/icons/sec.svg'
import third from '../assets/icons/third.svg'
import fourth from '../assets/icons/fourth.svg'
import food from '../assets/icons/food.svg'
import bed from '../assets/icons/bed.svg'
import yt from '../assets/icons/yt.svg'
import inst from '../assets/icons/in.svg'
import fb from '../assets/icons/fb.svg'
import google from '../assets/icons/google.svg'
import tw from '../assets/icons/tw.svg'

const site = createSlice({
  name: 'siteData',
  initialState: {
    date: Date.now(),
    socials: [{
      name: 'yt', 
      img: yt,
    }, {
      name: 'in', 
      img: inst,
    }, {
      name: 'google', 
      img: google,
    }, {
      name: 'fb', 
      img: fb,
    }, {
      name: 'tw', 
      img: tw,
    }],
    menu: [
      {
        name: 'О нас',
        link: '#about',
      },
      {
        name: 'Как это работает',
        link: '#rules',
      },
      {
        name: 'Отзывы',
        link: '#feedback',
      },
      {
        name: 'Контакты',
        link: '#contacts',
      },
    ],
    contacts: {
      tel: '8(800)000 00 00',
      mail: 'inbox@mail.ru',
      skype: 'tu.train.tickets',
      adress: `г. Москва, ул. Московская 27-35 555 555`
    },
    pros: [
      {
        name: 'pc',
        text: 'Удобный заказ на сайте'
      },
      {
        name: 'build',
        text: 'Нет необходимости ехать в офис'
      },
      {
        name: 'web',
        text: 'Огромный выбор направлений'
      },
    ],
    feedback: [
      {
        name: 'Екатерина Вальнова',
        text: 'Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.',
        portrait: ekat,
      },
      {
        name: 'Евгений Стрыкало',
        text: 'СМС-сопровождение до посадки. Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.',
        portrait: evg,
      },
    ],
    services: [{
      name: 'first',
      displayName: 'Люкс',
      img: first,
    }, {
      name: 'second',
      displayName: 'Купе',
      img: second,
    }, {
      name: 'third',
      displayName: 'Плацкарт',
      img: third,
    }, {
      name: 'fourth',
      displayName: 'Сидячий',
      img: fourth,
    }, {
      name: 'food',
      displayName: 'Питание',
      img: food,
    }, {
      name: 'bed',
      displayName: 'Белье',
      img: bed,
    }, {
      name: 'wifi',
      displayName: 'WiFi',
      img: wifi,
    }, {
      name: 'express',
      displayName: 'Экспресс',
      img: express,
    }, {
      name: 'cond',
      displayName: 'Кондиционер',
      img: cond,
    }]
  }
});

export default site.reducer;