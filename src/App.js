import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';

function App() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <Header onTabChange={setActiveTab}/>
      <Main/>
    </>
    
  );
}

export default App;
