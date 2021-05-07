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
    pets: function(properties, propName, componentName) {
        const petNames = properties[propName];
        const setOfPetNames = new Set(petNames);
        if(petNames.length != setOfPetNames.size)
            return new Error(`There are duplicate names in the list of pets ${petNames} passed in component ${componentName}`);

      //  console.log(properties.name);
        if (petNames.includes(properties.name))
            return new Error(`The names of the pets ${petNames} should not be the same as the person ${properties.name}`);
        return null;

    }
}




