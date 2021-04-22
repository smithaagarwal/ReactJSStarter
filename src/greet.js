import React , {Component} from 'react';

export default class Greet extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return( 
        <div>    
        <div>
            My name is : {this.props.name}
        </div>
        <div>My name length is:{this.props.name.length}</div> 
        </div>)
    }
}
Greet.defaultProps = {
    name : 'Jimmy'
};