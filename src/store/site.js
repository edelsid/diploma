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
    scrollHeight: 0,
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
      adress: `г.\u00A0Москва, ул.\u00A0Московская 27-35 555\u00A0555`
    },
    pros: [
      {
        name: 'pc',
        text: 'Удобный заказ на\u00A0сайте'
      },
      {
        name: 'build',
        text: 'Нет необходимости ехать в\u00A0офис'
      },
      {
        name: 'web',
        text: 'Огромный выбор направлений'
      },
    ],
    feedback: [
      {
        name: 'Екатерина Вальнова',
        text: 'Доброжелательные подсказки на\u00A0всех этапах помогут правильно заполнить поля и\u00A0без\u00A0затруднений купить авиа или\u00A0ж/д билет, даже если вы заказываете онлайн билет впервые.',
        portrait: ekat,
      },
      {
        name: 'Евгений Стрыкало',
        text: 'СМС-сопровождение до\u00A0посадки. Сразу после оплаты ж/д билетов и\u00A0за\u00A03\u00A0часа до\u00A0отправления мы пришлем вам СМС-напоминание о поездке.',
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
    }],
    locTable: [{
      count: 2,
      loc: '/passengers',
    }, {
      count: 3,
      loc: '/payment',
    }, {
      count: 4,
      loc: '/accept',
    }],
    paymentOptions: ['Банковской картой', 'PayPal', 'Visa QIWI Wallet'],
    ages: [{
      id: "adult",
      name: "Взрослый",
    }, {
      id: "child",
      name: "Детский",
    }],
    filters: [],
    priceRange: {
      min: 0,
      max: 0,
    },
    timeRange: {
      from: 0,
      to: 24,
    },
    timeRangeBack: {
      from: 0,
      to: 24,
    },
    type: "time",
  },
  reducers: {
    changeFilters(state, action) {
      const found = state.filters.find(e => e === action.payload);
      if (found) {
        const index = state.filters.indexOf(found);
        state.filters.splice(index, 1);
        return;
      }
      state.filters.push(action.payload);
    },
    changePriceRange(state, action) {
      state.priceRange = action.payload;
    },
    changeTimeRange(state, action) {
      if (action.payload.back) {
        state.timeRangeBack = action.payload.range;
        return;
      }
      state.timeRange = action.payload.range;
    },
    changeType(state, action) {
      state.type = action.payload;
    }
  },
});

export const { changeFilters, changePriceRange, changeTimeRange, changeType } = site.actions;
export default site.reducer;