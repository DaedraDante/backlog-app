import { useState } from 'react'
import { useEffect } from 'react'
import GameCard from './GameCard'
import gamesData from './GameObjects'
import SearchBar from './Searchbar'

function App() {
  // variables 
  const [gamesNumber, setGamesNumber] = useState(gamesData.length);
  const [isSearchBarVisible,setIsSearchBarVisible] = useState(false);

  // functions 
  // function to show search bar
  const handleAddGameButton = () => {
    setIsSearchBarVisible(true);
    console.log(isSearchBarVisible);
  }

  // jsx return
  return (
    <>
      <div className='container'>
                    {isSearchBarVisible ? <SearchBar 
                    isSearchBarVisible={isSearchBarVisible}
                    setIsSearchBarVisible={setIsSearchBarVisible}
                    handleAddGameButton={handleAddGameButton}
                    /> : null}
        <h1 className='app-title'>A place for your completionist needs</h1>
        <div className='game-list-container'>
          <button className='add-game-button' onClick={handleAddGameButton}>Add a game</button>
          <div className='game-list-title'>
            <h2>Game List</h2>
            <h4>You logged {gamesNumber} games</h4>
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
