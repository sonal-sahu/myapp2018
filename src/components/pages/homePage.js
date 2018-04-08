import React, { Component } from 'react';

import{
	Link
}from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
     <div className="container-fluid">
    
   <div className="row">
  	<div className="columnleftHP" >

    <div className="firstrowHP">

        <img className="imageIDMLHP" src={require('./machineLearning.jpg')} alt="Machine Learning Icon" />

           <a className="link_ml" href="/MachineLearning"><h6 className="first_title_hp"> <b>Machine learning</b></h6></a>
            <h6 className ="machine_date_hp">Apr 23,2017</h6>
               <p className="machine_para_hp">
          
                   Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us self-driving cars, practical speech recognition, effective web search, and a vastly improved understanding of the human genome.
                </p>
                
    </div>

    <div className="secondrowHP">

      <img className="imageIDDVHP" src={require('./dataVisualization.png')} alt="Data Visualization Icon" />
      <a className="link_m2" href="/DataViz"><h6 className="second_title_hp"> <b>Data Visualization</b></h6></a>
        <h6 className ="dataviz_date_hp">Jan 14,2018</h6>
        <p className="dataviz_para_hp">
          Data visualization or data visualisation is viewed by many disciplines as a modern equivalent of visual communication. It involves the creation and study of the visual representation of data, meaning "information that has been abstracted in some schematic form, including attributes or variables for the units of information".
        </p>
    </div>

    <div className="thirdrowHP" >

      <img className="imageDO" src={require('./devOps.png')} alt="Dev/DevOps Icon" />
      <a className="link_m3" href="/DevOps"><h6 className="third_title_hp"> <b>Dev/DevOps</b></h6></a>

        <h6 className ="devops_date_hp">Dec 12,2017</h6>
        <p className="devops_para_hp">
         DevOps (a clipped compound of "development" and "operations") is a software engineering culture and practice that aims at unifying software development (Dev) and software operation (Ops).
        </p>
    </div>

	
  	 </div>
  	<div className="columnrightHP">
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

export default Homepage;
