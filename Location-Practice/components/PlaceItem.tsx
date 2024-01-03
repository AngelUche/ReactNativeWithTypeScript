import { Pressable, View , Image, Text, StyleSheet} from "react-native"
import { PlaceType } from "../models/place"

interface PlaceItemProp{
  items:PlaceType
  onSelect:()=>void
}

export function PlaceItem({items, onSelect}:PlaceItemProp) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{uri:items.imageUri}} />
      <View>
        <Text>{items.title}</Text>
        <Text>{items.address}</Text>
      </View>
    </Pressable>
  )
}

const styles=StyleSheet.create({

})
