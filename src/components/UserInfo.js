import React, {Component} from 'react';

export default class UserInfo extends Component {
  render () {
    return(
      <div className="user-info">
        <img src="https://avatars.githubusercontent.com/u/5454164?v=3" alt="."/>
        <h1 className="username">
          <a href="https://github.com/marcosdias">Marcos Dias</a>
        </h1>

        <ul className="repos-info">
          <li>- Repositórios: 122</li>
          <li>- Seguidores: 10</li>
          <li>- Seguidos: 10</li>
        </ul>
      </div>
    );
  }
}
