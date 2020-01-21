import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext'


function ThemeToggle () {
    const { handleToggle } = useContext(ThemeContext)
    return (
      <button onClick={handleToggle}>Toggle Theme</button>
    );
};

export default ThemeToggle
