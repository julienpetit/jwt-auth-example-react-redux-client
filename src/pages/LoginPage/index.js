import React, { Component } from 'react';
import LoginForm from '../../modules/auth/components/LoginForm';

class App extends Component {

    render() {
        return (
            <div className="App">
                <LoginForm />
            </div>
        );
    }
}

export default App;
