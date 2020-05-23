import React from 'react';

export default function ThemeSwitcher({ toggleTheme }) {
  return (
    <button type="button" onClick={toggleTheme}>
      Alterar themer
    </button>
  );
}
