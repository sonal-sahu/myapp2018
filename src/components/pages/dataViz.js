import React, { Component } from 'react';

import{
	Link
}from 'react-router-dom';

class DataViz extends Component {
  render() {
    return (
     <div className="container-fluid">
		<div className="rowDV">
			<div className="columnleftDV" >

				<div className="firstrowDV">

						<div className="imageColumnDV">
                      	  <img className="imageDV" src={require('./dataVisualization.png')} alt="Data Visualization Icon" />
                 	    </div>

                 	    <div className="headerColumnDV">
                      		<h3>Data Visualization </h3>
                      		<h6>Jan 14,2018</h6>
                    	</div>

				</div>

				<div className="paraDV">
					<p>
						A primary goal of data visualization is to communicate information clearly and efficiently via statistical graphics, plots and information graphics. Numerical data may be encoded using dots, lines, or bars, to visually communicate a quantitative message.Effective visualization helps users analyze and reason about data and evidence. It makes complex data more accessible, understandable and usable. Users may have particular analytical tasks, such as making comparisons or understanding causality, and the design principle of the graphic (i.e., showing comparisons or showing causality) follows the task. Tables are generally used where users will look up a specific measurement, while charts of various types are used to show patterns or relationships in the data for one or more variables.
					</p>
					<p>
					Data visualization is both an art and a science.It is viewed as a branch of descriptive statistics by some, but also as a grounded theory development tool by others. Increased amounts of data created by Internet activity and an expanding number of sensors in the environment are referred to as "big data" or Internet of things. Processing, analyzing and communicating this data present ethical and analytical challenges for data visualization.The field of data science and practitioners called data scientists help address this challenge.
					</p>
				</div>

			</div>

			<div className="columnrightDV" >
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

export default DataViz;
