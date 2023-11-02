import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AppContext } from '../App';
import { useNavigation } from '@react-navigation/native';

export default function APOD() {

    const data = useContext(AppContext) 
    const nav = useNavigation()

 return (
    <>
    <TouchableOpacity
         onPress={()=>nav.navigate("apod")}
          style={{width:"95%",position:'relative',height:"35%", 
    borderRadius:10,
    marginTop:5,
    margin:'auto',
    backgroundColor:'white',
    maxHeight:200,
    elevation:1, 
    }}>
      <Image
      source={{uri:data[0].url}}
      resizeMode="cover"
     style={{width:'100%',height:'100%',borderRadius:10}}
      />
      <Text 
      style={{position:'absolute',color:'white',backgroundColor:'#3A3A3A',padding:10,borderRadius:5,zIndex:10,fontSize:14,fontWeight:'900',bottom:10,right:20}}>{data[0].copyright?.trim()|| "No CopyRights"}</Text>
     </TouchableOpacity>
     <Text style={{  marginTop:5,fontWeight:'900'  }}>Astronomical Picture Of The Day</Text>
    </>
  )
 
}
