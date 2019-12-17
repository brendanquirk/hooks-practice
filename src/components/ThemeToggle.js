import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext'


function ThemeToggle () {
  // static contextType = ThemeContext;
    // console.log(this.context);
    return (
      <ThemeContext.Consumer>{(context) => {
        // console.log(context);
        const { handleToggle } = context
        return(
          <button onClick={handleToggle}>Toggle Theme</button>
        )
      }}
      </ThemeContext.Consumer>
    );
};

export default ThemeToggle
