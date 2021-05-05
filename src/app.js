import React, {Component} from 'react';
import Display from './display'


export default class App extends Component {
    constructor(props) {
        super(props);

        this.begin = 10;
    }

    componentDidMount() {
        setInterval(() => this.change(),5000);
    }

    change() {
        this.begin = Math.floor(Math.random() * 100);
        this.setState({}); //to re-render the component
    }

    render() {
        return <div>
            <p> Start: { this.begin }</p>
            <Display start= {this.begin} />
        </div>
    }
}