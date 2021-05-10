import React, {Component, ComponentElement} from 'react';

export default class App extends Component {
    constructor(props) {
        super (props);

        this.state= {
            count: 0
        }
    }

    changeCount(e, value) {
        this.setState({
            count:this.state.count+value
        });
        console.log(`x:${e.clientX} and y:${e.clientY}`);
    }
   
    render() {
        return <div>
            <p> Count : {this.state.count}</p>
            <button onClick = {(e)=> this.changeCount(e, 1)}>Increment</button>
            <span> &nbsp; </span>
            <button onClick = {(e)=> this.changeCount(e, -1)} disabled={this.state.count<1}>Decrement</button>
        </div>;
    }
}