import React, { useState, useEffect } from 'react';
import AddToHomeButton from './components/AddToHomeButton';

function App() {
  const [isPwa, setIsPwa] = useState(false);

  useEffect(() => {
    const isInStandaloneMode = () => 'standalone' in window.navigator && window.navigator.standalone;
    setIsPwa(isInStandaloneMode());
  }, []);

  return (
    <div>
      <h1>Welcome to My PWA App</h1>
      {!isPwa && <AddToHomeButton />}
    </div>
  );
}

export default App;