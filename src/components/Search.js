import React, {Component} from 'react';

export default class Search extends Component {
  render () {
    return(
      <div className="search">
        <input
          type="search"
          placeholder="Digite o nome do usuário no GitHub" />
      </div>
    );
  }
}
