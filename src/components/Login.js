import React from 'react';
import {Grid,Row,Col,Panel,Glyphicon, Button} from 'react-bootstrap';
import FieldGroup from './Util/FieldGroup';
import logo from '../logo.svg'
import './css/Login.css'
import {connect} from 'react-redux'
import {successLogin } from '../store/actions'
import axios from 'axios'
class Login extends React.Component {
    handleClick = () =>{
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        axios.post('http://localhost:8081/login',{username,password})
            .then(res=>{
                this.props.successLogin(res.data);
                this.props.history.push('/');
            }).catch(err=>{
                console.log("err",err);
        });
    };
    render() {
        return (
            <Row>
                <Row className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome</h1>
                </Row>
                <Grid style={{marginTop:20}}>
                    <Row>
                        <Col md={6} mdoffset={5} sm={8} smOffset={3}>
                            <Panel bsStyle="info">
                                <Panel.Heading> <Panel.Title componentClass="h3">Sign In</Panel.Title> </Panel.Heading>
                                <Panel.Body>
                                    <form>
                                        <div className="input-group">
                                            <span className="input-group-addon"><Glyphicon glyph="user"/></span>
                                            <FieldGroup id="username" type="text" placeholder="username" ref="username"/>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-addon"><Glyphicon glyph="lock"/></span>
                                            <FieldGroup id="password" type="password" placeholder="pass" ref="password"/>
                                        </div>
                                        <Col sm={12} smOffset={5} >
                                            <Button bsStyle="primary" onClick={this.handleClick}>Login </Button>
                                        </Col>
                                    </form>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </Row>
        );
    }
}


/*const mapStateToProps = state =>{
    return {
        user: state.user
    }
};*/



export default connect(null,{successLogin})(Login);