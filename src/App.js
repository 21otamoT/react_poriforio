import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sites from './components/Tabs/Site';
import WorksApp from './components/Tabs/WorksApp';
import Design from './components/Tabs/Design';
import PreloadImage from './components/PreloadImage';
import Tabs from './components/Tabs/Tabs';
import Skill from './components/skill';
import Selfintroduction from './components/Self-introduction';
import Contact from './components/Contact';


const App = () => {
  const tabs = [{id:0, name:'サイト'},
                {id:1, name:'アプリ'},
                {id:2, name:'デザイン'}]

  const content = [<Sites/>,<WorksApp />,<Design />]

  return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={
            <div>
              
            </div>
          }>
          </Route>
          <Route path="/works" element={<Tabs tabs={tabs} content={content}/>}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/about" element={<Selfintroduction />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
