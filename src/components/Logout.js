import React, {Component} from 'react';
import {logout} from '../store/actions'
import {connect} from 'react-redux'

class Logout extends Component {
    componentWillMount(){
        this.props.logout();
        this.props.history.push('/login');
    }
    render() {
        return (
            <div>Logout</div>
        );
    }
}


export default connect(null,{logout}) (Logout);
