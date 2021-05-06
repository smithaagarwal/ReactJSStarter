import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Greet extends Component {
    render() {
        return <div> Namaskara { this.props.name }</div>
    }
}

//having default value for a property if nothing is passed
// Greet.defaultProps = {
//     name: 'Sir'
// }

// //to validate by providing the type for a property passed
// Greet.propTypes = {
//     name: PropTypes.string
// }

//additional validation of the property using a function
Greet.propTypes = {
    name: function(props, propertyName, componentName) {
        
        const name = props[propertyName];

        if(!name) {
            return new Error(`You didn't provide the name. Check the code in the component '${componentName}'`);
        }
        if(!/[A-Z]/.test(name[0])) {
            return new Error(`The name '${name}' for the property '${propertyName}' in the component '${componentName}' should be capitalised `);
        }
        return null;
    }
}

//to mark a property value is required
// Greet.propTypes = {
//     name: PropTypes.string.isRequired
// }


