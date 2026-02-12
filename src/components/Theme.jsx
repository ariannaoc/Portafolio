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
        className="absolute top-10 right-4 z-50 p-2 rounded-full 
        bg-jade-50 dark:bg-jade-900/30 text-jade-950 dark:text-jade-100
         hover:bg-jade-600 hover:text-white dark:hover:bg-jade-500 
          transition-colors duration-150"
        onClick={() => {
          theme.set($theme === "light" ? "dark" : "light");
        }}
      >
        {$theme == "light" ? (
          <Moon/>
        ) : (
          <Sun/>
        )}
      </button>
    </div>
  );
}

export { Theme };

// bg-jade-50 dark:bg-jade-900/30 text-jade-950 dark:text-jade-100 hover:bg-jade-600 hover:text-white dark:hover:bg-jade-500