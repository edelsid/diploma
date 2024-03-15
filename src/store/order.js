import { createSlice } from "@reduxjs/toolkit";

const order = createSlice({
  name: 'orderData',
  initialState: {
    tickets: [],
    passengers: [],
    payment: '',
  },
  reducers: {

  }
});

export default order.reducer;