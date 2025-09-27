// src/features/playlist/playlistSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export type Song = {
  id: number;
  title: string;
  artist: string;
  isFavorite: boolean;
};

export type PlaylistState = {
  songs: Song[];
  currentIndex: number; // -1 si aucune chanson en cours
};

const initialState: PlaylistState = {
  songs: [],
  currentIndex: -1,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    addSong(state, action: PayloadAction<Song>) {
      // TODO: ajouter la chanson en fin de liste
      initialState.songs.push(action.payload);
      // TODO: si c’est la première → currentIndex = 0
      if (initialState.songs.length == 1){
        initialState.currentIndex = 0;
      }
    },
    removeSong(state, action: PayloadAction<number>) {
      // TODO: supprimer la chanson par id
      const itemId = action.payload;
      initialState.songs = initialState.songs.filter(item => item.id !== itemId);
      // TODO: ajuster currentIndex
    },
    nextSong(state) {
      // TODO: avancer currentIndex (boucler si fin)
      var currentIndex = initialState.currentIndex++;
      initialState.songs.at(currentIndex);

    },
    prevSong(state) {
      // TODO: reculer currentIndex (boucler si début)
      var previousIndex = initialState.currentIndex--;
      initialState.songs.at(previousIndex);
    },
    toggleFavorite(state, action: PayloadAction<number>) {
      // TODO: inverser isFavorite pour la chanson ciblée
        var isFavoriteCurrent = initialState.songs.at(action.payload)?.isFavorite;
        isFavoriteCurrent = !isFavoriteCurrent;
        

    },
    setCurrentById(state, action: PayloadAction<number>) {
      // TODO: définir currentIndex en fonction de l’id
      var currentIndex = initialState.songs.at(action.payload)?.id;
      
    },
    clearPlaylist(state) {
      // TODO: vider la liste et currentIndex = -1
      initialState.songs.length = 0;
      initialState.currentIndex = -1;
    },
  },
});

export const {
  addSong,
  removeSong,
  nextSong,
  prevSong,
  toggleFavorite,
  setCurrentById,
  clearPlaylist,
} = playlistSlice.actions;

// Sélecteurs pratiques
export const selectSongs = (state: { playlist: PlaylistState }) => state.playlist.songs;
export const selectCurrentIndex = (state: { playlist: PlaylistState }) => state.playlist.currentIndex;
export const selectCurrentSong = (state: { playlist: PlaylistState }) => 
  state.playlist.songs[state.playlist.currentIndex];
export const selectFavorites = (state: { playlist: PlaylistState }) =>
  state.playlist.songs.filter((s) => s.isFavorite);

export const selectCount = (state: { playlist: PlaylistState }) => { return state.playlist.songs.length };

export const selectFilteredSongs = (state: { playlist: PlaylistState }, filter: string) => { state.playlist.songs.filter(item => item.title === filter) };

export default playlistSlice.reducer;