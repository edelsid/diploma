import { createSlice } from "@reduxjs/toolkit";
import ekat from '../assets/photos/ekat.png';
import evg from '../assets/photos/evg.png';

const site = createSlice({
  name: 'siteData',
  initialState: {
    date: Date.now(),
    socials: ['yt', 'in', 'google', 'fb', 'tw'],
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
      adress: 'г. Москва, ул. Московская 27-35 555 555'
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
  }
});

export default site.reducer;