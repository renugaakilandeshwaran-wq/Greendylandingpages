import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";

function App() {


  const [theme, setTheme] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <Routes>
      <Route
        path="/"
        element={<Home theme={theme} setTheme={setTheme} />}
      />
    </Routes>
  );
}

export default App;