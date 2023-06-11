import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    root : {
        borderWidth : 1,
        borderColor : '#ffff',
        borderRadius : 10,
        backgroundColor: '#d1d1d1',
        marginVertical : 5,
        padding:5
    },
    row : {
        flexDirection:'row',

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
    quantityContainer:{
        margin:5
    }


})