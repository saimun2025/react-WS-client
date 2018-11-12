import React, { Component } from 'react';
import { getToken } from './adalConfig';
class App extends Component {

    componentDidMount() {
        const socket = new WebSocket('ws://192.168.1.63:3001?token=PHNhbWxwOlJlc3Bvz0idXJuOm9h');
        socket.onopen = function() {
            socket.send(JSON.stringify({message: getToken() }));
        }
    }
    render() {
        return (
            <div className="App">App</div>
        )
    }
 }

 export default App;