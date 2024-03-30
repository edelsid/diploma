import { createSlice } from "@reduxjs/toolkit";

const generateID = (chars, length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const route = localStorage.getItem('route') != null ? JSON.parse(localStorage.getItem('route')) : {};
const seats_to = localStorage.getItem('seats_to') != null ? JSON.parse(localStorage.getItem('seats_to')) : [];
const seats_back = localStorage.getItem('seats_back') != null ? JSON.parse(localStorage.getItem('seats_back')) : [];
const services_to = localStorage.getItem('services_to') != null ? JSON.parse(localStorage.getItem('services_to')) : [];
const services_back = localStorage.getItem('services_back') != null ? JSON.parse(localStorage.getItem('services_back')) : [];
const passengers = localStorage.getItem('passengers') != null ? JSON.parse(localStorage.getItem('passengers')) : [];
const payment = localStorage.getItem('payment') != null ? JSON.parse(localStorage.getItem('payment')) : {};
const id = localStorage.getItem('id') != null ? JSON.parse(localStorage.getItem('id')) : ""

const setStorage = (name, state) => {
  localStorage.setItem(name, JSON.stringify(state));
};

const initialState = {
  id,
  route,
  seats: [{
    name: "Взрослых",
    codename: 'adult',
    count: 0,
  }, {
    name: "Детских",
    codename: 'children',
    count: 0,
  }, {
    name: `Детских "без места"`,
    codename: 'noseat',
    count: 0,
  }],
  seatsBack: [{
    name: "Взрослых",
    codename: 'adult',
    count: 0,
  }, {
    name: "Детских",
    codename: 'children',
    count: 0,
  }, {
    name: `Детских "без места"`,
    codename: 'noseat',
    count: 0,
  }],
  places: {
    to: seats_to,
    back: seats_back,
  },
  services: {
    to: services_to,
    back: services_back,
  },
  passengers,
  payment,
};

const order = createSlice({
  name: 'orderData',
  initialState,
  reducers: {
    addRoute(state, action) {
      state.route = action.payload.item;
      state.id = generateID("0123456789", 3)+generateID("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 2);
      setStorage('route', state.route);
      setStorage('id', state.id);
    },
    changeSeats(state, action) {
      const data = action.payload.data;

      if (action.payload.back) {
        const found = state.places.back.find(e => e.item === data.item && e.vagon === data.vagon);
        const category = state.seatsBack.find(e => e.codename === data.category);

        if (found) {
          const index = state.places.back.indexOf(found);
          state.places.back.splice(index, 1);
          category.count -= 1;
          setStorage('seats_back', state.places.back);
          return;
        } else {
          state.places.back.push(data);
          category.count += 1;
          setStorage('seats_back', state.places.back);
          return;
        }
      }

      const found = state.places.to.find(e => e.item === data.item && e.vagon === data.vagon);
      const category = state.seats.find(e => e.codename === data.category);
      if (found) {
        const index = state.places.to.indexOf(found);
        state.places.to.splice(index, 1);
        category.count -= 1;
        setStorage('seats_to', state.places.to);
        return;
      }
      state.places.to.push(data);
      category.count += 1;
      setStorage('seats_to', state.places.to);
    },
    changeServices(state, action) {
      const service = action.payload.service;

      if (action.payload.back) {
        const found = state.services.back.find(e => e.name === service.name);
        if (found) {
          const index = state.services.back.indexOf(found);
          state.services.back.splice(index, 1);
          setStorage('services_back', state.services.back);
          return;
        } else {
          state.services.back.push(service);
          setStorage('services_back', state.services.back);
          return;
        }
      }

      const found = state.services.to.find(e => e.name === service.name);
      if (found) {
        const index = state.services.to.indexOf(found);
        state.services.to.splice(index, 1);
        setStorage('services_to', state.services.to);
        return;
      }
      state.services.to.push(service);
      setStorage('services_to', state.services.to);
    },
    addPassenger(state, action) {
      const found = state.passengers.find(e => e.id === action.payload.formData.id);
      if (!found) state.passengers.push(action.payload.formData);
      setStorage('passengers', state.passengers);
    },
    clearPassenger(state, action) {
      state.passengers = state.passengers.filter((item) => item.id !== action.payload.id);
      setStorage('passengers', state.passengers);
    },
    clearAll() {
      localStorage.clear();
      return initialState;
    },
    clearAllSeats(state) {
      state.seats.forEach((item) => item.count = 0);
      state.seatsBack.forEach((item) => item.count = 0);
      state.places = {
        to: [],
        back: [],
      };
      state.services = {
        to: [],
        back: [],
      };
      localStorage.removeItem('seats_to');
      localStorage.removeItem('seats_back');
      localStorage.removeItem('services_to');
      localStorage.removeItem('services_back');
    },
    clearPresentSeats(state, action) {
      if (action.payload.back) {
        state.seatsBack.forEach((item) => item.count = 0);
        state.places.back = [];
        state.services.back = [];
        localStorage.removeItem('services_back');
        localStorage.removeItem('seats_back');
        return;
      }
      state.seats.forEach((item) => item.count = 0);
      state.places.to = [];
      state.services.to = [];
      localStorage.removeItem('services_to');
      localStorage.removeItem('seats_to');
    },
    addPaymentInfo(state, action) {
      state.payment = action.payload.formData;
      setStorage('payment', state.payment);
    },
    clearPaymentInfo(state) {
      state.payment = {};
      localStorage.removeItem('payment');
    },
  }
});

export const { 
  addRoute, 
  changeSeats, 
  changeServices, 
  clearAll, 
  clearAllSeats, 
  clearPresentSeats, 
  addPassenger, 
  clearPassenger, 
  addPaymentInfo, 
  clearPaymentInfo } = order.actions;
export default order.reducer;