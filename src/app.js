import React, {Component, ComponentElement} from 'react';
import ReactDom from 'react-dom';
import DisplayLine from './display-line';


export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            numbers : []
        }
    }

    load() {
        this.setState(
            {numbers: [1,2,3,4,5,6]}
        );
    }

    increment() {
        this.setState(
            {numbers: this.state.numbers.map(value => value+1)}
        );
    }
   
     // render() {
    //     const lines = this.state.numbers.map((number,index) =>
    //     createElement('li', {key:index.toString()}, number));
    //     return (createElement('div' , null ,
    //     createElement('h2',null,'Numbers'),
    //     createElement('ul', null, lines),
    //     createElement('button',{onClick:()=>this.load()},'load'),
    //     createElement('span',null,'       '),
    //     createElement('button',{onClick:() => this.increment()},'increment')
    //     ));
    // }

    render () {
        const lines = this.state.numbers.map((number, index) =>
        <DisplayLine value = {number} key={index.toString() } />); 
       // <li key={index.toString() }>{number}</li>);

        return <div>
            <h2>Numbers</h2>
            <ul>{lines}</ul>
            <button onClick = {() => this.load()}>load</button>
            <button onClick = {() => this.increment() }>increment</button>
        </div>
    }
}