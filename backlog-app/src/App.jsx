import { useState } from 'react'
import { useEffect } from 'react'
import GameCard from './GameCard'
import SearchBar from './Searchbar'

function App() {

  // variables 
 const [gameList, setGameList] = useState([
  {
    id: 1,
    gameTitle: 'God of War 2018',
    gameGenre: 'Hack N Slash',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 2,
    gameTitle: 'Dead Cells',
    gameGenre: 'Roguelike',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co7jfv.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 3,
    gameTitle: 'Minecraft',
    gameGenre: 'Sandbox',
    gameImage: 'https://upload.wikimedia.org/wikinews/en/7/7a/Minecraft_game_cover.jpeg',
    gameStatus: 'Select status'
  },
  {
    id: 4,
    gameTitle: 'The Witcher 3: Wild Hunt',
    gameGenre: 'RPG',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1wyy.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 5,
    gameTitle: 'Elden Ring',
    gameGenre: 'Action RPG',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co4jni.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 6,
    gameTitle: 'Hades',
    gameGenre: 'Roguelike',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co39vc.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 7,
    gameTitle: 'Hollow Knight',
    gameGenre: 'Metroidvania',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co93cr.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 8,
    gameTitle: 'Dark Souls III',
    gameGenre: 'Action RPG',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1vcf.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 9,
    gameTitle: 'Stardew Valley',
    gameGenre: 'Simulation',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/coa93h.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 10,
    gameTitle: 'Red Dead Redemption 2',
    gameGenre: 'Action-Adventure',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1q1f.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 11,
    gameTitle: 'Sekiro: Shadows Die Twice',
    gameGenre: 'Action-Adventure',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co67k9.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 12,
    gameTitle: 'Overwatch',
    gameGenre: 'Shooter',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1rcb.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 13,
    gameTitle: 'League of Legends',
    gameGenre: 'MOBA',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/coabh7.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 14,
    gameTitle: 'Fortnite',
    gameGenre: 'Battle Royale',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/coa8yi.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 15,
    gameTitle: 'Call of Duty: Modern Warfare',
    gameGenre: 'Shooter',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1rsg.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 16,
    gameTitle: 'Cyberpunk 2077',
    gameGenre: 'RPG',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/coaam3.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 17,
    gameTitle: 'Assassins Creed Valhalla',
    gameGenre: 'Action-Adventure',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2ed3.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 18,
    gameTitle: 'Monster Hunter: World',
    gameGenre: 'Action RPG',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1rst.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 19,
    gameTitle: 'Celeste',
    gameGenre: 'Platformer',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co3byy.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 20,
    gameTitle: 'Undertale',
    gameGenre: 'RPG',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2855.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 21,
    gameTitle: 'Persona 5',
    gameGenre: 'JRPG',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1r76.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 22,
    gameTitle: 'Doom Eternal',
    gameGenre: 'Shooter',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co3p5n.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 23,
    gameTitle: 'Apex Legends',
    gameGenre: 'Battle Royale',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big/coa93z.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 24,
    gameTitle: 'Super Mario Odyssey',
    gameGenre: 'Platformer',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1mxf.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 25,
    gameTitle: 'The Legend of Zelda: Breath of the Wild',
    gameGenre: 'Action-Adventure',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co1ujg.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 26,
    gameTitle: 'Super Smash Bros. Ultimate',
    gameGenre: 'Fighting',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2255.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 27,
    gameTitle: 'Genshin Impact',
    gameGenre: 'Action RPG',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/coa9dy.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 28,
    gameTitle: 'Diablo III',
    gameGenre: 'Action RPG',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co2l1u.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 29,
    gameTitle: 'Final Fantasy XV',
    gameGenre: 'JRPG',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co6nz1.jpg',
    gameStatus: 'Select status'
  },
  {
    id: 30,
    gameTitle: 'Valorant',
    gameGenre: 'Shooter',
    gameImage: 'https://images.igdb.com/igdb/image/upload/t_cover_big_2x/coa7oc.jpg',
    gameStatus: 'Select status'
  }
]);

  const [userGameList,setUserGameList] = useState(() => {
    const storedGameList = localStorage.getItem("userGameList");
    return storedGameList ? JSON.parse(storedGameList) : [];
  });

    //use effect hook to add usergamelist to local storage
  useEffect(() => {
    localStorage.setItem("userGameList",JSON.stringify(userGameList))
  },[userGameList]);


  const gamesNumber = userGameList.length
  const [isSearchBarVisible,setIsSearchBarVisible] = useState(false);

  // functions 

  // function to show search bar
  const handleAddGameButton = () => {
    setIsSearchBarVisible(true);
  };
  // function to remove a game
  const removeGame = (id) => {
    setUserGameList(
      userGameList.filter(a => a.id!== id)
    )
  };
  // function to grab select's value
  const grabSelectValue = (e, id) => {
    const selectedValue = e.target.value
    setUserGameList(
      userGameList.map(game => 
        game.id === id 
        ? {...game,gameStatus:selectedValue}
        : game
    ))
  }


  // jsx return
  return (
    <>
      <div className='container'>
                    {isSearchBarVisible ? <SearchBar 
                    isSearchBarVisible={isSearchBarVisible}
                    setIsSearchBarVisible={setIsSearchBarVisible}
                    handleAddGameButton={handleAddGameButton}
                    gameList={gameList}
                    gamesNumber={gamesNumber}
                    userGameList={userGameList}
                    setUserGameList={setUserGameList}
                    /> : null}
        <h1 className='app-title'>yourGameLibrary
          
        </h1>
        <div className='game-list-container'>
          <button className='add-game-button' onClick={handleAddGameButton}>Add a game</button>
          <div className='game-list-title'>
            <h2>Game List</h2>
            <h4>You logged {gamesNumber} games</h4>
          </div>
          <div className='game-list'>
              {userGameList.map((item) => (
                <GameCard
                  key={item.id}
                  id={item.id}
                  gameTitle={item.gameTitle}
                  gameGenre={item.gameGenre}
                  gameImage={item.gameImage}
                  gameStatus={item.gameStatus}
                  onGameRemoval={removeGame}
                  grabSelectValue={grabSelectValue}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
