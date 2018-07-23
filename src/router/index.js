import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Redirect, withRouter} from "react-router-dom";
import Login from '../components/Login'
import Home from '../components/Home'

export class Router extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAuthenticated:false
        }
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/protected" component={Home} />
                </div>
            </BrowserRouter>
        );
    }
}


const fakeAuth = {
    isAuthenticated: false
};

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);
