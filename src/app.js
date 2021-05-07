import React, {Component} from 'react';
import Greet from './greet';


export default class App extends Component {
    
   
    render() {
        const pets = ['Khushi','Lucky','Tuffy'];
        return <div>
                <Greet name='Shammi' pets={pets} />
                <Greet name='Swaru' pets={['Swaru', 'Lucky']} />
            </div>;
    }
}