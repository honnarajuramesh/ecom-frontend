import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Signup} />
          <Route path='/Login' component ={Login} />
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
