import React, { useState, useEffect } from 'react';
import fetchMonsters from '../../API/fetchMonster';
import './Monsters.css'

function MonsterList() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const getMonsters = async () => {
      try {
        const monsterList = await fetchMonsters();
        setMonsters(monsterList);
      } catch (error) {
        console.error('Error setting monsters:', error);
      }
    };

    getMonsters();
  }, []);
  
    return (
      <article>
        <h1>Lista de Monstros</h1>
        <ul>
          <li>
            {monsters.map(monster => (
              <li key={monster.index}>{/*"→"*/} {monster.name}</li>
            ))}
          </li>
        </ul>
      </article>
    );
}
  

export default MonsterList;