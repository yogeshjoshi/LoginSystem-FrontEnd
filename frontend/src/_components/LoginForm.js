import React from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {requestLogin} from '../_actions/loginInfoAction'
import {Link} from 'react-router-dom'

var mapStateToProps = (state) => {
    return {
        loginResponse : state.loginResponse
    }
}

var mapDispatchToProps = (dispatch) => {
    return {
        dispatchLoginRequest : (data) => dispatch(requestLogin(data))
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            submitted: false,
            loginResponse : ""
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.loginResponse !== prevState.loginResponse) {
            return{
                loginResponse : nextProps.loginResponse
            }
        }
        return null;
    }

    changeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    changePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    onSubmitLogin = () => {
        console.log("YYYYYYYYYYYYYYYYYYYy")
        if (this.state.email.length == 0 || this.state.password.length == 0)
            alert('Please Put Required Fields');
        else{
            let requestDATA = {
                emailId : this.state.email,
                password : this.state.password,
                loginType : "emailBased"
            }
            this.props.dispatchLoginRequest(requestDATA);
        }

    }

    handleOnOTPClick = ()=>{
        this.props.history.push("/otplogin")
    }

    pushIntoHistory = ()=>{
        this.props.history.push("/home");
    }

    render() {

        let {loginResponse} = this.state;
        if(loginResponse=="SUCCESS")
            this.pushIntoHistory();
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Icon name='cogs' /> Log-In to Your Account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.changeEmail} />
                            <Form.Input icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={this.changePassword} />
                            <div>
                                <Button color='teal' size='large' onClick={this.handleOnOTPClick}>
                                    Sign In Using OTP
                            </Button>
                                <Button color='teal' size='large' onClick={this.onSubmitLogin}>
                                    Login
                            </Button>
                            </div>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <Link to='/register'>Sign Up</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);