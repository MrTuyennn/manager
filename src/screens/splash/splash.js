import React, { Component } from 'react'
import { Text, View,StyleSheet,StatusBar,Image ,Animated,TextInput, ToastAndroid} from 'react-native'
import { Button } from 'react-native-paper';
import Lineargradient from './components/Lineargradient';
import styles from '../splash/components/style/style'


export default class splash extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            logoOpacity: new Animated.Value(0), // khởi tạo animation
            titleMarginTop: new Animated.Value(0),
            loginOpacity: new Animated.Value(0),

            username : '',
            password: '',
        }
      }
    async componentDidMount() {
            Animated.sequence([
                Animated.timing(this.state.logoOpacity,{
                    toValue:1,
                    duration:3000,
                }),
                Animated.timing(this.state.titleMarginTop,{
                    toValue:-300,
                    duration:1000,
                }),
                Animated.timing(this.state.loginOpacity,{
                    toValue:1,
                    duration:2000,
                })
            ]).start(() => {

            });
    }

    _Check =(username,password) =>{
        if(username != '' && password != ''){
            this.setState({
                username:'',
                password:'',
            })
            this.props.navigation.navigate('Content')
        }else{
            ToastAndroid.show('Yêu cầu nhập đầy đủ thông tin',ToastAndroid.SHORT);
        }
    }
    render() {   
        
        return (
            <>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "black" translucent = {false}/>
            <Lineargradient style = {styles.bg}></Lineargradient>
            <View style={styles.container}>
            <Animated.View style={[styles.content,{opacity:this.state.logoOpacity},{marginTop:this.state.titleMarginTop}]}>
               <Image style ={styles.image} source={require('../../assets/images/icons8adminsettings.png')}></Image>
               <Text style={styles.textView}>Quản Lý Nhân Viên</Text>
            </Animated.View>
            <Animated.View style={[styles.viewOpacity,{opacity:this.state.loginOpacity}]}>
            <View style={styles.view_02}>
            <Image style={styles.image_02} source={require('../../assets/icons/icons8user.png')}></Image>
            <TextInput 
                placeholderTextColor='#cccccc'
                style={styles.text_usernam}
                onChangeText={username => this.setState({username})}
                value={this.state.username}
                placeholder="Nhập tên Admim"></TextInput>
            </View>
                
            <View style={styles.view_02}>
            <Image style={styles.image_02} source={require('../../assets/icons/icons8password.png')}></Image>
            <TextInput 
                placeholderTextColor='#cccccc'
                style={styles.text_usernam}
                placeholder="Nhập password"
                onChangeText={password => this.setState({password})}
                value={this.state.password}
                textContentType='password'></TextInput>
            </View>
            <View style={styles.view_03}>
                <Button style={styles.button} color='blue' mode="Contained"
                onPress={this._Check.bind(this,this.state.username,this.state.password)}>
                     <Text style={{color:'#00d2ff'}}>Login</Text>
                </Button>
            </View>
            </Animated.View>
            </View>
           </>
        )
    }
}


