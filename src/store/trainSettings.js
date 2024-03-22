import { createSlice } from "@reduxjs/toolkit";

const remainingSittingSeats = Array.from({length: 16}, (_, i) => (i*2) + 33);
remainingSittingSeats.splice(15, 1, 62);

const trainSettings = createSlice({
  name: 'trainSettingsData',
  initialState: {
    seatNumbers: {
      highSeats: Array.from({length: 16}, (_, i) => (i+1) * 2),
      lowSeats: Array.from({length: 16}, (_, i) => ((i+1)*2) - 1),
      sideSeats: Array.from({length: 16}, (_, i) => (i+32) + 1),
      firstClassSeats: Array.from({length: 16}, (_, i) => i+1),
      sittingSeats: Array.from({length: 14}, (_, i) => (i*2) + 34),
      remainingSittingSeats: remainingSittingSeats,
    },
    choosingWithYou: Math.floor(Math.random() * 11) + 1,
    
  },
});

export default trainSettings.reducer;