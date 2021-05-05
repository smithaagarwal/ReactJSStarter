import React, {Component} from 'react';
import Display from './display'


export default class App extends Component {

    constructor(props) {
        super(props);
        this.begin = 10;
    }
    componentDidMount() {
        //helps to trigger the render every second
        setInterval(() => this.setState({}), 1000);
        setInterval(() => this.begin = 50, 10000 );
    }
   
    render() {
        const now = new Date();


        return <div>
            In App: {now.getSeconds()} 
            <div />
        <Display  start ={this.begin } hour={now.getHours()} minute={now.getMinutes() } second={now.getSeconds()} />
        </div>
    }
}