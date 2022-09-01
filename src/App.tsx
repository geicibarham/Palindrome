import React from 'react';
import WordForm from './newWord';
import classes from './App.module.css';
import Nav from './nav';
import Footer from './footer';
function App() {
  return (
<>
<div className={classes.App}>
  <Nav />
  <WordForm />
  </div>
<Footer />
  </>
  );
}

export default App;
