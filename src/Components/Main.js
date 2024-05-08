import React,{useState} from "react";
import MonsterList from "./Monsters";
import './Main.css'

const Main = () => {
  const [monstersLoaded, setMonstersLoaded] = useState(false);

  const handleLoadMonsters = () => {
    setMonstersLoaded(true);
  };

    return (
        <main>
          <h3>What do you wanna know about Dungeons and Dragons?</h3>
          <div className="Main-btn-search">
            <button className="btn-gameMech">Game Mechanics</button> 
            <button className="btn-classes">Classes</button>
            <button className="btn-races">Races</button>
            <button className="btn-equip">Equipaments</button> 
            <button className="btn-feats">Feats</button> 
            <button className="btn-features">Features</button> 
            <button className="btn-monsters" onClick={handleLoadMonsters}>Monsters</button> 
          </div>
        
          <div className="Main-search">
            <label className="Main-search-label">Search by name:</label>
            <input className="Main-search-input"></input>
            <button className="Main-btn-search">Pesquisar</button>
          </div>

          {monstersLoaded && <MonsterList shouldLoadMonsters={monstersLoaded} />}
          
        </main>
    )
}

export default Main