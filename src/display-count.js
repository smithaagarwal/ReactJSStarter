import React , {Component} from 'react';

export default class DisplayCount extends Component {
    render() {
        const children = this.props.count%2 == 0 ? 
        <span>{this.props.children}</span> : ' '
        return <span>
            <span>{this.props.count}</span>
                { children}
            </span>;
    }
}