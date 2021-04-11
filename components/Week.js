import React, { Component } from 'react';
import { ActivityIndicator, FlatList,Image, Text, View ,StyleSheet ,Dimensions} from 'react-native';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const numColumns = 7;
const tilewidth = screenWidth / numColumns;
const tileheight = 20;


const data = [
    { key: 'S' }, { key: 'M' }, { key: 'T' },{ key: 'W' }, { key: 'T' }, { key: 'F' }, { key: 'S' },

  ];

export default class Week extends Component {
    render() {

      console.log( " ******************************************************************888");
      //console.log( this.props.mon);
        return (
            
            <View >
                <View style={{paddingTop:10 ,paddingLeft:40, paddingBottom:20 ,flexDirection: 'row' }}>
                <Text style={{fontWeight: "bold" ,fontSize:17}}> <Text style={{ color:"blue"}}> my </Text> hair dairy</Text>

                <Text style={{ fontWeight: "bold" ,fontSize:17, textAlign:"right" ,flex:1 ,paddingRight:8 }}>{this.props.screenmonth}</Text>
                
                </View>
            <FlatList 
          data={data}
            renderItem={({ item }) => {
              return (
                <View >

                    <Text style={{ height: 40, width: tilewidth , alignItems:"center" , textAlign:"center" ,borderWidth:  0.5,
            borderColor:'rgba(0, 0, 0, 0.05)', }}> { item.key}</Text>
                </View>
              )

            }}
           // style={styles.container}
            keyExtractor={item => item.key}
             numColumns={numColumns}

        />
        {/* <Text> hellodhgksdgkjskdjgsdkljgkdgkd</Text> */}
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      //marginVertical: 20,

    },
    item: {
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
// margin: 1,
      height: Dimensions.get('window').width / numColumns, // approximate a square

    },
    // itemInvisible: {
    //   backgroundColor: 'transparent',
    // },
    itemText: {
      color: 'red',
    },
  });