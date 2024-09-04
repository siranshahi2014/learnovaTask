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
import gameReducer from './symboleSlice'; // Import the game slice

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage: AsyncStorage,
//   whiteList: ['game'],
// };

export const store = configureStore({
  reducer: {
    [symboleApi.reducerPath]: symboleApi.reducer,
    game: gameReducer,
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
