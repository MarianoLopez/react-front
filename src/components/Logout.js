import React, {Component} from 'react';
import {userStore} from "../store";

class Logout extends Component {

    logout = () =>{ userStore.dispatch({"type":"LOGOUT"});};

    componentWillMount(){
        this.logout();
        this.props.history.push('/login');
    }
    render() {
        return (
            <div>Logout</div>
        );
    }
}


export default Logout;
