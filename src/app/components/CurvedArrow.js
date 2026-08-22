export default function CurvedArrow({ className, text = "psst... try this!", direction = "left" }) {
  if (direction === "right") {
    // Long sweep from the left margin: rises to the right, threads between the
    // diamond bullets of rows one and two, tip lands on the first character.
    return (
      <div className={`pointer-events-none flex flex-col gap-1 opacity-0 animate-[fadeIn_0.5s_ease-in_forwards] ${className}`}>
        <svg
          width="70"
          height="44"
          viewBox="0 0 70 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 32 C 28 34, 44 20, 64 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-stone-400"
          />
          <path
            d="M56 7 L64 6 L60 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-stone-400"
          />
        </svg>
        <p className="text-sm text-stone-600 dark:text-stone-400 font-medium whitespace-nowrap -ml-10 -mt-10">
          {text}
        </p>
      </div>
    );
  }

  if (direction === "doodle-flat") {
    // Low-profile scribble: runs horizontally with one loop mid-run,
    // tip lands on the left, text trails to the right.
    return (
      <div className={`pointer-events-none flex items-center gap-1 opacity-0 animate-[fadeIn_0.5s_ease-in_forwards] ${className}`}>
        <svg
          width="100"
          height="32"
          viewBox="0 0 100 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 92 18 C 82 24, 74 24, 66 20 C 56 15, 60 5, 70 8 C 78 10, 74 20, 62 19 C 40 28, 10 32, 6 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-stone-400"
          />
          <path
            d="M 0 16 L 6 9 L 12 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-stone-400"
          />
        </svg>
        <p className="text-sm text-stone-600 dark:text-stone-400 font-medium whitespace-nowrap">
          {text}
        </p>
      </div>
    );
  }

  if (direction === "doodle") {
    // Scribbly loop-de-loop: starts under the text, loops once mid-air, and
    // the tip lands down-left on whatever it's placed beside.
    return (
      <div className={`pointer-events-none flex items-start gap-1 opacity-0 animate-[fadeIn_0.5s_ease-in_forwards] ${className}`}>
        <svg
          width="56"
          height="64"
          viewBox="0 0 56 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M48 8 C 58 20, 46 30, 36 26 C 26 22, 32 10, 42 14 C 52 18, 46 38, 30 46 C 24 49, 16 52, 8 52"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-stone-400"
          />
          <path
            d="M16 46 L 8 52 L 17 57"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-stone-400"
          />
        </svg>
        <p className="text-sm text-stone-600 dark:text-stone-400 font-medium whitespace-nowrap -mt-1">
          {text}
        </p>
      </div>
    );
  }

  return (
    <div className={`flex items-end opacity-0 animate-[fadeIn_0.5s_ease-in_forwards] ${className}`}>
      <div className="relative">
        <p className="text-sm text-stone-600 dark:text-stone-400 font-medium mb-1 whitespace-nowrap">
          {text}
        </p>
        <svg
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform -scale-x-100 rotate-[15deg]"
        >
          <path
            d="M5 2C5 2 20 2 25 8C30 14 30 25 30 25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-stone-400"
          />
          <path
            d="M25 19L30 25L35 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-stone-400"
          />
        </svg>
      </div>
    </div>
  );
}
