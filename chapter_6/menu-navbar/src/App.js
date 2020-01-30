import React from 'react';
import './App.css';

import News from './components/News/News'
import Comments from './components/comments/Comments';

function App() {

  return (
    <div className="App">
      <News />
      <Comments />
    </div>
  );
}

export default App;
