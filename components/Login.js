import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback,
        StatusBar, TextInput, SafeAreaView, Keyboard, TouchableOpacity,
        KeyboardAvoidingView} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';      
export default class Login extends Component{

    state={
        username:'',
        password:''
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
                        returnKeyType='next'
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
                        returnKeyType='go'
                        secureTextEntry={true}
                        ref={"textInputPassword"}
                    />
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </TouchableOpacity>

                    
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