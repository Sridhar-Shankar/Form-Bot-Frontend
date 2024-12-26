import { useTheme } from "../context/ThemeContext";
import "./ThemeSwitcher.css"; // Import CSS for styling

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
        <p>Light</p>
      <input
        type="checkbox"
        id="theme-toggle"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-toggle" className="toggle-label">
        <span className="slider"></span>
      </label>
      <p>Dark</p>
    </div>
  );
};

export default ThemeSwitcher;
