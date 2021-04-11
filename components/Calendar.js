import React, { Component } from 'react';
import { ActivityIndicator, FlatList,Image, Text, View ,StyleSheet ,Dimensions} from 'react-native';
import moment from 'moment';
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const numColumns = 7;
const numrows = 5;
const tilewidth = screenWidth / numColumns;
const tileheight = screenHeight/numrows;


const data = [
    { key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 },
     { key: 8 }, { key: 9 }, { key: 10 },{ key: 11 },{ key: 12 },{ key: 13 },{ key: 14 },
     { key: 15 },{ key: 16 },{ key: 17 },{ key: 18 },{ key: 19 },{ key: 20 },{ key: 21 },
     { key: 22 },{ key: 23 },{ key: 24 },{ key: 25 },{ key: 26 },{ key: 27 },{ key: 28 },
     { key: 29 },{ key: 30 },{ key: 31 },{ key: 1 },{ key: 2 },{ key: 3 },{ key: 4 }
   
  ];


  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
  
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
  
    return data;
  };

// const getDaysInMonth = (month, year) => {  
//     return moment(`${month}-${year}`, 'MM-YYYY').daysInMonth();  
//   }
  // console.log(getDaysInMonth(2, 2019));

  // const D = (month, year) => {  
  //   return new Date(year, month, 1).getDay();
  // }
  
//   // Note, the month and result is 0-indexed  
//   //console.log(getFirstWeekdayOfMonth(0, 2020))

//   const getFirstWeekdayOfMonth = (month, year) => {  
//     return moment(  
//       `\${month}-\${year}`,   
//       'MM-YYYY'  
//     ).startOf('month').weekday()  
//   }
  //console.log(getFirstWeekdayOfMonth(1, 2020));

export default class Calendar extends Component {
    // constructor(props) {
    //     super(props);
    
    //     this.state = {
           
    //         gridYear=0,
    //         gridMonth=0,
    //         //id="",
    //         iscalendarentry=false,
    //         calendardatetime="",
    //         //media=[],
    //         rating=0,
    //         //text = "",
    //         //typeofday=[],
    //         updatedontimestamp="",
    //         //userId=""
    //     };
    //   }


