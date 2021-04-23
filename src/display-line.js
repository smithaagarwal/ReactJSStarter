import React, {Component} from 'react';

export default class DisplayLine extends Component {
    // constructor(props) { //even if you don't write this constructor javascript does it for you
    //     super(props);
    // }
    render() {
        //  const value = this.props.value;
       // const index = this.props.index;

        //by using destructuring in javascript the above 2 line can be written as 
       // const {index, value} = this.props;
       // const { index, value } = this.props;
       const { value } = this.props;
      //  return <li key={ index.toString() }>{ value }</li>; //key should be at the children level and not here
      return <li>{ value }</li>;
       // <li key={index.toString() }>{number}</li>);
    }
}