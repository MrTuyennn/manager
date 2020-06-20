import React,{Component} from 'react'
import {  Text, View ,ScrollView,FlatList,Image,TextInput,TouchableWithoutFeedback } from 'react-native'
import {Card} from 'react-native-paper'
import { FAB } from 'react-native-paper';
import styles from './components/styles/styles'

const dataEmployees = [
    {id:'1', name:'Nguyễn Ngọc Tuyên',position:'Lập trình di động'},
    {id:'2', name:'Nguyễn Ngọc Minh Tùng',position:'Lập trình di động'},
    {id:'3', name:'Nguyễn Ngọc A',position:'Lập trình di động'},
    {id:'4', name:'Nguyễn Ngọc B',position:'Lập trình di động'},
    {id:'5', name:'Nguyễn Ngọc C',position:'Lập trình di động'},
    {id:'6', name:'Nguyễn Ngọc D',position:'Lập trình di động'},
]

function ListEmployee({navigation}) {

   const _renderItem = ((item) => {
        return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile",item.id)}>
            <Card style={styles.Card}>
            <View style={styles.Mycard}>
            <View style={styles.viewCard}>
                <Image style={styles.image} source={require('../../../assets/images/download.jpg')}></Image>
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


