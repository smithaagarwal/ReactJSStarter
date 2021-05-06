import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Name from './name';

export default class Greet extends Component {
    render() {
        return <div> 
            <span>
            Hello { this.props.name } and pets:
            <ul>
                {this.props.pets.map(petName => <li key={petName.name}>  {petName.name}  </li> )}
                
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
    pets: PropTypes.arrayOf(PropTypes.instanceOf(Name))
}
