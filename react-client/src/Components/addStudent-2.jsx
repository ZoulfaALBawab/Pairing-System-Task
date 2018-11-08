import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class AddStudent extends React.Component {
	constructor(props){
	super(props);
	this.state = {
		name: '',
		level:''
		};
}
//have to edit //
deleteStudent(id){
	$.ajax({
		method: 'DELETE',
		url: `/delete${id}`,
		success: (students) => {
			this.props.getStudents();
			console.log("success");
		},
		error: (data) => {
				console.error('Failed getting students', data);
		}
		})
}

updateStudent(id,name,level){
		$.ajax({
	method: 'PUT',
	url: `/update${id}`,
	data: {"name":name,"level": level},
	success:  (data) => {
		console.log("changed successfully",data);
 	},
	error: (data) => {
			console.error('Failed updating student', data);
	}

})

	}


}






render(){
return (

		   	<div>

		  	</div>
 )


}
}

export default AddStudent;
