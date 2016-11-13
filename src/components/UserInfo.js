import React, {PropTypes} from 'react';

const UserInfo = ({ userInfo }) => (
  <div className="user-info">
    <img src={userInfo.photo} />
    <h1 className="username">
      <a href={`https://github.com/${userInfo.login}`}>
        {userInfo.name}
      </a>
    </h1>

    <ul className="repos-info">
      <li>- Repositórios: {userInfo.repos}</li>
      <li>- Seguidores: {userInfo.followers}</li>
      <li>- Seguidos: {userInfo.following}</li>
    </ul>
  </div>
);

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    userName: PropTypes.string.isRequred,
    repos: PropTypes.array.isRequred,
    followers: PropTypes.number.isRequred,
    following: PropTypes.number.isRequred
  })
};

export default UserInfo;
