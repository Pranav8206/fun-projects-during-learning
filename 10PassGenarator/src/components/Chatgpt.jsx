import React, { useState, useEffect } from "react";

const PasswordGenerator = () => {
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let baseChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let characters = baseChars;
    let guaranteedChars = [];

    if (includeNumbers) {
      characters += numberChars;
      guaranteedChars.push(randomChar(numberChars));
    }

    if (includeSpecialChars) {
      characters += specialChars;
      guaranteedChars.push(randomChar(specialChars));
    }

    // Fill the rest of the password length
    const remainingLength = length - guaranteedChars.length;
    let result = guaranteedChars;

    for (let i = 0; i < remainingLength; i++) {
      result.push(randomChar(characters));
    }

    // Shuffle to avoid fixed guaranteed char positions
    setPassword(shuffleArray(result).join(""));
  };

  const randomChar = (charSet) => {
    const index = Math.floor(Math.random() * charSet.length);
    return charSet[index];
  };

  const shuffleArray = (array) => {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");
    }
  };

  useEffect(() => {
    generatePassword();
  }, [includeNumbers, includeSpecialChars, length]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">🔐 Password Generator by chatgpt</h2>

        <div className="space-y-4">
          {/* Length Slider */}
          <div>
            <label className="text-gray-700 text-sm font-medium block mb-1">
              Password Length: <span className="font-bold">{length}</span>
            </label>
            <input
              type="range"
              min="6"
              max="30"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-indigo-600"
            />
          </div>

          {/* Checkboxes */}
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            <span className="text-gray-700 text-sm">Include Numbers</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600"
              checked={includeSpecialChars}
              onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            />
            <span className="text-gray-700 text-sm">Include Special Characters</span>
          </label>

          {/* Generated Password Display */}
          <div className="bg-gray-100 p-3 rounded-md flex items-center justify-between">
            <span className="text-gray-800 font-mono break-all">{password}</span>
            <button
              onClick={copyToClipboard}
              className="ml-4 text-sm text-indigo-600 hover:underline"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
