import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './components/Player'
import SongList from './components/SongList'
import AddSongForm from './components/AddSongForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Player />
        <SongList />
        <AddSongForm />
      </div>
    </>
  )
}

export default App
