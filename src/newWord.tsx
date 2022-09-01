import "./form.css";
import React, { useState, useRef } from "react";

const WordForm = () => {
  const [word, setWord] = useState("");
  const [palindrome, setPalindrome] = useState(false);
  const [notpalindrome, setnotPalindrome] = useState(false);
  const [error, setError] = useState("");
  const [isSubmited, setIssubmited] = useState(false);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };
  const addWordHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!word) {
      setError("Word can't be empty!");
    } else {
      setError("");
      isPalindrome(word);
        
      setIssubmited(true)
    }
  };

  const isPalindrome = (word: string) => {
    let separated = word.split("");
    let reverse = separated.reverse().join("");
    if (reverse.toLowerCase() === word.toLowerCase()) {
      setPalindrome(true);
    } else {
      setnotPalindrome(true);
    }
  };

  return (
    <>
      <section className="form__wrapper"
      >

     
        <div 
        className={`${!isSubmited ? 'form__container' :
        `${palindrome ? 'palindrome' : 'notpalindrome'}`
        }`}
       >
          {palindrome && `${word} is a palindrome!`}
          {notpalindrome && `${word} is not a palindrome!`}
          <form onSubmit={addWordHandler} className="form">
            <h4>Enter the word</h4>

            <input
              value={word}
              onChange={changeHandler}
              name="word"
              placeholder="Your Word"
              type="text"
              id="word"
            />
          </form>
          <p style={{ color: "red" }}>{error}</p>
          <button
            onClick={addWordHandler}
            type="submit"
            className="button__submit"
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default WordForm;
