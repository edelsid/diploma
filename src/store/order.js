import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  route: {},
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
    to: [],
    back: [],
  },
  services: {
    to: [],
    back: [],
  },
  passengers: [],
  payment: '',
};

const order = createSlice({
  name: 'orderData',
  initialState,
  reducers: {
    addRoute(state, action) {
      state.route = action.payload.item;
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
          return;
        } else {
          state.places.back.push(data);
          category.count += 1;
          return;
        }
      }

      const found = state.places.to.find(e => e.item === data.item && e.vagon === data.vagon);
      const category = state.seats.find(e => e.codename === data.category);
      if (found) {
        const index = state.places.to.indexOf(found);
        state.places.to.splice(index, 1);
        category.count -= 1;
        return;
      }
      state.places.to.push(data);
      category.count += 1;
    },
    changeServices(state, action) {
      const service = action.payload.service;

      if (action.payload.back) {
        const found = state.services.back.find(e => e.name === service.name);
        if (found) {
          const index = state.services.back.indexOf(found);
          state.services.back.splice(index, 1);
          return;
        } else {
          state.services.back.push(service);
          return;
        }
      }

      const found = state.services.to.find(e => e.name === service.name);
      if (found) {
        const index = state.services.to.indexOf(found);
        state.services.to.splice(index, 1);
        return;
      }
      state.services.to.push(service);
    },
    clearAll: () => initialState,
    clearAllSeats(state) {
      state.seats.forEach((item) => item.count = 0);
      state.seatsBack.forEach((item) => item.count = 0);
      state.places = {
        to: [],
        back: false,
      };
      state.services = {
        to: [],
        back: false,
      };
    },
    clearPresentSeats(state, action) {
      if (action.payload.back) {
        state.seatsBack.forEach((item) => item.count = 0);
        state.places.back = [];
        state.services.back = [];
        return;
      }
      state.seats.forEach((item) => item.count = 0);
      state.places.to = [];
      state.services.to = [];
    }
  }
});

export const { addRoute, changeSeats, changeServices, clearAll, clearAllSeats, clearPresentSeats } = order.actions;
export default order.reducer;