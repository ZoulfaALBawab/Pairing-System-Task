import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class Pairing extends React.Component {

  constructor(){
  		super();
  		this.state = {
  			students:[],
  			paired:[]
  		};
  	}
    





render(){
return (

  <div>
<button onClick= {() => {this.pair()}}>Pair</button>
<button onClick= {() => {this.save()}}>Save</button>
<table>
<th>
<td>Student1</td>
<td>Student2</td>
</th>
{ this.state.paired.map( (pair) => {
              return(
                  <tr>
                    <td>{pair.student1}</td>
                    <td>{pair.student2}</td>
                  </tr>

              )
            }
          )
}
</table>

</div>

 )


}
}

export default Pairing;
