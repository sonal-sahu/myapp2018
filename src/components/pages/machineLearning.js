import React, { Component } from 'react';

import{
	Link
}from 'react-router-dom';

class MachineLearning extends Component {
  render() {
    return (
     <div className="container-fluid">
    
        <div className="rowML">
  	       <div className="columnleftML">
	             <div className="firstrowML">

                    <div className="imageColumnML">
                      <img className="imageID" src={require('./machineLearning.jpg')} alt="Machine Learning Icon" />
                 	  </div>


                    <div className="headerColumnML">
                      <h3>Basics of Machine Learning </h3>
                      <h6>Apr 23,2017</h6>
                    </div>

                </div> 

               <div className="paraML">
                  <p> Machine learning is closely related to (and often overlaps with) computational statistics, which also focuses on prediction-making through the use of computers. It has strong ties to mathematical optimization, which delivers methods, theory and application domains to the field. Machine learning is sometimes conflated with data mining, where the latter subfield focuses more on exploratory data analysis and is known as unsupervised learning.Machine learning can also be unsupervised and be used to learn and establish baseline behavioral profiles for various entities and then used to find meaningful anomalies.</p>
                  <p>
                 Within the field of data analytics, machine learning is a method used to devise complex models and algorithms that lend themselves to prediction; in commercial use, this is known as predictive analytics. These analytical models allow researchers, data scientists, engineers, and analysts to "produce reliable, repeatable decisions and results" and uncover "hidden insights" through learning from historical relationships and trends in the data.
                  </p>
                  <p>
                  Effective machine learning is difficult because finding patterns is hard and often not enough training data are available; as a result, machine-learning programs often fail to deliver.
                  </p>
               </div>

               

  	        </div>
  	       <div className="columnrightML">
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

export default MachineLearning;
