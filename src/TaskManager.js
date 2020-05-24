import React, { Component } from 'react';

export default class TaskManager extends Component{

	retrieveJSON(){
		var arrayOfValues = [];
		for(var i in localStorage){
		    if(localStorage.hasOwnProperty(i) && i !== 'default'){
		        arrayOfValues.push(localStorage[i]);
		    }
		}
		return arrayOfValues;
	}


	render(){
		return(
			<div>

			<p>{this.retrieveJSON()}</p>

			</div>
		);
	}
}