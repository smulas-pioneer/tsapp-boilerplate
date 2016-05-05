import * as React from 'react';
import * as BS from 'react-bootstrap';

export class HelloWorld extends React.Component<any,any> {
    constructor(props){
        super(props);
    }
    render(){
        return (
           <BS.Button bsStyle="primary">
                Hello World!
           </BS.Button>
        );
    }
}