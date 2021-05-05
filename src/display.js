import React,  {Component } from 'react';

export default class Display extends Component {
    constructor(props) {
        super(props);

        //initializing state from property
        this.state = {
            count: this.props.start 
            //dont need to set every app property to state. When app changes the property it re-renders, and when it re-renders the display, the rendering pulls the updated property value.
            //but if its set to state in constructor, if the display component is already created at the app, the constructor is not called again and hence the hour minute seconds wont get updated.
            //hour: this.props.hour ,
            //minute: this.props.minute ,
            //second: this.props.second
        };
    }

    componentDidMount() {
        this.idInterval = setInterval(() => this.increment(), 1000 );
    }

    componentWillUnmount() {
        clearInterval(this.idInterval);
    }

    //life cycle method called regularly
    //returns the new state
    //updates the state if props sent by parent is updated
    //new state from old state and current properties
    static getDerivedStateFromProps(props, state) {
        if(props.start > state.count) {
           return {count:props.start} ;
        }
        return null;
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return <span>
                <span>{this.state.count}</span>
            </span> ;
    }
}

Display.defaultProps = {
    start: 1000
}