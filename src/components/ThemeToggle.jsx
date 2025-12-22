// src/components/ThemeToggle.jsx
function ThemeToggle() {
  const toggleTheme = () => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");

    html.setAttribute(
      "data-theme",
      current === "light" ? "dark" : "light"
    );
  };

  return (
    <button onClick={toggleTheme}>
      Toggle theme
    </button>
  );
}

export default ThemeToggle;
