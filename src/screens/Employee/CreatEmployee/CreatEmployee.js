import React, { useState } from 'react'
import { View, Text, StyleSheet,Modal } from 'react-native'
import { TextInput, Button,icon } from 'react-native-paper';


const CreatEmployee = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setemail] = useState("");
    const [salary, setsalary] = useState("");
    const [picture, setpicture] = useState("");
    const [modal, setmodal] = useState(false);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                mode="outlined"
                theme={theme}
                label='name'
                value={name}
                onChangeText={text => setName({ text })}
            />
            <TextInput
                style={styles.textInput}
                mode="outlined"
                theme={theme}
                label='Số điện thoại'
                value={phone}
                onChangeText={text => setPhone({ text })}
            />
            <TextInput
                style={styles.textInput}
                mode="outlined"
                theme={theme}
                label='Email'
                value={email}
                onChangeText={text => setemail({ text })}
            />
            <TextInput
                style={styles.textInput}
                mode="outlined"
                theme={theme}
                label='Salary'
                value={salary}
                onChangeText={text => setsalary({ text })}
            />
            <Button  style={styles.button} icon="upload" mode="contained" onPress={() => setmodal(true)}>
                Upload Image
            </Button>
            <Button style={styles.button} icon="content-save" mode="contained" onPress={() => setmodal(true)}>
                Save
            </Button>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => { setmodal(false) }}>
                <View style={styles.modalView}>
                    <View style={styles.buttonModalView}>
                        <Button icon="camera" mode="contained" onPress={() => setmodal(true)}>
                            Camera
                        </Button>
                        <Button icon="folder" mode="contained" onPress={() => setmodal(true)}>
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