    render() {
        return (
            <View>
                 <FlatList 

                    data={data}
                    renderItem={({ item ,index }) => {
                    return (
                        <View style={styles.listItem}>

                            <Text style={{ textAlign:"center" ,color:"rgba(0, 0, 0, 0.5)"  }}>{item.key}</Text>

                        </View>
                    )

                    }}
                    keyExtractor={item => item.key}
                    numColumns={numColumns}

        />
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      marginTop:30,
  
    },
    listItem:{
      backgroundColor:"#FFF",
      width:tilewidth,
     height: Dimensions.get('window').height / 5, 
    
        flex: 1,
    
      flexDirection:"column",
      borderWidth:  0.5,
      borderColor:'rgba(0, 0, 0, 0.05)',
    },
    itemInvisible: {
      backgroundColor: 'transparent',
    },
    itemText: {
      color: '#fff',
    },
  });























































  // import React, { Component,useRef } from 'react';
  // import { ActivityIndicator,ScrollView, FlatList,Image, Text, View ,StyleSheet ,Dimensions} from 'react-native';
  // import moment, { relativeTimeRounding } from 'moment';
  // const screenWidth = Dimensions.get("window").width;
  // const screenHeight = Dimensions.get("window").height;
  // const numColumns = 7;
  // const numrows = 5;
  // const tilewidth = screenWidth / numColumns;
  // const tileheight = screenHeight/numrows;
  
  
  // import StarRating from 'react-native-star-rating';
  // import pic from '../assets/arte.png';
  
  // const formatData = (data, numColumns) => {
  //   const numberOfFullRows = Math.floor(data.length / numColumns);
  
  //   let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  //   while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
  //     data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
  //     numberOfElementsLastRow++;
  //   }
  
  //   return data;
  // };
  
  
  // var data=[];
  
  // const week = 0
  
  
  
  // for( i=0 ; i< 31 ;i++){
  //   data.push({ key: i+1+week , year:2020 , month:9 ,image:null , rating:null , text:''});
  // }
  
  // for( i=0 ; i< 31 ;i++){
  //   data.push({ key: i+1 , year:2020 , month:10 ,image:null , rating:null , text:''});
  // }
  
  // for( i=0 ; i< 31 ;i++){
  //   data.push({ key: i+1 , year:2020 , month:11 ,image:null , rating:null , text:''});
  // }
  
  // for( i=0 ; i< 31 ;i++){
  //   data.push({ key: i+1 , year:2020 , month:12 ,image:null , rating:null , text:''});
  // }
  
  //   export default class Calendarsec extends Component {
  //        constructor(props) {
  //         super(props);
  //         this.state = {
  //             data: data,
  //             mon: data.month,
  
  //         };
  //       }
  
  //   //     componentDidMount(){
  
  //   //       const ref = useRef(null);
  
  //   // useScrollToTop(useRef({
  //   //   scrollToTop: () => ref.current?.scrollToOffset({ offset: 200 }),
  //   // }));
  //   //     }
  
     
  
  
  //     renderItem = ({ item, index }) => {
  //       if (item.empty === true) {
  //         return <View style={[styles.item, styles.itemInvisible]} />;
  //       }
  
  //       var mon = null;
  //       if(item.key == 1){
  //         if( item.month == 9)mon='Sep';
  //         else if( item.month == 10)mon='Oct';
  //         else if( item.month == 11)mon='Nov';
  //         else if( item.month == 12)mon='Dec';
  //       }
  //       else mon = null;
  
  //       if( item.rating == null){
  //         return(
  
  //           <View
  //           style={styles.item}
  //         >
  //           <Text style={styles.itemText}>{item.key} {mon}</Text>
  
  //           <Image source={ item.media ? {uri: item.media[0].mediaurl} : null} style={{ height: tileheight/2, width: tilewidth}} />
  
  //         </View>
  
  //         );
  //       }
  //       return (
  //         <View
  //           style={styles.item}
  //         >
  //           <Text style={styles.itemText}>{item.key}{mon}</Text>
  
  //           <View  style={{ flex:1 , alignContent:"center" , paddingLeft:7 ,  paddingRight:7}}>
  
              
  //             <StarRating 
  //             emptyStar={'ios-star-outline'}
  //             fullStar={'ios-star'}
  //         starSize={5}
  //         disabled={false}
  //         iconSet={'Ionicons'}
  //         maxStars={5}
  //         rating={item.rating }
  //         fullStarColor={'blue'}
  //         emptyStarColor={'blue'}
  //       />
  //       </View>
  
  
  //           <Image source={ item.media ? {uri: item.media[0].mediaurl} : null} style={{ height: 3*tileheight/5, width: tilewidth , }} />
  
         
  //         </View>
  //       );
  //     };
    
  //     render() {
  //       // console.log( " ///////////////////////////////////////the test data       ///////////////////////////////////////////");
  //       // console.log(this.props.testdata);
  //       // console.log( " //////////////////////////////////////////////////////////////////////////////////");
  
  
  // data = data.map(item => {
  
  //   let item2 = this.props.testdata.find(i2 => (new Date(i2.calendardatetime).getDate() === item.key &&  new Date(i2.calendardatetime).getMonth()+1 === item.month));
    
  //   return item2 ? { ...item, ...item2 } : item;
  // });
  
        
  //       ////////////////////////////////////////////
  // console.log(" this is the modify data i guess !!!!!!!!");
  //   console.log( data);
  //       ///////////////////////////////////////////////////
  
  
  
  
  
  //       // const scrollRef = useRef();
  //       // scrollRef.current.ScrollTo({
  //       //   y: 200,
  //       //   animated: true,
  
  //       // });
  
  
  //       return (
  //         <FlatList
  //           data={formatData(data, numColumns)}
  //           style={styles.container}
  //           renderItem={this.renderItem}
  //           numColumns={numColumns}
  //         />
  //       );
  //     }
  //   }
  
  //   const styles = StyleSheet.create({
  //     container: {
  //       flex: 1,
  //       position:'relative',
        
        
  //      // backgroundColor: '#F7F7F7',
  //       //marginVertical: 20,
  //     },
  //     item: {
  //       backgroundColor: '#FFF',
  //       alignItems: 'center',
  //       //justifyContent: 'center', with this dates comes at center
  //       flex: 1,
  //       margin: 1,
  //       height: tileheight,
        
  //       borderWidth:  0.4,
  //       borderColor:'rgba(0, 0, 0, 0.05)',
  //       paddingBottom:25,
  //       // approximate a square
        
  //     },
  //     itemInvisible: {
  //       backgroundColor: '#FFF',
  //     },
  //     itemText: {
  //       color:"rgba(0, 0, 0, 0.5)" ,
  //     },
  //   });