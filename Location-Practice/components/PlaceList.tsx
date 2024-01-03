import { FlatList, Text, View , StyleSheet} from "react-native"

import { PlaceType } from "../models/place"
import { PlaceItem, } from "./PlaceItem"
import { Colors } from "../constants/styles"
interface PlaceListProp{
  places:PlaceType[]
}

export const PlaceList = ({places}:PlaceListProp) => {

  if(!places || places.length===0){
    return <View style={styles.fallbackContainer}>
      <Text style={styles.fallbackText}>No places added yet, start adding some!</Text>
    </View>
  }


  return (
    <FlatList data={places} keyExtractor={(item)=>item.id} renderItem={({item})=><PlaceItem items={item} onSelect={()=>{}}/>}/>

  )
}

const styles =StyleSheet.create({
  fallbackContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText:{
    fontSize: 17,
    color:Colors.primary200
  }
})

