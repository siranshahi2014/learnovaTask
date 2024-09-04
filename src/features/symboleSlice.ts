import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
import {symboleApi} from './services/symbolRtkService';

interface GameState {
  cards: SymboleCard[];
  selectedCards: number[];
  moves: number;
  time: number;
  isGameOver: boolean;
}

const initialState: GameState = {
  cards: [],
  selectedCards: [],
  moves: 0,
  time: 0,
  isGameOver: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<SymboleCard[]>) => {
      state.cards = action.payload;
    },
    flipCard: (state, action: PayloadAction<number>) => {
      const card = state.cards.find(card => card.id === action.payload);
      if (card && !card.isMatched) {
        card.isFlipped = !card.isFlipped;
        state.selectedCards.push(card.id);
      }
    },
    checkMatch: state => {
      const flippedCards = state.cards.filter(
        card => card.isFlipped && !card.isMatched,
      );
      if (flippedCards.length === 2) {
        state.moves += 1;
        if (flippedCards[0].symbol === flippedCards[1].symbol) {
          flippedCards.forEach(card => (card.isMatched = true));
          if (state.cards.every(card => card.isMatched)) {
            state.isGameOver = true;
          }
        } else {
          flippedCards.forEach(card => (card.isFlipped = false));
        }
      }
    },
    incrementTime: state => {
      state.time += 1;
    },
    setGameOver: state => {
      state.isGameOver = true;
    },
    resetGame: state => {
      state.cards = [];
      state.selectedCards = [];
      state.moves = 0;
      state.time = 0;
      state.isGameOver = false;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      symboleApi.endpoints.getSymbols.matchFulfilled,
      (state, {payload}) => {
        if (payload) {
          const concatList = payload.concat(payload);
          const randomList = concatList.sort(() => Math.random() - 0.5);

          const result = randomList.map((item, index) => ({
            id: index,
            symbol: item.symbol,
            isFlipped: false,
            isMatched: false,
          }));
          state.cards = result;
        } else {
          state.cards = [];
        }
      },
    );
  },
});

export const {
  setCards,
  flipCard,
  checkMatch,
  incrementTime,
  setGameOver,
  resetGame,
} = gameSlice.actions;

export const selectCards = (state: RootState) => state.game.cards;
export const selectIsGameOver = (state: RootState) => state.game.isGameOver;
export const selectTime = (state: RootState) => state.game.time;
export const selectMoves = (state: RootState) => state.game.moves;

export default gameSlice.reducer;
