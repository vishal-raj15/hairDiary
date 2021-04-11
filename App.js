import React, { Component } from 'react';
import { ActivityIndicator, FlatList,Image, Text, View ,StyleSheet ,Dimensions} from 'react-native';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const numColumns = 7;
const numrows = 5;
const tilewidth = screenWidth / numColumns;
const tileheight = screenHeight/numrows;

import StarRating from 'react-native-star-rating';
import Calendarsec from './components/Calendarsec';
import pic from './assets/arte.png';
import Week from './components/Week';
import Funcal from './components/Funcal'

// const testing = [
//   {
//     key:1,
//     year:2020 , 
//     image:'https://ik.imagekit.io/ojdx405rcr7/default-image.jpg', 
//     rating:3,
//   },

 
// {
//   key:6,
//   year:2020 , 
//     image:'https://ik.imagekit.io/ojdx405rcr7/default-image.jpg' , 
//     rating:4,
// }

// ]

function Item({ item }) {

  var date =new Date(item.calendardatetime).getDate();
 // console.log(date);
  return (
    <View style={styles.listItem}>

        <Text style={{ textAlign:"center" ,color:"rgba(0, 0, 0, 0.1)" }}>{date}</Text>
        
      <View  style={{ flex:1 , alignContent:"center" , paddingLeft:7 ,  paddingRight:7}}>
            <StarRating 
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
        starSize={5}
        disabled={false}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={item.rating}
        fullStarColor={'blue'}
        emptyStarColor={'blue'}
      />
      </View>
      <Image source={pic} style={{ height: 3*(tileheight)/5, width: tilewidth , alignItems:"center" , paddingTop:0}} />

      {/* <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"green"}}>Call</Text>
      </TouchableOpacity> */}
    </View>
  );
}


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      testdata:null,
      isLoading: true,
      screenmonth:null,
    };
  }
  
  componentDidMount() {

    var data = {
      "requestobjects": [
        {
          "posts": {
            "operationtype": "read",        
            "id": {
              "return": true
            },
            "userid": {
                "searchvalues" : ["41329663-5834-11eb-8e6e-3ca82abc3dd4"],
              "return": true
            },
            "iscalendarentry": {
                "searchvalues" : ["true"],
              "return": true
            },        
            "media": {
              "return": true //contains image url
            },
            "rating": {
              "return": true
            },
            "text": {
              "return": true
            },
            "privacy": {
              "searchvalues": [
                18
              ],
              "return": true
            },
            "typeofday": {
              "return": true
            },
    
            // Don't change anything above ^^	
            //editable variables start below //
    
            "calendardatetime": { // Date Time of a particular post
              "return": true  , // please note: there can be multiple posts on a single day
              "sort" : "descending" // you can sort fetched dates by ascending/descending.
            },
            "maxitemcount": "15",   //you can ask between 1 to 50 posts (max) at a time.
            "continuationtoken": null //replace with the continuation token from response to get the next set
          }
        }
      ]
    }

    fetch('http://devapi.quinn.care/graph', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(db => {
  console.log('Yes !!!!!!!!!!!!!!!it !!!!!!!!!!!!!!!!!! works!!!!!!!!!!!!!!!!!');

 // console.log('Success:', db.responseobjects[0].posts[0].media[0].mediaurl); shows first post's media mediaurl
  //console.log('Success:', db.responseobjects[0].posts[0]); shows first post only
// console.log('Success:', db.responseobjects[0].posts);
  this.setState({ data : db.responseobjects[0].posts})


})


.catch((error) => {
  console.log('Fuck !!!!!!!!you !!!!!!!!!!!!!!bitch!!!!!!!!!!!!!!!!');
  console.error('Error:', error);
});

     this.setState({ isLoading: false });
  }

  
  render() {
    const { data, isLoading } = this.state;
    const numColumns = 7;

    return (
      <View  style={styles.container}>
          

<Calendarsec testdata = {this.state.data}/>

        </View>
           
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:30,

  },
  listItem:{
    backgroundColor:"#FFF",
    width:tilewidth,
    height:tileheight,
    flex:1,
    flexDirection:"column",
    borderWidth:  0.5,
    borderColor:'rgba(0, 0, 0, 0.05)',
  }
});