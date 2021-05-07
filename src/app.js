import React, {Component, ComponentElement} from 'react';

export default class App extends Component {
    constructor(props) {
        super (props);

        this.state= {
            count: 0
        }
    }

    incrementCounter() {
        this.setState({
            count:this.state.count+1
        });
    }

    decrementCounter() {
        this.setState({
            count:this.state.count-1
        });
    }
   
    render() {
        return <div>
            <p> Count : {this.state.count}</p>
            <button onClick = {()=> this.incrementCounter()}>Increment</button>
            <span>  </span>
            <button onClick = {()=> this.decrementCounter()}>Decrement</button>
        </div>;
    }
}