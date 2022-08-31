import React from 'react';
import WordForm from './newWord';
import classes from './App.module.css';
import Nav from './nav';
function App() {
  return (
<>
<div className={classes.App}>
  <Nav />
  <WordForm />
  </div>
  </>
  );
}

export default App;
