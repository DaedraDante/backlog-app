import { useState } from 'react'
import GameCard from './GameCard'
import gamesData from './GameObjects'


function App() {
  
  return (
    <>
      <div className='container'>
        <h1 className='app-title'>Backlog App</h1>
        <div className='game-list-container'>
          <div className='game-list-title'>
            <h2>Game List</h2>
          </div>
          <div className='game-list'>
              {gamesData.map((item) => (
                <GameCard 
                  key={item.id}
                  gameTitle={item.gameTitle}
                  gameGenre={item.gameGenre}
                  gameImage={item.gameImage}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
