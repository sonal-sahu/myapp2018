import React, { Component } from 'react';

import{
	Link
}from 'react-router-dom';


class AboutMe extends Component {
  render() {
    return (
     <div className="container-fluid">

	     <div className="rowAM">

	     		<div className="columnleftAM">

	     			<h1>
	
						About Me!!

					</h1>

					<p>
						Hello, my name is Sonal Sahu,pursuing MS in Computer Science.
					</p>	
					<p>
						This blog is the industry's online resource for big data practitioners. From Analytics to Data Integration to Visualization, it provides a learning on various subjects of Data Science.
					</p>


	     		</div>


	     		<div className="columnrightAM">
	     			<nav>
	  	 				 <a className="navmachine_learning" href="/MachineLearning">MACHINE LEARNING</a><br/>
        				 <a className="navmdataviz" href="/DataViz">DATAVIZ</a><br/>
        				 <a className="navmdevops" href="/DevOps">DEV/DEVOPS</a>
   	
  					 </nav>

	     		</div>





	     </div>




	
     </div>
    );
  }
}

export default AboutMe;
