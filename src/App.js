import React, { Component } from 'react';
import './App.css';


/*
* For react component's testing check out http://airbnb.io/enzyme/ ==> enzyme project.
* */


class App  extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return <p>{"Testing with Jasmine"}</p>
    }
}
export default App;