import { useEffect, useState } from "react";
import { useRef } from "react";

function SearchBar({gamesData,handleAddGameButton,isSearchBarVisible,setIsSearchBarVisible}) {

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

    // function to get the filtered games using the gameTitle key
  const getFilteredgamesData = (gameQuery, gamesData) => {
    if(!gameQuery) {
      return gamesData;
    }
    return gamesData.filter((game) => game.gameTitle.toLowerCase().includes(gameQuery.toLowerCase()));
  };

  const filteredgamesData = getFilteredgamesData(gameQuery, gamesData)
  
    // function to focus on the search bar when isSearchBarVisible is true
  const focusToSearchBar = () => {

  };

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
                {filteredgamesData.map((value) => (
                  <div className="search-bar-game-list-section">
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