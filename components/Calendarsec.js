import React, { Component,useRef } from 'react';
import { ActivityIndicator,ScrollView, FlatList,Image, Text, View ,StyleSheet ,Dimensions} from 'react-native';
import moment, { relativeTimeRounding } from 'moment';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const numColumns = 7;
const numrows = 5;
const tilewidth = screenWidth / numColumns;
const tileheight = screenHeight/numrows;
import Week from './Week';
import { Viewport } from '@skele/components'

import StarRating from 'react-native-star-rating';
import pic from '../assets/arte.png';

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return data;
};


var data=[];

const week = 0

const getDaysInMonth = (month, year) => {
  return moment(`${month}-${year}`, 'MM-YYYY').daysInMonth();
}


const getFirstWeekdayOfMonth = (month, year) => {
  return moment(
    `${month}-${year}`, 
    'MM-YYYY'
  ).startOf('month').weekday();
}

var days = getDaysInMonth(9,2020);

var st = getFirstWeekdayOfMonth(9,2020);

console.log("////ddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
console.log(st);
console.log("////ddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
for( i=0 ; i<st ;i++){
  data.push({ });

}

for( i=0 ; i< days ;i++){
  data.push({ key: i+1, year:2020 , month:9 ,image:null , rating:null , text:''});
}

 days = getDaysInMonth(10,2020);
for( i=0 ; i< days ;i++){
  data.push({ key: i+1 , year:2020 , month:10 ,image:null , rating:null , text:''});
}

days = getDaysInMonth(11,2020);
for( i=0 ; i< days ;i++){
  data.push({ key: i+1 , year:2020 , month:11 ,image:null , rating:null , text:''});
}
days = getDaysInMonth(12,2020);
for( i=0 ; i< days ;i++){
  data.push({ key: i+1 , year:2020 , month:12 ,image:null , rating:null , text:''});
}

days = getDaysInMonth(1,2021);
for( i=0 ; i< days ;i++){
  data.push({ key: i+1 , year:2021 , month:1 ,image:null , rating:null , text:''});
}

days = getDaysInMonth(2,2021);
for( i=0 ; i< days ;i++){
  data.push({ key: i+1 , year:2021 , month:2 ,image:null , rating:null , text:''});
}

days = getDaysInMonth(3,2021);
for( i=0 ; i< days ;i++){
  data.push({ key: i+1 , year:2021 , month:3 ,image:null , rating:null , text:''});
}

days = getDaysInMonth(4,2021);
for( i=0 ; i< days ;i++){
  data.push({ key: i+1 , year:2021 , month:4 ,image:null , rating:null , text:''});
}


  export default class Calendarsec extends Component {
       constructor(props) {
        super(props);
        this.state = {
            data: data,
            mon:null,

        };
      }



      // fun = () => {

      //   this.setState({mon : arg});

      // }
   


    renderItem = ({ item, index }) => {
      
      if (item.empty === true) {
        return <View style={[styles.item, styles.itemInvisible]} />;
      }

      var mon = null;
      var yr=null;

      if(item.key == 1){
        if( item.month == 1){mon='Jan';
          yr = item.year;
      }
        else if( item.month == 2){mon='Feb';
          yr = item.year;
      }
        else if( item.month == 3){mon='Mar';
          yr = item.year;
      }
        else if( item.month == 4){mon='Apr';
          yr = item.year;
      }
        else if( item.month == 5){mon='May';
          yr = item.year;
      }
        else if( item.month == 6){mon='Jun';
          yr = item.year;
      }
        else if( item.month == 7){mon='Jul';
          yr = item.year;
      }
       if( item.month == 8){mon='Aug';
          yr = item.year;
      }
        else if( item.month == 9){mon='Sep';
          yr = item.year;
      }
        else if( item.month == 10){mon='Oct';
          yr = item.year;
      }
        else if( item.month == 11){mon='Nov';
          yr = item.year;
      }
        else if( item.month == 12){mon='Dec';
          yr = item.year;
      }
      }
      else mon = null;

      if( item.rating == null){
        return(

          <View
          style={styles.item}
        >
          <Text style={styles.itemText}>{item.key} {mon}</Text>
          <Text style={styles.itemText}>{yr}</Text>

          <Image source={ item.media ? {uri: item.media[0].mediaurl} : null} style={{ height: tileheight/2, width: tilewidth}} />

        </View>

        );
      }
      return (
        <View
          style={styles.item}
        >
          <Text style={styles.itemText}>{item.key}{mon}</Text>

          <View  style={{ flex:1 , alignContent:"center" , paddingLeft:7 ,  paddingRight:7}}>

            
            <StarRating 
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
        starSize={5}
        disabled={false}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={item.rating }
        fullStarColor={'blue'}
        emptyStarColor={'blue'}
      />
      </View>


          <Image source={ item.media ? {uri: item.media[0].mediaurl} : null} style={{ height: 3*tileheight/5, width: tilewidth , }} />
        </View>
      );
    };
  
    render() {

data = data.map(item => {

  let item2 = this.props.testdata.find(i2 => (new Date(i2.calendardatetime).getDate() === item.key &&  new Date(i2.calendardatetime).getMonth()+1 === item.month));
  
  return item2 ? { ...item, ...item2 } : item;

});
      ////////////////////////////////////////////
console.log(" this is the modify data i guess !!!!!!!!");
  console.log( data);
      ///////////////////////////////////////////////////


      return (

        <View  style={styles.container}>
         <Week/>
        
        <FlatList
          data={formatData(data, numColumns)}
          style={styles.container}
          renderItem={this.renderItem}
          numColumns={numColumns}
        />

</View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position:'relative',
      
      
     // backgroundColor: '#F7F7F7',
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
      paddingBottom:25,
      // approximate a square
      
    },
    itemInvisible: {
      backgroundColor: '#FFF',
    },
    itemText: {
      color:"rgba(0, 0, 0, 0.5)" ,
    },
  });