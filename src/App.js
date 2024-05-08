import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import MonsterList from './Components/Monsters';


function App() {
  return (
    <div className="App">
      {/*Importando o Componente Header*/}
      <Header/>
      <body className="App-body">
        <Main/>
        <MonsterList/>
      </body>
      <Footer/>
    </div>
  );
}

export default App;
