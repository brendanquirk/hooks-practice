import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false
  }

  handleAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated })
  }
  render() {
    return (
      <AuthContext.Provider value={{...this.state, handleAuth: this.handleAuth}}>
        { this.props.children }
      </AuthContext.Provider>
    );
  }
};

export default AuthContextProvider
