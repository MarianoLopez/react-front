import React, {Component} from 'react';
import {logout} from '../store/actions'

class Logout extends Component {
    componentWillMount(){
        logout();
        this.props.history.push('/login');
    }
    render() {
        return (
            <div>Logout</div>
        );
    }
}


export default Logout;
