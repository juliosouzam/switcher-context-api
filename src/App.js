import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import TodoList from './components/TodoList';
import ThemeSwitcher from './components/ThemeSwitcher';

import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';

function App() {
  const [theme, setTheme] = useState(themes.dark);

  function toggleTheme() {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme }}>
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <ThemeContext.Consumer>
          {(t) => (
            <ThemeProvider theme={t}>
              <TodoList />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
