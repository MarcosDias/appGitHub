import React, {Component} from 'react';
import AppContent from './components/appContent'

class App extends Component {
  constructor () {
    super();
    this.state = {
      userInfo: {
        name: 'Marcos Dias',
        photo: 'https://avatars.githubusercontent.com/u/5454164?v=3',
        login: 'marcosdias',
        repos: 20,
        followers: 10,
        following: 10
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }],
    }
  }

  render() {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    );
  }
}

export default App;
