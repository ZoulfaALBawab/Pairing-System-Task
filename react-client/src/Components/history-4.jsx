import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class History extends React.Component {

	constructor(){
		super();
		this.state = {
			history:[]
		};
	}

	componentDidMount() {
		this.getHp();
	}

	getHp(){
		$.ajax({
			method: 'GET',
			url: '/get',
			success: (history) => {
				this.setState({history:history})
			},
			error: (data) => {
			    console.error('Failed to get students', data);
			}
  		})
	}

	render(){
		return (
		<div>
	    	<ul>
	    		<li>
	    		{ this.state.history.map( (array) => {
												return(
										    			<table>
										    				<th>
										    					<td>Student1</td>
										    					<td>Student2</td>
										    				</th>
										    				
										    			</table>
										    			)
											}
											)}
	    		</li>
	    	</ul>
	    </div>
	    )
	}
}

export default History;
