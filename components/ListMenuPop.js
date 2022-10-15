import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'
import axios from 'axios';
import useFetch from "../Hooks/useFetch";


const deviceHeight = Dimensions.get("window").height



const ListMenuPop = (props) => {

  const items = [
    {
      name: "Eliminar",
      action: (id) => {
        props.deleteList(id)
      }
    }, 
    {
      name: "Editar",
      action: 0
    },
     {
      name: "Favorito",
      action:0
     }
    ]



  const renderItem = ({item}) => {
    return(
      <TouchableOpacity
       style={styles.itemContainer}
       onPress={()=> {
        item.action(props.list.id)
        props.changeModalVisibility(false)
      }}
       >  
  
        <Text
         style={styles.itemText}
         >
          {item.name}
          </Text>
  
      </TouchableOpacity>
    )
  }

  const renderSeparator = () => {
      return(
        <View style={styles.separator}/>
      )
  }

  return (
    <View
      style={styles.modal} 
     >
      <TouchableOpacity 
      style={styles.popBackground}
      onPress={()=> props.changeModalVisibility(false)}
      >
        
      </TouchableOpacity>

      <View style={styles.popContainer}>
        <Text style={styles.popTitle}>{props.list.name}</Text>
      
        <FlatList
        style={styles.flatStyle}
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={renderItem}
        extraData={items}
        keyExtractor={(items, index) => index.toString()}
        ItemSeparatorComponent = {renderSeparator}
        contentContainerStyle={styles.contentStyle}
        />
      </View>
    </View>
  )
}

export default ListMenuPop

const styles = StyleSheet.create({
modal:{
    flex: 1,
    justifyContent: "flex-end"
  
  },
popBackground:{
    height: deviceHeight,
    backgroundColor: "#000000AA",
  },
popContainer:{
  backgroundColor: "#FFFFFF",
  width:"100%",
  borderTopRightRadius: 10,
  borderTopLeftRadius: 10,
  paddingHorizontal: 10,
  maxHeight: deviceHeight * 0.4,
  alignItems: "center"
},
popTitle: {
  color: "black",
  fontSize: 25,
  fontWeight: "500",
  marginTop: 15,
  marginBottom: 15,
  
},
flatStyle:{
  marginBottom: 8,
  width: "90%"
},
contentStyle:{
  paddingBottom:8
},
itemContainer:{
  margin:10,
  flex: 1,
  alignItems: "center",
  justifyContent: "center"
},
itemText: {
  fontSize: 17,
  fontWeight: "normal",
  color: "black"
},
separator: {
  opacity:0.1,
  backgroundColor: "black",
  height: 1,
  width: "100%"
}

})