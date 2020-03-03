import React from 'react';

import Header from './Header/Header';
import RandomUsers from './RandomUsers/RandomUsers';
import FavoriteUsers from './FavoriteUsers/FavoriteUsers';

export default class App extends React.PureComponent {
  state = {
    isLoading: true,
    users: [],
    randomUsers: [],
    favUsers: [],
    usersIndexes: []
  }
  //get data from url
  fetchUsers = () => {
    fetch(`https://api.github.com/users?`)
      .then(res => res.json())
      .then(users => {
        this.setState({
          isLoading: false,
          users,
          randomUsers: this.getRandomUsers(users)
        })
      })
      .catch(e => console.log(e));
  }
  // get random users list
  getRandomUsers = users => {
    const randomUsers = [];
    for (let i = 0; i < 4; i++) {
      randomUsers.push(users[Math.floor(Math.random() * users.length)]);
    }
    this.setState({
      randomUsers,
      usersIndexes: []
    })
    return randomUsers;
  }

  componentDidMount() {
    this.fetchUsers();
    this.getRandomUsers(this.state.randomUsers)
  }
  // get favorite users list
  onFavorite = (user, index) => {
    const { favUsers, users, usersIndexes } = this.state;
    if (usersIndexes.includes(index)) {
      return;
    }
    else {
      this.setState({
        usersIndexes: [ ...usersIndexes, index]
      })
    }
    const favUser = favUsers.find((item) => item.id === user.id);
    if (favUser) {
      favUser.count++;
      if (favUser.count === 3) {
        const filtered = favUsers.filter(user => user.id != favUser.id);
        const filteredUsers = users.filter(user => user.id != favUser.id);
        this.setState({
          favUsers: filtered,
          users: filteredUsers,
          randomUsers: this.getRandomUsers(filteredUsers)
        })
      }
      else {
        this.setState({
          favUsers: [...favUsers],
        })
      }
    }
    else {
      user.count = 1;
      this.setState({
        favUsers: [...favUsers, user]
      })
    }
    if (this.state.favUsers.length === 9) {
      this.setState({
        favUsers: [],
        randomUsers: this.getRandomUsers(users)
      })
    }
  }

  render() {
    const { users, randomUsers, favUsers, usersIndexes } = this.state

    return (
      <div>
        <Header title={'Random Users'} />
        {this.state.isLoading
          ? <h2>Loading...</h2>
          : !users.length
            ? <h1>You Win!</h1>
            : (<RandomUsers
              users={randomUsers}
              favoriteUsers={favUsers}
              onFavorite={this.onFavorite}
              usersIndexes={usersIndexes}
            />)}
        <button style={{
          margin: 'auto',
          width: '1300px',
          textAlign: 'center'
        }}
          onClick={() => this.getRandomUsers(users)}>Update list</button>
        <Header title={'Favorite Users '} value={favUsers.length} />
        <FavoriteUsers favUsers={favUsers} />
      </div>
    )
  }
}
