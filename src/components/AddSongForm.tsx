import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { addSong } from '../features/playlist/playlistSlice';


function AddSongForm() {


    const dispatch = useAppDispatch();
    const songs = useAppSelector((state) => state.playlist.songs);
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');

    const handleSubmit = () => {
        let song = {id: Math.floor(Date.now() * 100),  title, artist, isFavorite: false};
        dispatch(addSong(song));
        setTitle('');
        setArtist('');
    }


    return (
        <>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <h1>Ajouter une chanson</h1>
                    <span>Titre: <input name="title" value={title} onChange={(e)=>setTitle(e.target.value)} /></span>
                    <span>Artiste: <input name="artist" value={artist} onChange={(e)=>setArtist(e.target.value)} /> <button>Ajouter à la Playist</button>  </span>
                </form>
            </div>
        </>
    )
}

export default AddSongForm;