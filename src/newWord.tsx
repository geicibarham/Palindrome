import classes from "./form.module.css";
import React, { useState, useRef } from "react";

const WordForm = () => {
  const [word, setWord] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
 
    setWord(e.target.value);
  };
  const addWordHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(word);
    setWord("");
  };
  return (
    <>
      <section className={classes.form__wrapper}>
        <div id={classes.form__container}>
          <form onSubmit={addWordHandler} className={classes.form}>
            <h4>Enter the word</h4>
            <label htmlFor="word">
              Your Word
              <input
                value={word}
                onChange={changeHandler}
                name="word"
                placeholder="Your Word"
                type="text"
                id="word"
              />
            </label>
            <p style={{ color: "white" }}> {word}</p>
          </form>

          <button onClick={addWordHandler} type="submit" className={classes.button__submit}>
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default WordForm;
