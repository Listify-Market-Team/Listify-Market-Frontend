import React, {Component} from 'react';
import { ActivityIndicator, FlatList, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class ProductInfoScreen extends Component
{
  constructor(propos)
  {
    super(propos);

    this.state = {
      productsData: [],
      marketsData: [],
      isLoading: true
    };

}

async getAll()
  {
    try
    {///Entrar nuevo endpoint de API o conexion aqui
      const response = await fetch('https://localhost:7204/api/Products');
      const json = await response.json();
      this.state.productsData = json;
      const response1 = await fetch('https://localhost:7204/api/Markets');
      const json1 = await response1.json();
      this.state.marketsData = json1;
    }
    catch(error)
    {
      console.error('Error API', error);
    }
    finally
    {
      this.setState({isLoading:false});
    }
  }

  componentDidMount()
  {
    this.getAll();
  }

  render()
  {
    const {productsData, marketsData, isLoading} = this.state;
    
    return (
      
      <View style={{flex:1, padding:25, backgroundColor: '#a6edab'}}>
        <View style={{backgroundColor: '#fff', marginBottom: 20, alignItems: 'center', borderWidth: 3}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>Products</Text>
        </View>
        {isLoading ? <ActivityIndicator/> : (
          <List productsData={productsData} marketsData={marketsData}/>
        )}
      </View>
      
    );
  }
 
}

const List = (props) => {
    return (
      <FlatList data={props.productsData}
      keyExtractor={({id}, index) => id}
      renderItem ={({item}) => (
          <View style={styles.container}>
          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/1548/1548682.png'}} style={styles.imageStyle} />
          <Text style={styles.textStyle}>{item.name} - {item.price}$ </Text>
          <Button item={item} marketsData={props.marketsData}/>
        </View>
      )}/>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      marginBottom:  10, 
      borderWidth: 2, 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      backgroundColor: '#ffffffff'
    },
    imageStyle: {
      width: 100, 
      height: 100, 
    },
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
