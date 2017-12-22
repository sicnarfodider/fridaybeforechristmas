import React from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './home';
import GetData from './get-data';

const App = () => (
    <div>
      <ul>
        <li><Link to="/">WAYNE</Link></li>
        <li><Link to="/getdata">GARTH</Link></li>
      </ul>
      <Route exact path="/" component={Home}/>
      <Route path="/getdata" component={GetData}/>
    </div>
);

export default App;
