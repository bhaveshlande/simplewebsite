import React, { useState } from "react";
import { Textarea } from "flowbite-react";

export const WordCounterHome = () => {
  const [wordCount, setWordCount] = useState(0); // Initialize with 0
  const [charCount, setCharCount] = useState(0); // Initialize with 0
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Initialize button as disabled

  function countWordsAndCharacters() {
    const textarea = document.getElementById("textarea");
    const text = textarea.value;
    // Count words (split by spaces)
    const words = text.trim().split(/\s+/);
    setWordCount(words.length);
    setCharCount(text.length);
    setIsButtonDisabled(text.length === 0);
  }

  function clear() {
    const textarea = document.getElementById("textarea");
    textarea.value = "";
    setWordCount(0); // Reset word count
    setCharCount(0); // Reset character count
    setIsButtonDisabled(true);
  }

  return (
    <>
      <div className="flex flex-col p-10">
        <div className="text-5xl flex justify-center p-2">Word counter</div>
        <div className="flex justify-center p-1">
          free online charcter and word counter
        </div>
      </div>
      <div className="flex-col">
        <div className="flex justify-center p-2">
          <Textarea
            id="textarea"
            onInput={countWordsAndCharacters} // Use onInput event properly
            className="max-w-3xl h-48 mx-5"
            required
            type="text"
            autoComplete="false"
            placeholder="paste your text here!"
          />
        </div>
        <div className="flex justify-center p-2">
          <button
            onClick={clear}
            disabled={isButtonDisabled}
            className="text-gray-900 p-2 px-4 py-2 rounded-sm bg-gray-300 border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            clear
          </button>
        </div>
      </div>

      <div className="flex flex-wrap space-x-96 pl-96">
        <div className="p-3">
          <button className="text-white text-base px-6 py-3 cursor-not-allowed bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            character: {charCount}
          </button>
        </div>
        <div className="p-3 pl-20">
          <button className="text-white text-base px-6 py-3 cursor-not-allowed bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            word: {wordCount}
          </button>
        </div>
      </div>
    </>
  );
};
