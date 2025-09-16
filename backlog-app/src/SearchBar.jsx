

function SearchBar({handleAddGameButton,isSearchBarVisible,setIsSearchBarVisible}) {
    const handleSearchBarBackBtn = () => {
        setIsSearchBarVisible(false);
    }
    return (
        <div className="search-bar">
            <input
             type="" 
             name=""
             id="" placeholder="Search a game" 
             className="search-bar-input"/>
             <button className="search-bar-back-btn" onClick={handleSearchBarBackBtn}>Go back</button>
        </div>
    )
}
export default SearchBar