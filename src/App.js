import React, { Component } from 'react';

import{
	BrowserRouter as Router,
	Route,
	Link
}from 'react-router-dom';


//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import AboutMe from './components/pages/aboutMe';
import MachineLearning from './components/pages/machineLearning';
import DataViz from './components/pages/dataViz';
import DevOps from './components/pages/devOps';


//includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
       
		<Header />

		<Route exact path='/' component={Homepage}/>
		<Route exact path='/AboutMe' component={AboutMe}/>
		<Route exact path='/MachineLearning' component={MachineLearning}/>
		<Route exact path='/DataViz' component={DataViz}/>
		<Route exact path='/DevOps' component={DevOps}/>

		<Footer />

      </div>
    </Router>
    );
  }
}

export default App;
