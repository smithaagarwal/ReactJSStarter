import React, {Component, ComponentElement} from 'react';
import ReactDom from 'react-dom';
import Greet from './greet';


export default class App extends Component {
    
   
    render() {
        return <span>
            <p style={{backgroundColor:'red', color:'white'}}>React </p>
            <span className="highlighted">Hello </span>
            <Greet name='Bob'></Greet>
            <Greet name='Bobo'></Greet>
            <Greet />
        </span>;
    }
}

