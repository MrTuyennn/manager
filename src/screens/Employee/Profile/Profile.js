import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

function Profile() {
    return (
        <View style={styles.container}>
        <View style={styles.viewHeader}>
          <View style={styles.bg}></View>
           <View style={styles.imageView}>
           <Image style={styles.image} source={require('../../../assets/images/download.jpg')}></Image>
           </View>
        </View>
        <View style={styles.bodyView}></View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    viewHeader:{
        height:200,
        width:'100%',
    },
    bg:{
        position: 'absolute',
        height:150,
        width:'100%',
        backgroundColor:'#00d2ff'
    },
    image:{
        borderRadius:150,
        height:150,
        width:150,
        marginTop:50
    },
    imageView:{
        justifyContent:'center',
        alignItems:'center',
    },
    bodyView:{
        width:'100%',
        height:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:'#ddd'
    }

})

