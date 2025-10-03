
function GameCard({gameStatus,grabSelectValue,id,gameTitle, gameGenre, gameImage,onGameRemoval}) {

  return (
      <div className='game-card' id={id}>
          <h2>{gameTitle}</h2>
          <button className="remove-game-button" onClick={() => onGameRemoval(id)}>x</button>
          <h3>{gameGenre}</h3>
          <img src={gameImage} alt={gameTitle} />
          <select value={gameStatus}  onChange={(e) => grabSelectValue(e, id)}>
            <option value='Select status' default>Select status</option>
            <option value="played">Played</option>
            <option value="completed">Completed</option>
            <option value="abandoned">Abandoned</option>
            <option value="wish list">Wish List</option>
          </select>
        </div>
  )

}
export default GameCard;