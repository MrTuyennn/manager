import React, { useState } from 'react'
import { View, Alert, StyleSheet,Modal } from 'react-native'
import { TextInput, Button,icon } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';


const CreatEmployee = () => {
    const [name, setName] = useState("");
    const [position,setposition] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setemail] = useState("");
    const [salary, setsalary] = useState("");
    const [picture, setpicture] = useState("");
    const [modal, setmodal] = useState(false);

    const _SumitData = () => {
        fetch('http://192.168.0.111:3000/send-data',{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify({
                name:name,
                email:email,
                position:position,
                phone:phone,
                salary:salary,
                picture:picture,
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data + "data☺")
        }).catch(err => {
            console.log("err" + err)
        })
    }

    const handleUpdate = (photo) => {
        const data = new FormData();
        data.append("file",photo);
        data.append("upload_preset","manager");
        data.append("cloud_name","tuyennn");
        fetch("https://api.cloudinary.com/v1_1/tuyennn/image/upload",{
            method: "POST",
            body:data,
            headers: {
                'Accept':'application/json',
                'Content-Type':'multipart/form-data'
            }
        }).then(res => res.json())
        .then(data =>{
            setpicture(data.url)
            setmodal(false)
            console.log(data)
        }).catch(err => {
            Alert.alert("Error while updating")
        })
    }
    const _upLoadImage = () =>{
        const options ={
            title : 'Select Picture',
            storageOptions :{
                skipBackup : true,
                path : 'image_sunny'
            }
        }

        ImagePicker.launchImageLibrary(options,(response) =>{
            console.log('response=',response);
            if(response.didCancel){
                console.log('User canalled picker image');
            } else if(response.error){
                console.log('Image picker Error',response.error);
            }else{
               const uri = response.uri;
               const type = 'image/jpg';
               const name = response.fileName;
               const source = {uri,type,name}
               console.log(source);
               handleUpdate(source)
            }
        })
    }

    const _takeCamera = () =>{
        const options ={
            title : 'Select Picture',
            storageOptions :{
                skipBackup : true,
                path : 'image_sunny'
            }
        }

        ImagePicker.launchCamera(options,(response) =>{
            console.log('response=',response);
            if(response.didCancel){
                console.log('User canalled picker image');
            } else if(response.error){
                console.log('Image picker Error',response.error);
            }else{
                const uri = response.uri;
                const type = 'image/jpg';
                const name = response.fileName;
                const source = {uri,type,name}
                console.log(source);
                handleUpdate(source)
            }
        })
    }

    

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                mode="outlined"
                theme={theme}
                label='name'
                value={name}
                onChangeText={text => setName( text )}
            />
            <TextInput
                style={styles.textInput}
                mode="outlined"
                theme={theme}
                label='Vị trí'
                value={position}
                onChangeText={text => setposition( text )}
            />
            <TextInput
                style={styles.textInput}
                mode="outlined"
                theme={theme}
                label='Số điện thoại'
                value={phone}
                onChangeText={text => setPhone( text )}
            />
            <TextInput
                style={styles.textInput}
                mode="outlined"
                theme={theme}
                label='Email'
                value={email}
                onChangeText={text => setemail( text )}
            />
            <TextInput
                style={styles.textInput}
                mode="outlined"
                theme={theme}
                label='Salary'
                value={salary}
                onChangeText={text => setsalary( text )}
            />
            <Button  style={styles.button} icon={picture == ""?"upload":"check-bold"} mode="contained" onPress={() => setmodal(true)}>
                Upload Image
            </Button>
            <Button style={styles.button} icon="content-save" mode="contained" onPress={() => _SumitData()}>
                Save
            </Button>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => { setmodal(false) }}>
                <View style={styles.modalView}>
                    <View style={styles.buttonModalView}>
                        <Button icon="camera" mode="contained" onPress={() => _takeCamera()}>
                            Camera
                        </Button>
                        <Button icon="folder" mode="contained" onPress={() => _upLoadImage()}>
                            Gallery
                        </Button>
                    </View>
                        <Button style={styles.button} icon="cancel" mode="contained" onPress={() => setmodal(false)}>
                            Cancel
                        </Button>
                </View>
            </Modal>
        </View>
    )

}

export default CreatEmployee;

const theme = {
    colors: {
        primary: '#3498db',
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor:'#ddd'
    },
    textInput: {
        margin: 6
    },
    buttonModalView: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        backgroundColor:'white'
    },
    modalView: {
        position: 'absolute',
        bottom: 2,
        width: '100%',
        height:120
    },
    button:{
        margin: 10,
    }
})

