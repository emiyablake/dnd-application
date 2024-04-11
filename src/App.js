import './App.css';
import './dice-d20-solid.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>

      <body className="App-body">
        <h3>What do you wanna know about Dungeons and Dragons?</h3>
          <div className="App-search">
            <label className="App-search-label">Search by name:</label>
            <input className="App-search-input"></input>
            <button className="btn-search">Pesquisar</button>
          </div>
          <div className="App-btn-search">
          <button className="btn-gameMech">Game Mechanics</button> 
            <button className="btn-classes">Classes</button>
            <button className="btn-races">Races</button>
            <button className="btn-equip">Equipaments</button> 
            <button className="btn-feats">Feats</button> 
            <button className="btn-features">Features</button> 
            <button className="btn-monsters">Monsters</button> 
          </div>
      </body>
    </div>
  );
}

export default App;
