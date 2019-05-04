import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
  render() {
    const { activeUser } = this.props;

    if (!activeUser) {
      return <div>Selectionnez un utilisateur pour démarrer</div>;
    }
    return (
      <div>
        <h3>Detail de : {activeUser.name}</h3>
        <li>ID : {activeUser.id}</li>
        <li>Role : {activeUser.role} </li>
        <li>Actif : {activeUser.active} </li>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { activeUser: state.activeUser };
};

export default connect(mapStateToProps)(UserDetail);
