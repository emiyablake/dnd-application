import React,{useState} from "react";
import MonsterList from "../Monsters/Monsters";
import './Main.css'


function ButtonMonster() {
  function handleClick(){
    MonsterList();
  }

  return(
    <button onClick={handleClick}>
      Monster
    </button>
  )
}


const Main = () => {
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
            <ButtonMonster/>
          </div>
        
          <div className="Main-search">
            <label className="Main-search-label">Search by name:</label>
            <input className="Main-search-input"></input>
            <button className="Main-btn-search">Pesquisar</button>
          </div>
          
        </main>
    )
}

export default Main