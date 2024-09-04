import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {symboleApi} from './services/symbolRtkService';
import symboleReducer from './symboleSlice'; // Import the game slice
import persistReducer, {PersistPartial} from 'redux-persist/es/persistReducer';
import leaderboardReducer, {LeaderboardState} from './leaderboardSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whiteList: ['game', 'leaderboard'],
};

export const store = configureStore({
  reducer: {
    game: persistReducer(persistConfig, symboleReducer),
    leaderboard: persistReducer(persistConfig, leaderboardReducer),
    [symboleApi.reducerPath]: symboleApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }).concat([symboleApi.middleware]),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
