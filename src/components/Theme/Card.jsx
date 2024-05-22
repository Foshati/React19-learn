import { use } from "react";

import { ThemeProvider, ThemeContext } from "../../context/ThemeContext";

function Card() {
  // destructure property value
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <main className="m-6">
      <div
        className={`p-6  my-6 card mx-auto flex justify-center items-center ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"} `}
      >
        <h2 className="text-2xl text-red-500 text">use()=useContext()</h2>
        <p className={theme === "dark" ? "text-slate-200" : "text-slate-800"}>
          Call useContext at the top level of your component to read and
          subscribe to context. / useContext returns the context value for the
          context you passed. To determine the context value, React searches the
          component tree and finds the closest context provider above for that
          particular context.
        </p>
        <button className="m-4 mt-4 btn btn-wide" onClick={toggleTheme}>
          {theme === "dark" ? "Dark mode" : "light mode"}
        </button>
      </div>
    </main>
  );
}

export default function Theme() {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  );
}
