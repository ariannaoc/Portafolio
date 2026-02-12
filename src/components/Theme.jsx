import { useEffect } from "react";
import { useStore } from '@nanostores/react';
import { theme } from "../states/theme";
import { Sun, Moon } from "lucide-react";


function Theme() {
  const $theme = useStore(theme);

  useEffect(() => {
    if ($theme == "light") {
      document.querySelector("html").classList.remove("dark");
    } else{
      document.querySelector("html").classList.add("dark");
    }
  }, [$theme]);

  return (

    <div className="text-right">
      <button
        className="absolute top-10 right-4 z-50 p-2 rounded-full bg-bunker-100 dark:bg-bunker-800 hover:scale-110 transition-all duration-150 opacity-75"
        onClick={() => {
          theme.set($theme === "light" ? "dark" : "light");
        }}
      >
        {$theme == "light" ? (
          <Moon/>
        ) : (
          <Sun  className="dark:stroke-white"/>
        )}
      </button>
    </div>
  );
}

export { Theme };
