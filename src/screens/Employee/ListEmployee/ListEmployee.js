import React,{Component} from 'react'
import {  Text, View ,ScrollView,FlatList,Image,TextInput,TouchableWithoutFeedback } from 'react-native'
import {Card} from 'react-native-paper'
import { FAB } from 'react-native-paper';
import styles from './components/styles/styles'

const dataEmployees = [
    {id:'1', name:'Nguyễn Ngọc Tuyên',position:'Mobile',phone:'0969734928',email:'nguyenngoctuyen@gmail.com',salary:'1k$',image:'https://unsplash.com/photos/orDk2VdNrzs'},
    {id:'2', name:'Nguyễn Ngọc A',position:'WED',phone:'096734952',email:'nguyenngoctuyen1@gmail.com',salary:'2k$',image:'https://unsplash.com/photos/3hloN3omSgs'},
    {id:'3', name:'Nguyễn Ngọc B',position:'PHP',phone:'0316495827',email:'nguyenngoctuyen2@gmail.com',salary:'3k$',image:'https://unsplash.com/photos/dQpq5rdw2tM'},
    {id:'4', name:'Nguyễn Ngọc C',position:'NodeJS',phone:'0123456958',email:'nguyenngoctuyen3@gmail.com',salary:'4k$',image:'https://unsplash.com/photos/IP9gyh9mh7s'},
    {id:'5', name:'Nguyễn Ngọc D',position:'Android',phone:'031254678',email:'nguyenngoctuyen4@gmail.com',salary:'5k$',image:'https://unsplash.com/photos/BXxZ9Mc8apI'},
    {id:'6', name:'Nguyễn Ngọc E',position:'C#',phone:'021463258',email:'nguyenngoctuyen5@gmail.com',salary:'6k$',image:'https://unsplash.com/photos/ZVo7vtXilCs'},
]

function ListEmployee({navigation}) {

   const _renderItem = ((item) => {
        return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile",{item})}>
            <Card style={styles.Card}>
            <View style={styles.Mycard}>
            <View style={styles.viewCard}>
                <Image style={styles.Image} source={{uri: item.image}}></Image>
            </View>
            <View style={styles.viewtitle}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.position}</Text>
            </View>     
            </View>
            </Card>
        </TouchableWithoutFeedback>
        )
    })

    return (
        <View style={styles.container}>
        
        <ScrollView>
            <FlatList
            data={dataEmployees}
            renderItem={({ item}) =>{
                return _renderItem(item);
            }}
            keyExtractor={item => `${item.id}`}>
            </FlatList>
        </ScrollView>
        {/* <TextInput style={styles.textInput}
                   placeholder="Tìm kiếm nhân viên"></TextInput> */}

        <FAB
            style={styles.fab}
            small
            icon="plus"
            onPress={() => navigation.navigate('CreatEmployee')}
        />
        </View>
    )
}


export default ListEmployee


