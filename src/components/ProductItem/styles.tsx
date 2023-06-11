import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    root : {
        flexDirection:'row',
        borderWidth : 1,
        borderColor : '#d1d1d1',
        borderRadius : 10,
        backgroundColor: '#fff',
        marginVertical : 6
    },
    image : {
        flex : 2,
        height:150,
        resizeMode:'contain'
    },
    rightcontainer : {
        padding : 15,
        flex:3
    },
    title : {
        fontSize: 16,
    },
    price : {
        fontSize:16,
        fontWeight:'bold'
    },
    oldPrice : {
        fontSize:12,
        fontWeight:'normal',
        textDecorationLine:'line-through'
    },
    ratingsContainer : {
        flexDirection:'row',
        alignItems:'center',
        marginVertical:5 
    },
    star : {
        margin : 2,
    },
    comments : {}


})