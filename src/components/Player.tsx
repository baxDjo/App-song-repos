import React from "react";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import {
  selectCurrentSong,
  selectCurrentIndex,
  selectCount,
  nextSong,
  prevSong,
  toggleFavorite,
  removeSong,
  clearPlaylist,
} from '../features/playlist/playlistSlice';

export default function Player() {
  const dispatch = useAppDispatch();
  const current = useAppSelector(selectCurrentSong);
  const idx = useAppSelector(selectCurrentIndex);
  const count = useAppSelector(selectCount);

  const hasSong = !!current;

  return (
    <section>
      <h2>🎵 Player</h2>

      {!hasSong ? (
        <p>Aucune chanson en cours.</p>
      ) : (
        <div>
          <div>
            <strong>{current.title}</strong> — {current.artist}
            <button
              onClick={() => dispatch(toggleFavorite(current.id))}
              aria-label="Basculer favori"
              title="Basculer favori"
            >
              {current.isFavorite ? "💔" : "❤️"}
            </button>
            <button
              onClick={() => dispatch(removeSong(current.id))}
              aria-label="Supprimer la chanson courante"
              title="Supprimer"
            >
              🗑️
            </button>
          </div>

          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button
              onClick={() => dispatch(prevSong())}
              disabled={!hasSong || count === 0}
              aria-label="Précédent"
              title="Précédent"
            >
              ⏮
            </button>
            <span>
              {idx + 1}/{count}
            </span>
            <button
              onClick={() => dispatch(nextSong())}
              disabled={!hasSong || count === 0}
              aria-label="Suivant"
              title="Suivant"
            >
              ⏭
            </button>
          </div>
        </div>
      )}

      <div style={{ marginTop: 8 }}>
        <button
          onClick={() => dispatch(clearPlaylist())}
          disabled={count === 0}
          title="Vider la playlist"
        >
          Vider la playlist
        </button>
      </div>
    </section>
  );
}
