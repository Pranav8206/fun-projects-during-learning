import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("gray");

  const colors = [
    { name: "Black", code: "black", bg: "bg-black text-white" },
    { name: "White", code: "white", bg: "bg-white text-gray-700 border" },
    { name: "Indigo", code: "indigo", bg: "bg-indigo-600 text-white" },
    { name: "Fuchsia", code: "fuchsia", bg: "bg-fuchsia-500 text-white" },
    { name: "Cyan", code: "cyan", bg: "bg-cyan-500 text-white" },
    { name: "Yellow", code: "yellow", bg: "bg-yellow-400 text-gray-800" },
    { name: "Blue", code: "blue", bg: "bg-sky-500 text-white" },
  ];

  return (
    <div
      className="flex items-center justify-center w-full h-screen transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed top-6 flex flex-wrap justify-center gap-4 px-6 py-3 rounded-2xl backdrop-blur-md bg-white/20 shadow-lg border border-white/30">
        {colors.map((c) => (
          <button
            key={c.name}
            className={`px-4 py-2 rounded-xl font-medium text-sm shadow-md cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-lg ${c.bg}`}
            onClick={() => setColor(c.code)}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
