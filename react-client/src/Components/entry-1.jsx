import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class Entry extends React.Component {
render(){
return (

		   	<div>
             <Link to ='/newstudent'><button>Add Student</button></Link>
             <Link to ='/pairing'><button>Pairing</button></Link>  
             <Link to ='/history'><button>History</button></Link>
		  	</div>
 )


}
}
