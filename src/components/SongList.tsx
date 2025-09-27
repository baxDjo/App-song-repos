import { useAppSelector } from "../App/hooks";
import { selectSongs, toggleFavorite } from "../features/playlist/playlistSlice";
import { useAppDispatch } from "../App/hooks";


function SongList() {

    const songs = useAppSelector(selectSongs);
    const dispatch = useAppDispatch();
    return (
        <>
            <div>
                <ul>
                    {songs.map(song => (
                        <li key={song.id}>
                            {song.title} - {song.artist}
                            <button onClick={() => dispatch(toggleFavorite(song.id))}>
                                ❤️
                            </button>
                        </li>
                    ))}
                </ul>


            </div>
        </>
    )
}

export default SongList;