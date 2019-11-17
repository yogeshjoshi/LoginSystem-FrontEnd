import React from 'react';
import { Button, Form, Grid, Header, Message, Segment, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {requestLogin,requestVerifyOTP} from '../_actions/loginInfoAction';
import {Link} from 'react-router-dom'

var mapStateToProps = (state) => {
    return {
        verificationResponse : state.verificationResponse
    }
}

var mapDispatchToProps = (dispatch) => {
    return {
        dispatchLoginRequest : (requestData) => dispatch(requestLogin(requestData)),
        dispatchVerifyOTP : (requestData) => dispatch(requestVerifyOTP(requestData))
    }
}

class OTPLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactNumber: "",
            isVerify: false,
            otp : "",
            verificationResponse : ""
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.verificationResponse !== prevState.verificationResponse) {
            return{
                verificationResponse : nextProps.verificationResponse
            };
        }
    }

    handleOTPClick = () => {
        if (this.state.contactNumber.length < 10) {
            alert("Mobile Number Validation Failed, Please Enter Correct Number");
        } else {
            this.setState({ isVerify: true });
            let requestData = {
                mobileNumber : this.state.contactNumber,
                loginType : "otpBased"
            }
            this.props.dispatchLoginRequest(requestData);
        }
    }

    handleChange = (e) => {
        this.setState({ contactNumber: e.target.value });
    }

    handleOTPChange = (event) =>{
        console.log(event.target.value);
        this.setState({otp:event.target.value});
    }

    handleOTPVerify = ()=>{
        if(this.state.otp.length<6)
            alert("OTP is 6 Digit Length, Please Re-Verify");
        else{
            let requestData = {
                mobileNumber : this.state.contactNumber,
                password : this.state.otp
            }
            this.props.dispatchVerifyOTP(requestData);
        }
    }
    render() {
        let {verificationResponse} = this.state;
        if(verificationResponse=="SUCCESS")
            this.props.history.push("/home");
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Icon name='cogs' /> Log-In to Your Account
                </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='mobile alternate' iconPosition='left' placeholder='Mobile Number' onChange={this.handleChange} />
                            {this.state.isVerify ? <Form.Input fluid icon='lock' iconPosition='left' placeholder='OTP' type='input' onChange={this.handleOTPChange}/> : null}
                            <Button color='teal' size='large' onClick={this.handleOTPClick}>
                                Get OTP
                    </Button>
                            {this.state.isVerify ? <Button color='teal' size='large' onClick={this.handleOTPVerify}> Verify OTP</Button> : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(OTPLogin);