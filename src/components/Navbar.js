import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext'
import {AuthContext} from '../contexts/AuthContext'


function Navbar () {
  // static contextType = ThemeContext;
    // console.log(this.context);
    return (
      <AuthContext.Consumer>{(authContext)=> (
        <ThemeContext.Consumer>{(themeContext) => {
          // console.log(themeContext);
          const { isLightTheme, light, dark} = themeContext
          const { isAuthenticated, handleAuth } = authContext

          const theme = isLightTheme ? light : dark;
          return(
            <nav style={{background: theme.ui, color: theme.syntax}}>
              <h1>Context App</h1>
              <div onClick={handleAuth}>
                { isAuthenticated ? 'Logged in' : 'Logged out'}

              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>

              </ul>
            </nav>
          )
        }}
        </ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>
    );
};

export default Navbar
