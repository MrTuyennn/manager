import React from 'react'
import { StyleSheet, Text, View, Image, Linking, Alert } from 'react-native'
import { Card, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Profile = (props) => {
    const { _id, name, position, phone, email, salary, picture } = props.route.params.item;

    const openDial = () => {
        if (Platform.OS === 'android') {
            Linking.openURL(`tel:${phone}`)
        } else {
            Linking.openURL(`telprompt:${phone}`)
        }
    }

    console.log(_id);
    const deleteEmployee = () => {
        fetch('http://192.168.0.111:3000/delete-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: _id,
            })
        }).then(res => res.json())
            .then(deleteEm => {
                Alert.alert(`${deleteEm.name} delete Success`)
            }).catch(error => {
                console.log(error)
            })
    }
    const dialog = () => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed')
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => deleteEmployee() }
            ],
            { cancelable: false }
        );
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.viewHeader}>
                <View style={styles.bg}></View>
                <View style={styles.imageView}>
                    <Image style={styles.image} source={{ uri: picture }}></Image>
                </View>

            </View>
            <View style={styles.bodyView}>
                <Text style={styles.text}>{name}</Text>
                <Card style={styles.myCard} onPress={() => {
                    Linking.openURL(`mailto:${email}`)
                }}>
                    <View style={styles.view}>
                        <Icon style={styles.icon} name="envelope" color='#00d2ff' size={24}></Icon>
                        <Text style={styles.viewText}>{email}</Text>
                    </View>
                </Card>
                <Card style={styles.myCard} onPress={() => openDial()}>
                    <View style={styles.view}>
                        <Icon style={styles.icon} name="phone" color='#00d2ff' size={24}></Icon>
                        <Text style={styles.viewText}>{phone}</Text>
                    </View>
                </Card>
                <Card style={styles.myCard} onPress={() => {
                    Linking.openURL(`sms:${salary}`)
                }}>
                    <View style={styles.view}>
                        <Icon style={styles.icon} name="funnel-dollar" color='#00d2ff' size={24}></Icon>
                        <Text style={styles.viewText}>{salary}</Text>
                    </View>
                </Card>
                <Card style={styles.myCard}>
                    <View style={styles.view}>
                        <Icon style={styles.icon} name="funnel-dollar" color='#00d2ff' size={24}></Icon>
                        <Text style={styles.viewText}>{position}</Text>
                    </View>
                </Card>
            </View>
            <View style={styles.viewButton}>
                <Button icon="content-save-edit" mode="contained" onPress={() => {props.navigation.navigate("CreatEmployee",
                { _id, name, position, phone, email, salary, picture})}}>
                    EDIT-USER
                </Button>
                <Button icon="cancel" mode="contained" onPress={() => dialog()}>
                    Press me
                </Button>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    viewHeader: {
        height: 200,
        width: '100%',
        backgroundColor: '#ddd',
        flexDirection: 'column'
    },
    bg: {
        position: 'absolute',
        height: 150,
        width: '100%',
        backgroundColor: '#00d2ff'
    },
    image: {
        borderRadius: 150,
        height: 150,
        width: 150,
        marginTop: 50
    },
    imageView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyView: {
        width: '100%',

        backgroundColor: '#ddd',
        alignItems: 'center',
    },
    myCard: {
        flexDirection: 'row',
        margin: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 5
    },
    text: {
        marginTop: 20,
        fontSize: 20
    },
    view: {
        flexDirection: 'row',
    },
    viewText: {
        margin: 10,
        fontSize: 18
    },
    icon: {
        margin: 10,
    },
    viewButton: {
        backgroundColor: '#ddd',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }

})

