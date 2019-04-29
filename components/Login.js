import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableWithoutFeedback,
        StatusBar, SafeAreaView, Keyboard, TouchableOpacity,
        KeyboardAvoidingView,ActivityIndicator,} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects'; 
import firebase from 'firebase';

export default class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            error:'',
            loading: false
        }

        this.onLoginPress = this.onLoginPress.bind(this);
    

    }

 
    onLoginPress(){
        this.setState(
            {error:'', loading:true}
        );

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false }); })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { this.setState({ error: '', loading: false }); })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
            });


    }

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <ActivityIndicator size="large" color="white" />;    
        }
        return  <TouchableOpacity style={styles.buttonContainer} onPress={this.onLoginPress}>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>;
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>
                <Text style={styles.title}>Login</Text>
                <KeyboardAvoidingView behavior='height' style={styles.container}>
                <TouchableWithoutFeedback style={styles.container}
                                          onPress={Keyboard.dismiss}>
                <View style={styles.formContainer}>
                    <View style={styles.card}>
                    <Sae
                        label={'Email'}
                        labelStyle={{color:'white'}}
                        iconClass={FontAwesomeIcon}
                        iconName={'envelope'}
                        iconColor={'white'}
                        inputPadding={16}
                        labelHeight={24}
                        // active border height
                        borderHeight={2}
                        // TextInput props
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        KeyboardType='email-address'
<<<<<<< HEAD
                        onChangeText ={(text)=>{this.setState({'username':text})}}
=======
                        returnKeyType='next'
>>>>>>> 66fa7da16ec2df0eae56f1723e43f1fa50fab096
                        onSubmitEditing={()=> this.refs.textInputPassword.focus()}
                    />

                    <Sae
                        label={'Password'}
                        labelStyle={{color:'white'}}
                        iconClass={FontAwesomeIcon}
                        iconName={'key'}
                        iconColor={'white'}
                        inputPadding={16}
                        labelHeight={24}
                        // active border height
                        borderHeight={2}
                        // TextInput props
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        onChangeText={(text)=>{this.setState({'password':text})}}
                        returnKeyType='go'
                        secureTextEntry={true}
                        ref={"textInputPassword"}
                    />
                   
                    {this.renderButtonOrSpinner()}
                    
                    </View>
                </View>
                </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        // flexDirection:'column',
    },

    formContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    
    },

    card:{
        height:'60%',
        width:'90%',
        margin:'10%',
        backgroundColor:'#9c27b0',
        padding:'5%',
        borderRadius:5,
        shadowColor:'#000',
        shadowOffset:{
           width:0,
           height:1
       },
        shadowOpacity:0.34,
        shadowRadius:6.27,
        elevation:10
    },
    title:{
        fontWeight:'bold',
        fontSize:50,
        color:'black',
        marginTop:'15%',
        marginLeft:'5%'
    },
    textInput:{
        shadowColor:'#000',
        shadowOffset:{
           width:0,
           height:1
       },
        shadowOpacity:0.34,
        shadowRadius:6.27,
        elevation:10
    },

    buttonContainer:{
        backgroundColor:'white',
        paddingVertical:15,
        marginTop:20,
        borderRadius:5,
        shadowColor:'#000',
        shadowOffset:{
           width:0,
           height:1
       },
        shadowOpacity:0.34,
        shadowRadius:6.27,
        elevation:10

    },
    buttonText:{
        textAlign:'center'
    }
});