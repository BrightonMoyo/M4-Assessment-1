import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView,TextInput,TouchableOpacity  } from 'react-native';

 const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
          
             
            <View style={styles.form}>
            <TextInput 
                style={styles.input} 
                placeholder="Email"
            />
     
            <TextInput
                style={styles.input} 
                placeholder="Password"
            />
            </View>
            

            <TouchableOpacity
                style={styles.Button}
                onPress={() => {navigation.navigate('Homepage')}}
            >
                <Text style={{color:'black'}}>Login</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:"#4169e",
        padding:30,
        paddingTop: 100
    }, 
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
    },
    Button:{
        alignItems: "center",
        backgroundColor: "#7df9ff",
        padding: 10,
        margin:10,
        borderRadius:10,
        //position:'absolute',

         
    },
    form:{
        margin:16,
        paddingTop:windowHeight/5
    }
  
});

export default Login;

 