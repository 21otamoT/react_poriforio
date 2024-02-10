import './App.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/Footer';
import Work1 from './components/Works/work1';


const App = () => {

  return (
    <>
    {/* <Work1 /> */}
      <Header/>
      <Main/>
      <Footer/>
      {/* <Router>
        <Switch>
          <Route exact path="work1" component={Work1}/>
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
