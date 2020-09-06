import React, { useState, useEffect, Component } from 'react';
import getUsers from './../api/api.js';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class PageUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentPage: 1,
      isLoaded: false,
      error: null,
    };
  }

  loadUsers = () => {
    const { currentPage } = this.state;
    getUsers({
      page: currentPage,
    })
      .then((data) => {
        this.setState({
          users: data.results,
          isLoaded: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          isLoaded: false,
        });
      });
  };

  componentDidMount() {
    this.loadUsers();
    // fetch()
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         users: result.users,
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error,
    //       });
    //     }
    //   );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.loadUsers();
    }
  }

  render() {
    const { error, isLoaded, users } = this.state;
    const { currentPage } = this.props;
    if (error) {
      return <div> error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div> load...</div>;
    } else {
      return (
        <ul>
          {users.map((email) => (
            <li key={email.name}>{currentPage}</li>
          ))}
        </ul>
      );
    }
  }
}

export default PageUsers;
