//import { AppBar as MuiAppBar, Toolbar} from '@material-ui/core/';
//import logo from './logo.svg';
//import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './pages/main.js';
import Accounthome from './pages/accountHome.js';
import Error from './pages/error.js';


//this switches to different pages
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element={<Main />}/>
        <Route exact path = "/account" element= {<Accounthome />}/>
        <Route path = "*" element= {<Error />}/>
      </Routes>
    </Router>
 
  );

}
export default App;
