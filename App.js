import { useState } from 'react';
import { StyleSheet, ImageBackground, View,Text,TextInput,useWindowDimensions,Pressable,KeyboardAvoidingView,} from 'react-native';
import phone from "./assets/background.jpg"
import { Icon } from '@rneui/themed';
var height;
var width;
export default function App() {

  const [email,setEmail] = useState("")
  const [pass,setPass] = useState('')
  const [conPass,setConPass] = useState('')
  const [tab,setTab] = useState('login')
  const [error,setError] = useState()
  height = useWindowDimensions().height
  width = useWindowDimensions().width

  const onClick = () => {
    console.log(email,pass)
    setEmail("")
    setPass("")
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
     <ImageBackground source={phone} resizeMode="cover" style={styles.container} blurRadius={5}>

      <View style={styles.tabStyle}>

        <Pressable 
          style={styles.eachTab} 
          backgroundColor= {tab === "login"?"teal":'transparent'}
          onPress={() => setTab('login')}
        >
          <Text style={styles.labelStyle}>Login</Text>
        </Pressable>

        <Pressable 
          style={styles.eachTab} 
          backgroundColor= {tab === "signup"?"teal":'transparent'}
          onPress={() => setTab('signup')}
        >
         <Text style={styles.labelStyle}>Sign Up</Text>
        </Pressable>

      </View>

      <View style={styles.formStyle}>
        <View>
            <Text style={styles.labelStyle}>Email</Text>
            <View  style={styles.inputStyle} >
              <Icon
                name='email'
                color='#00aced' 
              />
              <TextInput 
                placeholder='abc@defmail.com' 
                placeholderTextColor="gray"
                textContentType="emailAddress"
                value={email}
                onChangeText={setEmail}
                color="white"
                />
            </View>
        </View>
        <View>
            <Text style={styles.labelStyle}>Password</Text>
            <View  style={styles.inputStyle} >
              <Icon
                name='lock'
                color='#00aced' 
              />
              <TextInput 
                placeholder='password@123#' 
                placeholderTextColor="gray"
                secureTextEntry
                value={pass}
                onChangeText={setPass}
                color = "white"
                />
            </View>
        </View>
        <View
            style={{display:tab==="login"?"none":"flex"}}>
            <Text style={styles.labelStyle}>Confirm Password</Text>
            <View  style={styles.inputStyle} >
              <Icon
                name='lock'
                color='#00aced' 
              />
              <TextInput 
                placeholder='confirmpassword@123#' 
                placeholderTextColor="gray"
                secureTextEntry
                value={conPass}
                onChangeText={setConPass}
                color = "white"
                />
            </View>
        </View>
        <Pressable title='Submit' style={styles.buttonStyle} onPress={onClick}>
              <Text style={[styles.errorStyle,{display:error?"flex":"none"}]}>{error}</Text>
              <View style={{display:error?"none":"flex"}}>
                <Icon
                  name='login'
                  color='white' 
                  size= {40}
                />
              </View>
        </Pressable>
      </View>
    </ImageBackground>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    gap:5
  },
  heading:{
    color:"white",
    fontSize:25,
    fontFamily:"serif",
    alignSelf:"center"
  },
  tabStyle:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    width:"80%",
    borderRadius:20,
    backgroundColor:'rgba(0, 0, 0, 0.8)',
  },
  eachTab:{
    width:"50%",
    paddingVertical:10,
    opacity:0.6,
    padding:8,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
  },
  formStyle:{
    borderWidth:5,
    padding:10,
    borderRadius:20,
    width:"80%",
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent:"center",
    gap:20,
  },
  inputStyle:{
    flexDirection:"row",
    gap:10,
    color:"white",
    borderWidth:2,
    borderColor:'white',
    borderRadius:20,
    padding:10,
  },
  labelStyle:{
    color:"white",
    padding:10,
    fontSize:15,
    fontFamily:"serif"
  },
  buttonStyle:{
    width:"100%",
    backgroundColor:'teal',
    opacity:0.6,
    padding:8,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
  },
  errorStyle:{
    color:"red"
  }
});
