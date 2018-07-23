import React from 'react';
import {Grid,Row,Col,Panel,Glyphicon, Button} from 'react-bootstrap';
import FieldGroup from './Util/FieldGroup';
import logo from '../logo.svg'
import './css/Login.css'
import {userStore} from '../store'
export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    componentWillMount(){
        userStore.subscribe(()=>{
            console.log("user store change", userStore.getState());
        });
    }

    handleClick = () => {
        userStore.dispatch({"type":"LOGIN","payload":{username:this.state.username,password:this.state.password}});
    };

    updateState = (event) =>{ this.setState({[event.target.id]:event.target.value});};

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
                                    <form onChange={this.updateState}>
                                        <div className="input-group">
                                            <span className="input-group-addon"><Glyphicon glyph="user"/></span>
                                            <FieldGroup id="username" type="text" placeholder="username" value={this.state.username}/>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-addon"><Glyphicon glyph="lock"/></span>
                                            <FieldGroup id="password" type="password" placeholder="pass" value={this.state.password}/>
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

const gridStyle = {
    marginTop:20
};
