import React, {Component} from 'react';
import Greet from './greet';


export default class App extends Component {
    
   
    render() {
        return <div>
            <Greet name='Shammi'/>
            <Greet name='Swaru'/>
            <Greet />
            </div>;
    }
}