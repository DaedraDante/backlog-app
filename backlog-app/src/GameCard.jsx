
function GameCard({gameTitle, gameGenre, gameImage}) {
  return (
      <div className='game-card'>
          <h2>{gameTitle}</h2>
          <h3>{gameGenre}</h3>
          <img src={gameImage} alt={gameTitle} />
          <select name="" id="">
            <option value="played">Played</option>
            <option value="completed">Completed</option>
            <option value="abandoned">Abandoned</option>
            <option value="wish list">Wish List</option>
          </select>
        </div>
  )

}
export default GameCard;