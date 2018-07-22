import React from 'react';
import {Grid,Row,Col,Panel,Glyphicon, Button} from 'react-bootstrap';
import FieldGroup from './Util/FieldGroup';
import logo from '../logo.svg'
import './Login.css'
export default class Login extends React.Component {
   

    render() {
        return (
            <Row>
                <Row className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome</h1>
                </Row>
                <Grid style={gridStyle}>
                    <Row>
                        <Col md={6} mdoffset={5} sm={8} smOffset={3}>
                            <Panel bsStyle="info">
                                <Panel.Heading> <Panel.Title componentClass="h3">Sign In</Panel.Title> </Panel.Heading>
                                <Panel.Body>
                                    <form>
                                        <div className="input-group">
                                            <span className="input-group-addon"><Glyphicon glyph="user"/></span>
                                            <FieldGroup id="login-username" type="text" placeholder="username"/>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-addon"><Glyphicon glyph="lock"/></span>
                                            <FieldGroup id="login-password" type="password" placeholder="pass"/>
                                        </div>
                                        <Col sm={12} smOffset={5} >
                                            <Button bsStyle="primary" onClick={() => alert("sarasa")}>Login </Button>
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

const gridStyle = {
    marginTop:20
};
