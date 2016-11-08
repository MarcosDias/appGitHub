import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">

        <div className="search">
          <input
            type="search"
            placeholder="Digite o nome do usuário no GitHub" />
        </div>

        <div className="user-info">
          <img src="https://avatars.githubusercontent.com/u/5454164?v=3"/>
          <h1>
            <a href="https://github.com/marcosdias">Marcos Dias</a>
          </h1>
        </div>

        <ul className="repos-info">
          <li>- Repositórios: 122</li>
          <li>- Seguidores: 10</li>
          <li>- Seguidos: 10</li>
        </ul>

        <div className="actions">
          <button>Ver respositórios</button>
          <button>Ver favoritos</button>
        </div>

        <div className="repos">
          <h2>Repositórios</h2>
          <ul>
            <li>
              <a href="#">Nome do repositório</a>
            </li>
          </ul>
        </div>

        <div className="starred">
          <h2>Favoritos:</h2>
          <ul>
            <li>
              <a href="#">Nome do respositório</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
