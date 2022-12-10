import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BarChart from '../components/BarChart'

const BackOfficeHome = () => {
  return (
    <View style={styles.container}>
        <View
         style={styles.barCharContainer}
         >
            <Text style={{position: "absolute"}}>Usuarios por mes</Text>
             <BarChart/>
            
        </View>
       
    </View>
  )
}

export default BackOfficeHome

const styles = StyleSheet.create({
    container: {
      height: "100%",
      backgroundColor: "#B5D3D3",
      flex: 1,
      alignContent: "flex-start",
      alignItems: "center",
    },
    barCharContainer: {
        marginTop: "3%",
        height: "40%",
        width: "95%",
        borderRadius: "5%",
      backgroundColor: "#FFFFFF80",
      alignItems: "center",
    }
  });