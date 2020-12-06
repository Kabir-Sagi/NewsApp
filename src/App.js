import AllNews from './Components/AllNews/index'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../src/Components/Navbar/index'
import {BrowserRouter,Route} from 'react-router-dom'
import Health from './Components/HealthComp/index'
import Business from './Components/BusinessComp/index'
import Sports from './Components/SportsComp/index'
import Technology from './Components/TechnologyComp/index'
import Entertainment from './Components/EntertainmentComp/index'
import Search from './Components/SearchComp/index'



function App() {
  
  return (
    
    <div className="App">
      <BrowserRouter>
      <Navbar  />
      <Search />
    
     <Route exact path='/topheadlines' component={AllNews} />
     <Route path='/business' component={Business} />
     <Route path='/technology' component={Technology} />
     <Route path='/sports' component={Sports} />
     <Route path='/health' component={Health} />
     <Route path='/entertainment' component={Entertainment} />
    </BrowserRouter>
    </div>
  );
}

export default App;
