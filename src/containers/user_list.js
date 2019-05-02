import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../actions';
import { bindActionCreators } from 'redux';

class UserList extends Component {
  render() {
    return (
      <div>
        <ul className="col-md-4">
          {this.props.users.map(user => {
            return (
              <li
                className="list-group-item"
                key={user.id}
                onClick={() => this.props.selectUser(user)}>
                {user.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
};

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
