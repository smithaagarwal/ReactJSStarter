import React, {Component} from 'react';
import Greet from './greet';
import Name from './name';


export default class App extends Component {
    
   
    render() {
        const pets = [new Name('Khushi'),new Name('Lucky'), new Name('Tuffy')];
        return <div>
                <Greet name='Shammi' pets={pets} />
            </div>;
    }
}