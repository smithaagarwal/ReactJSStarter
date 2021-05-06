import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Greet extends Component {
    render() {
        return <div> Namaskara { this.props.name }</div>
    }
}

//having default value for a property if nothing is passed
Greet.defaultProps = {
    name: 'Sir'
}

// //to validate by providing the type for a property passed
// Greet.propTypes = {
//     name: PropTypes.string
// }

//additional validation of the property using a function
Greet.propTypes = {
    name: function(props, propertyName, componentName) {
        console.log(`Values: ${props}`);
        console.log(props);
        console.log(propertyName);
        console.log(componentName);
        //when all validation is okay return null
        return null;
        //return error if validation fail
        //return new Error("there's an error");

    }
}

//to mark a property value is required
// Greet.propTypes = {
//     name: PropTypes.string.isRequired
// }


