
import React, { Component } from 'react';
import { ActivityIndicator, FlatList,Image, Text, View ,StyleSheet ,Dimensions} from 'react-native';
import moment from 'moment';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const numColumns = 7;
const numrows = 5;
const tilewidth = screenWidth / numColumns;
const tileheight = screenHeight/numrows;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var data=[];

for( i=0 ; i< 31 ;i++){
  data.push({ key: i+1 , year:2020 , image:null , rating:null});
}

export default function Funcal(props){
     
    renderItem = ({ item, index }) => {
      if (item.empty === true) {
        return <View style={[styles.item, styles.itemInvisible]} />;
      }
      return (
        <View
          style={styles.item}
        >
          <Text style={styles.itemText}>{item.key}</Text>
          <Image source={null} style={{ height: 3*(tileheight)/5, width: tilewidth , alignItems:"center" , paddingTop:0}} />

        </View>
      );
    };

      return (
        <FlatList
          data={formatData(data, numColumns)}
          style={styles.container}
          renderItem={this.renderItem}
          numColumns={numColumns}
        />
      );
    
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      //marginVertical: 20,
    },
    item: {
      backgroundColor: '#FFF',
      alignItems: 'center',
      //justifyContent: 'center', with this dates comes at center
      flex: 1,
      margin: 1,
      height: tileheight,
      
      borderWidth:  0.4,
      borderColor:'rgba(0, 0, 0, 0.05)',
      // approximate a square
    },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    itemText: {
      color:"rgba(0, 0, 0, 0.5)" ,
    },
  });