import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import MonsterList from './Components/Monsters/Monsters';


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
