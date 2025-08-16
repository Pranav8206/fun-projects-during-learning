import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PasswordGenerator from "./components/chatgpt";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyPassToclipboard = useCallback(() => {
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
    },[password])
  
  

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) characters += "0123456789";
    if (characterAllowed) characters += "!#$%&'()*+,-./:;<=>?@[]^_{|}~`";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * characters.length + 1);
      pass += characters.charAt(index);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, setPassword]);

  return (
    <>
      <div className="bg-gray-300 rounded-2xl m-2">
        <div className="flex items-center  m-0 font-extrabold text-2xl container mx-auto">
          {" "}
          PassWord Generator{" "}
        </div>

        <span className="flex  mx-8   w-fit p-2 rounded-2xl">
          <input
            type="text"
            id="pass"
            value={password}
            readOnly
            className="bg-white rounded-l-xl px-1"
            placeholder="password"
            ref={passwordRef}
          />
          <button
            className="text-gray-700 font-bold text-xl bg-gray-200 rounded-r-xl px-1"
            htmlFor="pass"
            onClick={copyPassToclipboard}
          >
            Copy
          </button>
        </span>

        <span className="flex mx-8 w-fit p-2 gap-10">
          <div className="flex items-center justify-center">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              id="slide"
              className="bg-black text-red-600 w-30 cursor-pointer"
            />

            <label htmlFor="slide">Length:{length}</label>
          </div>

          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              value={numberAllowed}
              name="numberAllowed"
              id="numberAllowed"
              onChange={() => {
                setNumberAllowed(!numberAllowed);
              }}
            />
            <label htmlFor="numberAllowed">NumberAllowed</label>
          </div>

          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              value={characterAllowed}
              name="characterAllowed"
              id="characterAllowed"
              onChange={() => {
                setCharacterAllowed(!characterAllowed);
              }}
            />
            <label htmlFor="characterAllowed">CharacterAllowed</label>
          </div>
        </span>
      </div>
      <PasswordGenerator />
    </>
  );
}

export default App;
