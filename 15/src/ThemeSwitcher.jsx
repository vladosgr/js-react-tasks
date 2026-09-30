import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
  static contextType = ThemeContext;

  render() {
    const {themes, theme, setTheme} = this.context;
    return (
      <ButtonGroup className="mb-2">
        {themes.map((item)=>(
          <ToggleButton
            key={item.id}
            id={`theme-${item.id}`}
            variant="secondary"
            type="radio"
            name="theme"
            value={item.name}
            onChange={() => setTheme(item)}
            checked={theme.id === item.id}
          >
            {item.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    );
  }
  // END
}

export default ThemeSwitcher;
