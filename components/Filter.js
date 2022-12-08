import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react';


const Filter = (props) => {
var [ isPress, setIsPress ] = React.useState(false);
const[name, setName] = useState(props.name)



const filtMarket = (marketName) => props.filtByMarket(marketName)


  return (
    <TouchableOpacity
     style={styles.container}
     onPress={()=>filtMarket(name)}>
      <Text>{name}</Text>
    </TouchableOpacity>
  )
}

export default Filter

const styles = StyleSheet.create({
    container:{
        //shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        //end shadow

        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 3,
        borderRadius: 20
    }
})