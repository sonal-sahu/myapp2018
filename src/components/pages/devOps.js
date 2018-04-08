import React, { Component } from 'react';

import{
	Link
}from 'react-router-dom';
class DevOps extends Component {
  render() {
    return (
     <div className="container-fluid">
		<div className="rowDO">

			<div className="columnleftDO">

					<div className="firstrowDO">

	 					<div className="imageColumnDO">
	                      	  <img className="image_do" src={require('./devOps.png')} alt="Dev/DevOps Icon" />
	                 	 </div>

	                 	 <div className="headerColumnDO">
                      		<h3>Dev/DevOps </h3>
                      		<h6>Dec 12,2017</h6>
                    	</div>

					</div>

					<div className="paraDO">
						<p>
							DevOps (a clipped compound of "development" and "operations") is a software engineering culture and practice that aims at unifying software development (Dev) and software operation (Ops). The main characteristic of the DevOps movement is to strongly advocate automation and monitoring at all steps of software construction, from integration, testing, releasing to deployment and infrastructure management. DevOps aims at shorter development cycles, increased deployment frequency, more dependable releases, in close alignment with business objectives.
						</p>

						<p>
							Simple processes become increasingly programmable and dynamic, using a DevOps approach.DevOps aims to maximize the predictability, efficiency, security, and maintainability of operational processes. Very often, automation supports this objective.DevOps integration targets product delivery, continuous testing, quality testing, feature development, and maintenance releases in order to improve reliability and security and provide faster development and deployment cycles. Many of the ideas (and people) involved in DevOps came from the enterprise systems management and agile software development movements
						</p>

					</div>

			</div>

			<div className="columnrightDO" >
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

export default DevOps;
