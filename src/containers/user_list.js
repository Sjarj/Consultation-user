import React, { Component } from 'react';

export default class userList extends Component {
  render() {
    return (
      <div>
        <ul className="col-md-4">
          {this.props.users.map(user => {
            <li className="list-group-item" key={user.id}>
              {user.name}
            </li>;
          })}
        </ul>
      </div>
    );
  }
}
