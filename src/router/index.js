import React, {Component} from 'react';
import {Switch, Route, Redirect, BrowserRouter as Router} from "react-router-dom";
import {routes} from './configuration'
import {Forbidden,NotFound,Logout} from '../components'
import {connect} from 'react-redux'

class RouterConfiguration extends Component {
    render() {
        let isAuthenticated = this.props.isAuthenticated;
        let userRoles = this.props.roles;
        let _routes =  routes.map((route,i) => {
            if (route.needAuth){
                return <PrivateRoute key={i} path={route.path} exact component={route.component} roles={route.roles} userRoles={userRoles} />
            } else{
                if(route.path==="/login" && isAuthenticated){
                    return null;
                }else{
                    return <Route key={i} path={route.path} exact component={route.component} />
                }
            }
        });
        return (
            <Router>
                <div>
                    <Switch>
                        {_routes}
                        (isAuthenticated)? <Route path={"/logout"} component={Logout}/> : null;
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}





const PrivateRoute = ({ component: Component,userRoles,roles,...rest }) => (
    <Route
        {...rest}
        render={props =>{
            console.log("user roles",userRoles);
            if(userRoles<1){
                console.log("current",props.location.pathname);
                return (props.location.pathname==="/login")? null : <Redirect to={{pathname: "/login", state: { from: props.location }}}/>
            }else{
                let userHasAccess = roles.some(r=> userRoles.includes(r));
                if(userHasAccess){
                    return <Component {...props} />
                }else{
                    return <Forbidden/>
                }
            }
        }}
    />
);


const mapStateToProps = state =>{
    return {
        isAuthenticated: state.user.isAuthenticated,
        roles: state.user.credential.roles
    }
};

export default connect(mapStateToProps,null)(RouterConfiguration);
