import React,{useEffect,useState} from 'react'
import {  Text, View ,ScrollView,FlatList,Image,ActivityIndicator,TouchableWithoutFeedback } from 'react-native'
import {Card} from 'react-native-paper'
import { FAB } from 'react-native-paper';
import styles from './components/styles/styles'



function ListEmployee({navigation}) {

   const [ dataEmployees , setdataEmploy] = useState([])
   const [loading , setloading] = useState(true)
   const fetchData = () => {
    fetch("http://192.168.0.111:3000/api/getall-data")
    .then(res => res.json())
    .then(result => {
        console.log(result)
        setdataEmploy(result)
        setloading(false)
    })
   }

   useEffect(() => {
      fetchData();
   },[])

   const _renderItem = ((item) => {
        return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Profile",{item})}>
            <Card style={styles.Card}>
            <View style={styles.Mycard}>
            <View style={styles.viewCard}>
                <Image style={styles.Image} source={{uri: item.picture}}></Image>
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
        {
            <FlatList
            data={dataEmployees}
            renderItem={({ item}) =>{
                return _renderItem(item);
            }}
            keyExtractor={item => item._id}
            onRefresh = {() => fetchData()}
            refreshing={loading}>
            </FlatList>
        }
        <ScrollView>
           
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


