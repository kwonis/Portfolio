// App.tsx

import React from 'react';
import './App.css';
import Main from './pages/Main'; // Main 컴포넌트를 불러옵니다.

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Main /> {/* Main 컴포넌트를 추가합니다. */}
      </header>
    </div>
  );
}

export default App;
