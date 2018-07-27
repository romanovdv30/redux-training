import React, { Component } from 'react';
import User from './User/User';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as userActions from '../../store/actions/userActions';

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      id: 1
    };

    this.onNameChangeBound = this.onNameChange.bind(this);
    this.onAgeChangeBound = this.onAgeChange.bind(this);
    this.onFormSubmitBound = this.onFormSubmit.bind(this);
  }

  onNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  onAgeChange(e) {
    this.setState({
      age: this.refs.age.value
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    if (this.state.name && this.state.age) {
      const user = { ...this.state };
      user.id = this.state.id + 1;

      this.setState((state) => {
        return {
          name: '',
          age: '',
          id: state.id + 1
        }
      });

      this.props.addUser(user);
    } else {
      return false;
    }
  }

  deleteUser(id) {
    this.props.deleteUser(id);
  }

  renderUserInputs() {
    return (
      <form className='UserList__form' onSubmit={ this.onFormSubmitBound } style={ { margin: '25px' } }>
        <div>
          <div>Name:</div>
          <input type='text' ref='name' value={ this.state.name } onChange={ this.onNameChangeBound }/>
        </div>
        <div>
          <div>Age:</div>
          <input type='text' ref='age' value={ this.state.age } onChange={ this.onAgeChangeBound }/>
        </div>
        <input type='submit' value='Add User'/>
      </form>
    );
  };

  render() {
    const { users } = this.props;

    const usersList = users.map((item) => {
      return (
        <User key={ item.id } data={ item } removeUser={ () => this.deleteUser(item.id) }/>
      );
    });

    return (
      <div>
        <div>
          { this.renderUserInputs() }
        </div>
        <div>
          { this.props.isFetching ? 'Loading.....' : usersList }
        </div>

        <button onClick={ this.props.fetchUsers }>GET USERS</button>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.string
  })).isRequired
};

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
    isFetching: state.userReducer.isFetching
  };
};

export default connect(mapStateToProps, userActions)(UserList);