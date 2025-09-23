import { useState } from "react";


function SearchBar({gamesData,handleAddGameButton,isSearchBarVisible,setIsSearchBarVisible}) {
      const [gameQuery, setGameQuery] = useState("");
    // function to back out of search bar
    const handleSearchBarBackBtn = () => {
        setIsSearchBarVisible(false);
    };

    // function to get the filtered games using the gameTitle key
  const getFilteredgamesData = (gameQuery, gamesData) => {
    if(!gameQuery) {
      return gamesData;
    }
    return gamesData.filter((game) => game.gameTitle.toLowerCase().includes(gameQuery.toLowerCase()));
  };
  const filteredgamesData = getFilteredgamesData(gameQuery, gamesData)
  
  // jsx 
    return (
        <div className="search-bar">
            <input
             type="" 
             name=""
             id="" placeholder="Search a game" 
             className="search-bar-input"
             onChange={(e) => setGameQuery(e.target.value)}
             />
             <div className="search-bar-game-list">
                {filteredgamesData.map((value) => (
                    <h2 key={value.gameTitle}>{value.gameTitle}</h2>
                ))}
             </div>
             <button className="search-bar-back-btn" onClick={handleSearchBarBackBtn}>Go back</button>
        </div>
    )
}
export default SearchBar