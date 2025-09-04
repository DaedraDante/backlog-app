import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1 className='app-title'>Backlog App</h1>
        <div className='game-list-container'>
          <div className='game-list-title'>
            <h2>Game List</h2>
          </div>
          <div className='game-list'>
            <div className='game-card'>
              <h2>Game title</h2>
              <h3>Genre</h3>
              <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg" alt="" />
              <select name="" id="">
                <option value="played">Played</option>
                <option value="">Completed</option>
                <option value="played">Abandoned</option>
                <option value="played">Wish List</option>
              </select>
            </div>
            <div className='game-card'>
                            <h2>Game title</h2>
              <h3>Genre</h3>
              <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co7jfv.jpg" alt="" />
              <select name="" id="">
                <option value="played">Played</option>
                <option value="">Completed</option>
                <option value="played">Abandoned</option>
                <option value="played">Wish List</option>
              </select>
            </div>
            <div className='game-card'></div>
            <div className='game-card'></div>
            <div className='game-card'></div>
            <div className='game-card'></div>
            <div className='game-card'></div>
            <div className='game-card'></div>
            <div className='game-card'></div>
          </div>
 
        </div>
      </div>
    </>
  )
}

export default App
