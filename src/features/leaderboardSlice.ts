import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

export interface LeaderboardItem {
  id: string;
  name: string;
  score: number;
}

export interface LeaderboardState {
  items: LeaderboardItem[];
}

const initialState: LeaderboardState = {
  items: [],
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addEntry(state, action: PayloadAction<LeaderboardItem>) {
      state.items.push(action.payload);
      state.items.sort((a, b) => a.score - b.score);
    },
    clearEntries(state) {
      state.items = [];
    },
  },
});

export const {addEntry, clearEntries} = leaderboardSlice.actions;

export const selectLeaderBoard = (state: RootState) => state.leaderboard;

export default leaderboardSlice.reducer;
