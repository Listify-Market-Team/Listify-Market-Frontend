import React, { useState , useEffect} from "react";
import {StyleSheet, Text, View, Pressable, Image, ScrollView} from "react-native";
import Checkbox from "expo-checkbox";
import {AddProductButton} from "./PressComponents";
import axios from "axios";

export const ListData = () =>{

  const [Loading,  setLoading] = useState(true);
  const [Listdata, setListData] = useState([]);
  const [Checked, setChecked] = useState([]);

  useEffect(()=>{
    const doGetRequest = async () => {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      const data = await res.data.results;
      //const data = await res.data.users;
      const check = new Array(data.length).fill(false);
      setChecked(check);
      setListData(data);
      setLoading(false);
    };
    doGetRequest();
  },[]);

  console.log(Checked); 

  const handleOnChange = (position) => {
    const updatedListdata = Checked.map((item ,index) =>
      index === position ? !item : item     
    );
    setChecked(updatedListdata);
  };
  

  return (   
    Loading ? <Text>Cargando...</Text> :
      <View style={styles.dataContainer}>
        <ScrollView>
          {Listdata.map((element, index)=>(           
            <View style={styles.ListElementContainer} key={index}>     

              <Checkbox 
                style={styles.checkbox} 
                name={element.name}
                value={Checked[index]}
                onValueChange={() => handleOnChange(index)}>
              </Checkbox>
              
              <Pressable 
                style={styles.list}            
                onPress={() => handleOnChange(index)}>
                
                <Image 
                  style={styles.tinyLogo} 
                  source={element.image}>
                </Image>
                
                <View>
                  <Text style={styles.text}>MY LIST</Text>
                  <Text style={styles.text}>{element.name}</Text>
                </View>           
              </Pressable>
            </View>
          ))}      
        </ScrollView>
        <AddProductButton data={Listdata} datacheck={Checked}/>
      </View>
      
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize: 15,
    alignContent: "center",
    fontWeight: "bold",
  },
  checkbox:{
    marginVertical: 40,
    padding: 13,
    borderColor: "#000",
    borderWidth: 1.5,
    borderRadius: 5
  },
  list:{
    flex: 1,
    width: "100%",
    height: "80%",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: "8%",
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ListElementContainer:{
    flex: 1,
    height: 112,
    flexDirection: "row",
    marginLeft: "8%",
    alignContent: "center",
    //borderWidth: 1,
  },
  tinyLogo:{
    width: 45,
    height: 45,
    margin: 15,
    borderColor: "#000",
    borderWidth: 1,
  },
  Icon:{
    padding: 15,
  },
  text:{
    fontSize: 15,
    alignContent: "center",
    fontWeight: "bold"
  },
  button: {
    alignItems: "center",
    marginTop: 30,
    paddingVertical: 10,
    borderWidth: 3,
    borderColor: "#B8B9BB",
    borderRadius: 15,
    backgroundColor: "#76B2B2",
  },  
  dataContainer:{
    flex: 1
  }

});

//#B8B9BB gray buttonborder
//#76B2B2 green buttoncolor

//#B5D3D3 green Principalscreen
//#DAEAEA screen allObjects

//#FFFFFF white listcolor