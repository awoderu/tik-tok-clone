import React from 'react';
import './App.css';
import Video from './video';


function App() {
  return (
    // BEM
    <div className="app">
      {/* <h1>
        Hello clever programmers lets build the tik tok clone
      </h1> */}
     
        <div className='app__videos'>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
         </div>
      
      
     
      
    </div>
  );
}

export default App;
