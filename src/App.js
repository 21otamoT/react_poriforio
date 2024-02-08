import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <Header onTabChange={setActiveTab}/>
      <Main/>
      <Footer/>
    </>
    
  );
}

export default App;
