import React, {Component, ComponentElement} from 'react';
import ReactDom from 'react-dom';
import Greet from './greet';


export default class App extends Component {
    
   
    render() {
        //Outer curly us for specifying expression and inner curly is for specifying map
        //to ensure property validation age property with string 2 is sent 
        return <span>
            <p style={{backgroundColor:'red', color:'white'}}>React </p>
            <span className="highlighted">Hello </span>
            <Greet name='Bob' age={20}></Greet>
            <Greet name='Bobo'age={24}></Greet>
            <Greet name = 'Sara' age="2"></Greet> 
            <Greet />
        </span>;
    }
}

