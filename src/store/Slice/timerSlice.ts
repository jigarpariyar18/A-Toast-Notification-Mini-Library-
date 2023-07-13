import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimerState {
  value: number;
}

const initialState: TimerState = {
  value: 7000,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    timers: (state,action) => {
        
      state.value=action.payload*1000;
    }
  },
});

export const { timers } = timerSlice.actions;
export default timerSlice.reducer;
