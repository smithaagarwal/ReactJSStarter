import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Greet extends Component {
    render() {
        return <div> 
            <span>
            Hello { this.props.name } and pets:
            <ul>
                {this.props.pets.map(petName => <li key={petName}>  {petName}  </li> )}
                
            </ul>
            </span>
            </div>
    }
}

//having default value for a property if nothing is passed
Greet.defaultProps = {
    name: 'Sir'
}


//additional validation of the property using a function
Greet.propTypes = {
    name: PropTypes.string,
    pets: PropTypes.arrayOf(PropTypes.string) //helps to specify it should be an array of strings
}

//to mark a property value is required
// Greet.propTypes = {
//     name: PropTypes.string.isRequired
// }


