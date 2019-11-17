import React from 'react';
import { Button, Form, Grid, Header, Segment, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {requestRegistartion} from '../_actions/loginInfoAction'


var mapStateToProps = (state) => {
    return {
    }
}

var mapDispatchToProps = (dispatch) => {
    return {
        requestRegistration : (requestData) => dispatch(requestRegistartion(requestData))
    }
}

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            email: "",
            contactNumber: "",
            password: "",
            submitted: false
        };
    }

    changeUserName = (event) => {
        this.setState({ username: event.target.value });
    }

    changeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    changeContactNumber = (event) => {
        this.setState({ contactNumber: event.target.value });
    }

    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = (event) => {
        if (this.state.username.length == 0 || this.state.email.length == 0 || this.state.contactNumber.length == 0 || this.state.password.length == 0 || this.state.contactNumber.length < 10 || !this.state.email.contains("@"))
            alert("Validation Failed")
        else{
            let requestDATA = {
                emailId : this.state.email,
                password : this.state.password,
                name : this.state.username,
                mobileNumber : this.state.contactNumber
            }
            this.props.requestRegistration(requestDATA);
        }
    }

    handleOnSignInClick = (event) =>{
        this.props.history.push("/")
    }
    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Icon name='cogs' /> Register
                </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='User Name' onChange={this.changeUserName} />
                            <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' onChange={this.changeEmail} />
                            <Form.Input fluid icon='mobile alternate' iconPosition='left' placeholder='Contact Number' onChange={this.changeContactNumber} />
                            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={this.changePassword} />
                            <div fluid>
                                <Button color='teal' size='large' onClick={this.handleOnSignInClick}>
                                    Sign In
                    </Button>
                                <Button color='teal' size='large' onClick={this.handleSubmit}>
                                    Register
                    </Button>
                            </div>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);