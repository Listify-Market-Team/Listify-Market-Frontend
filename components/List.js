import { View, Text, StyleSheet,Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import useFetch from '../Hooks/useFetch'

const List = () => {
// const [list, setList] = useState([])

// const fetchLists = async () =>{
// const res = await fetch("https://jsonplaceholder.typicode.com/photos");
// const json =  await res.json();
// setList(json)
// console.log(list.title)
// }

// useEffect(() =>{
//   fetchLists()
// },[])

const {loading, data:list} = useFetch("https://jsonplaceholder.typicode.com/photos")
  return (
    <View style={styles.container}>

      {/* <Image source={list}/> */}

      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flexDirection: "row",
      backgroundColor: "#ffffff",
      padding:10

    },
    lettle:{
        color:"red"
    },
})

export default List
