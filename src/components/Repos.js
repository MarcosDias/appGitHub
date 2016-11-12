import React, {Component} from 'react';

export default class Repos extends Component {
  render () {
    return(
      <div className={this.props.className}>
        <h2>{this.props.title}</h2>
        <ul>
          {this.props.repos.map((it, index) => (
            <li key={index}>
              <a href={it.link}>{it.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Repos.defaultProps = {
  className: '',
}

Repos.propTypes = {
  className: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
  respo: React.PropTypes.array
}
