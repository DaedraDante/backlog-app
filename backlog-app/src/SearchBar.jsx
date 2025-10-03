import { useEffect, useState } from "react";
import { useRef } from "react";

function SearchBar({gamesNumber,gameList,setUserGameList,userGameList,handleAddGameButton,isSearchBarVisible,setIsSearchBarVisible}) {

  const [gameQuery, setGameQuery] = useState("");
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  },[isSearchBarVisible,gameQuery]);

    // function to back out of search bar
  const handleSearchBarBackBtn = () => {
        setIsSearchBarVisible(false);
  };

    // function to clear search bar
  const emptySearchBar = () => {
      setGameQuery("");
  };

  // function to add game to user game list
  const addGameToList = (gameStatus,id,gameTitle,gameGenre,gameImage) => {

    //hides search bar
    setIsSearchBarVisible(false);

    //adds selected game from search bar to usergamelist array
      console.log(`test ${id} ${gameStatus} ${gameTitle} ${gameGenre} ${gameImage}`)
      if(!userGameList.some(game => game.id === id)) {
          setUserGameList([
        ...userGameList,
       {gameStatus:gameStatus,id:id,gameTitle:gameTitle,gameGenre:gameGenre,gameImage:gameImage}
      ]);
      } else {
        alert("You already have that game in your collection");
      }
  };

    // function to get the filtered games using the gameTitle key
  const getFilteredgameList = (gameQuery, gameList) => {
    if(!gameQuery) {
      return gameList;
    }
    return gameList.filter((game) => game.gameTitle.toLowerCase().includes(gameQuery.toLowerCase()));
  };

  const filteredgameList = getFilteredgameList(gameQuery, gameList)
  
  // jsx 
    return (
        <div className="search-bar">
          <div className="input-and-list-div">
             <input
             type="" 
             name=""
             id="" placeholder="Search" 
             value={gameQuery}
             className="search-bar-input"
             ref={inputRef}
             onChange={(e) => setGameQuery(e.target.value)}
             />
             <div className="search-bar-game-list">
                {filteredgameList.map((value) => (
                  <div
                    className="search-bar-game-list-section"
                    onClick={() =>
                      addGameToList(
                        "Select status", // default status
                        value.id,
                        value.gameTitle,
                        value.gameGenre,
                        value.gameImage
                      )
                    }
                  >
                    <h2 key={value.gameTitle}>{value.gameTitle}</h2>
                  </div>
                ))}
             </div>
          </div>
             <button className="search-bar-empty-btn" onClick={emptySearchBar}>X</button>
             <button className="search-bar-back-btn" onClick={handleSearchBarBackBtn}>Go back</button>
        </div>
    )
}
export default SearchBar