import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Entry from './components/entry-1.jsx';
import AddStudent from './components/addStudents-2.jsx';
import Pairing from './components/pairingStudents-3.jsx';
import History from './components/history-4.jsx';

class App extends React.Component {


render(){
return (

    			<Router>
		      		<div>
					 	<Route exact path='/' component= {Entry}/>
            <Route exact path='/newstudent'  component={addStudent}/>
			    		<Route exact path='/pairing'  component={Pairing}/>
              <Route exact path='/history' component={History}/>

		     		</div>
		      	</Router>
)


}
}

ReactDOM.render(<App />, document.getElementById('app'));
