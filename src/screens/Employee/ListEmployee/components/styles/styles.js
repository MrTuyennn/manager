const Styles ={
    container :{
        flex:1,
    },
    Card:{
        margin:10,
        borderRadius:10,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    Mycard:{
        margin:10,
        flex:1,
        flexDirection:'row',
    },
    viewCard:{
        flex:3,
    },
    Image:{
        height:100,
        width:100,
        borderRadius:10,
    },
    viewtitle:{
        flex:7,
        marginVertical:10
    },
    text:{
        marginVertical:10,
        fontSize:20,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    textInput:{
        position: 'absolute',
        top:0,
        borderWidth: 1,
        borderColor: 'black',
    }
}
export default Styles;