import React, {Component} from 'react';



export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            left: ['one', 'two', 'three'],
            right: ['four']
        };
    }
   
    moveRight(text) {
      //  const text = e.target.textContent;
        let {left, right} = this.state;

        left = left.filter(item => item!==text);
        right = right.slice();
        right.push(text);

        this.setState({left,right});
    }

    moveLeft(text) {
       // const text = e.target.textContent;
        let {left, right} = this.state;


        right = right.filter(item => item!==text);
        left = left.slice();
        left.push(text);

        this.setState({left,right});
    }


    render() {
        const {left, right} = this.state;
        const list = left.length > right.length? left: right;
        return <div>
            <table width="100%">
                <tbody>
                    <tr><th>left</th><th>right</th></tr>
                    {
                        list.map((ignore,index)=>[left[index],right[index]])
                            .map(([leftText='',rightText=''], index)=>
                            <tr key={index}>
                                <td onClick = {() => this.moveRight(leftText)}>{leftText}</td><td onClick = {() => this.moveLeft(rightText)}>{rightText}</td>
                            </tr>)
                        

                    }
                </tbody>
            </table>
        </div>;
    }
}