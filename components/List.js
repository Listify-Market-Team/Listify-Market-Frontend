import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";
import ListMenuPop from "./ListMenuPop";
import detailBTN from "../img/DetailBTN.png";
import axios from 'axios';




const List = (props) => {

  const [list1, setList] = useState([])


  const fetchList = async () => {
    const res = await fetch("https://localhost:7209/api/Inventory/GetAll")
    const json = await res.json();
    const json2 = json.inventories
    setList(json2)
    
  }

  useEffect(() =>{
    fetchList()
  },[])

  console.log(list1);

// console.log(props.count[0]);
  //console.log(list)

  const data = 
  [
    {
      image:
        "https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png",
      name: "Bravo",
      products: [
        { id: 1, product: "pan" },
        { id: 2, product: "leche" },
      ],
    },
    {
      image:
        "https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png",
      name: "La Sirena",
      products: [
        { id: 3, product: "huevos" },
        { id: 4, product: "jabon" },
      ],
    },
  ];

  const [listModal, setListModal] = useState()
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [list, setList] = useState(data);

  // console.log(list.isModalVisible)


const deleteList = (id) => {
  // console.log(id)
  // await axios.delete("https://localhost:7209/api/Inventory/Delete",{
  //   id: id
  // })
  axios({
    method: 'delete',
    url: 'https://localhost:7209/api/Inventory/Delete',
    headers: {}, 
    data: {
      id: id
    }
  });

  fetchList()
}


const setSelectedProduct = (product) => {
  setListModal(product)
}

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool);
  };

  return (
    <View>

      {list1.map((list,i) =>(
        
        <View style={styles.screen} key={i}>
          <Image source="https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png" style={styles.imageStyle} />

          <View style={styles.content}>
            <Text style={styles.listName}>{list.name}</Text>
            <Text>x products</Text>
          </View>

          <View style={styles.detailContainer}>
            <TouchableOpacity
              onPress={(e) => {
                 changeModalVisibility(true);
                 setSelectedProduct(list);
                  }
                }
              style={styles.detailBotonStyle}
            >
              <Image source={detailBTN} style={styles.detailImageStyle} />
            </TouchableOpacity>
          </View>

          <Modal
              animationType='fade'
              transparent={true}
              visible={isModalVisible}
              onRequestClose={()=> {

                changeModalVisibility(false)
                
              }
              }
              >
                <ListMenuPop
                list={listModal}
                deleteList= {deleteList}
                changeModalVisibility={changeModalVisibility}
                />
          </Modal>

        </View>
      ))}
      
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 14,
    justifyContent: "flex-start",
    marginBottom: 15,
    position: "relative",
    zIndex: 1,
  },
  listName: { 
    fontSize: 20,
    fontWeight: "bold",
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  detailImageStyle: {
    height: 20,
    width: 20,
  },
  detailBotonStyle: {
    marginTop: "2%",
  },
  content: {
    paddingLeft: "4%",
    justifyContent: "center",
  },
  detailContainer: {
    marginLeft: "3%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
  },
  prueba: {
    height: 50,
    width: 50,
    // marginLeft: 300,
    // marginTop: 220,
    backgroundColor: "black",
  },
  modal: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default List;
