import React, {Component, ComponentElement} from 'react';
import ReactDom from 'react-dom';
import Greet from './greet';


export default class App extends Component {
    
   
    render() {
        //Outer curly us for specifying expression and inner curly is for specifying map
        return <span>
            <p style={{backgroundColor:'red', color:'white'}}>React </p>
            <span className="highlighted">Hello </span>
            <Greet name='Bob'></Greet>
            <Greet name='Bobo'></Greet>
            <Greet />
        </span>;
    }
}

