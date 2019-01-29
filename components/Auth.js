import React, { Component } from 'react';
import { View, Button, Text, TextInput, Image } from 'react-native';

import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {postauth} from '../actions';

class PhoneAuthTest extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+7',
      confirmResult: null,
    };
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        // User has been signed out, reset the state
        this.setState({
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+7',
          confirmResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
     if (this.unsubscribe) this.unsubscribe();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { user } = this.state;
    if ((user == null) && (nextState.user)) {
      
      this.sendToken(nextState.user);
    }
    return true;
  }

  signIn = () => {
    const { phoneNumber } = this.state;
    this.setState({ message: 'Sending code ...' });

    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => this.setState({ confirmResult, message: 'Код отправлен' }))
      .catch(error => this.setState({ message: `Sign In With Phone Number Error: ${error.message}` }));
  };

  confirmCode = () => {
    const { codeInput, confirmResult, phoneNumber } = this.state;

    let sendobj = JSON.stringify({phoneNumber: phoneNumber, codeInput: codeInput});

    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          this.setState({ message: 'Код принят', user });          t     
        })
        .catch(error => this.setState({ message: `Code Confirm Error: ${error.message}` }));
    }
  };

  signOut = () => {
    firebase.auth().signOut();
  }
  
  renderPhoneNumberInput() {
   const { phoneNumber } = this.state;
      
    return (
      <View style={{ padding: 25 }}>
        <Text>Введите номер телефона</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ phoneNumber: value })}
          placeholder={'номер телефона '}
          value={phoneNumber}
        />
        <Button title="Войти" onPress={this.signIn} /*onPress={this.onPressSendPhoneNumber.bind(this)}*/ />
      </View>
    );
  }

  goToMain() {
    Actions.cameratab();
  }
  
  sendToken(user) {
    const {phoneNumber, uid} = user;
    const authSend = JSON.stringify({'UserPhone': phoneNumber, 'UserToken': uid});
    //this.props.postauth(authSend);
  }

  renderVerificationCodeInput() {
    const { codeInput } = this.state;
  
    return (
      <View style={{ marginTop: 25, padding: 25 }}>
        <Text>Введите код:</Text>
        <TextInput
          autoFocus
          style={{ height: 40, marginTop: 15, marginBottom: 15 }}
          onChangeText={value => this.setState({ codeInput: value })}
          placeholder={'Код ... '}
          value={codeInput}
        />
        <Button title="Послать" color="#841584" onPress={this.confirmCode.bind(this)} />
      </View>
    );
  }

  render() {
    const { user, confirmResult } = this.state;
    return (
      <View style={{ flex: 1 }}>
        
        {!user && !confirmResult && this.renderPhoneNumberInput()}

        {!user && confirmResult && this.renderVerificationCodeInput()}
        
        {user && (
          <View
            style={{
              padding: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#77dd77',
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 25 }}>Signed In!</Text>
            <Text>{JSON.stringify(user)}</Text>
            <Button title="Sign Out" color="red" onPress={this.signOut} />
            <Text>{user.phoneNumber}</Text>
            <Text>{user.uid}</Text>
            <Button title="Войти" onPress={this.goToMain} />
          </View>
        )}
      </View>
    );
  }  
}

function mapStateToProps(state) {
  const {data, loading} = state.postauth.PostAuth;
  return {data, loading};
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators ({ postauth: postauth}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PhoneAuthTest);