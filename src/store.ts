// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from './features/playlist/playlistSlice';


export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
  },
  // devTools est true par défaut en dev, vous pouvez le laisser implicite
});

// Types utilitaires pour vos hooks typés
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

