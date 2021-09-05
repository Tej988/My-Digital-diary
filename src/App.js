import {BrowserRouter as Router ,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import View from './components/View';
import Create from './components/Create';


function App() {
  return (
    
   
   <Router>

   <Navbar/>

    <Route  exact path="/" >
    <Home/>
    </Route>

    <Route  exact path="/view">
    <View/>
    </Route>

    <Route  exact path="/create">
    <Create/>

    </Route>


   </Router>
  );
}

export default App;
