import React , {Component} from 'react';
import PropTypes from 'prop-types';

export default class Greet extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return( 
        <div>    
        <div>
            My name is : {this.props.name} and I am {this.props.age} years old
        </div>
        <div>My name length is:{this.props.name.length}</div> 
        </div>)
    }
}
Greet.defaultProps = {
    name : 'no name entered' ,
    age : 0 
};
//the below validation happens for properties passed and not for the default properties. 
//so if there is a type mistake in default it will not validate and throw an error in the console
Greet.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number
}