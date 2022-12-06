import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import axios from "axios";
// import { AddProductButton , Spinner} from "./PressComponents";
import { API_URL } from "../../api/constants";
import { AuthContext } from "../../context/AuthContext";

export const ListData = ({ navigation , route}) => {
  const [Loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);
  const [checked, setChecked] = useState([]);
  const { user } = useContext(AuthContext);

  const product = route.params;

  useEffect(() => {
    const doGetRequest = async () => {
      const userid = user.id;
      const res = await axios.get(
        `${API_URL}/Inventory/GetByUserId?userID=${userid}`
      );
      const data = await res.data.inventories;
      const check = new Array(data.length).fill(false);
      setChecked(check);
      setListData(data);
      setLoading(false);
    };
    doGetRequest();
    const unsubscribe = navigation.addListener("focus", () => {
      doGetRequest();
    });
    return unsubscribe;
  }, [navigation]);

  const handleOnChange = (position) => {
    const updatedListdata = checked.map((item, index) =>
      index === position ? !item : item
    );
    setChecked(updatedListdata);
  };

  return Loading ? (
    <Spinner/>
  ) : listData.length == 0 ? (
    <Text style={styles.textDontExist}>
      No existe ninguna lista. Cree una primero para insertar un producto.  
    </Text>
  ) : (
    <View style={styles.dataContainer}>
      <ScrollView>
        {listData.map((element, index) => (
          <View style={styles.ListElementContainer} key={index}>
            <Checkbox
              style={styles.checkbox}
              name={element.name}
              value={checked[index]}
              onValueChange={() => handleOnChange(index)}
            ></Checkbox>

            <Pressable
              style={styles.list}
              onPress={() => handleOnChange(index)}
            >
              <Image style={styles.tinyLogo} source={element.image}></Image>

              <View>
                <Text style={styles.text}>{element.name}</Text>
              </View>
            </Pressable>
          </View>
        ))}
      </ScrollView>
      <AddProductButton data={listData} datacheck={checked} navigation={navigation} product={product}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    alignContent: "center",
    fontWeight: "bold",
  },
  textDontExist: {
    fontSize: 15,
    alignItems: "center",
    padding: "7%",
    marginTop: "60%",
  },
  checkbox: {
    marginVertical: 40,
    padding: 13,
    borderColor: "#000",
    borderWidth: 1.5,
    borderRadius: 5,
  },
  list: {
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
  ListElementContainer: {
    flex: 1,
    height: 112,
    flexDirection: "row",
    marginLeft: "8%",
    alignContent: "center",
    //borderWidth: 1,
  },
  tinyLogo: {
    width: 45,
    height: 45,
    margin: 15,
    borderColor: "#000",
    borderWidth: 1,
  },
  Icon: {
    padding: 15,
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
  dataContainer: {
    flex: 1,
  },
});

//#B8B9BB gray buttonborder
//#76B2B2 green buttoncolor

//#B5D3D3 green Principalscreen
//#DAEAEA screen allObjects

//#FFFFFF white listcolor
