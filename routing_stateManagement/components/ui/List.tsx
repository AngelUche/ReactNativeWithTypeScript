import { View , Text, StyleSheet} from "react-native"

interface props{
  data:string[] |undefined
}

export const List = ({data}:props) => {
  return  data?.map((ingredient) =>(
    <View style={styles.listItemContianer}  key={ingredient}>
      <Text style={styles.listItemTitle}>{ingredient}</Text>
    </View>
  ))}


const styles =StyleSheet.create({
  listItemContianer:{
    borderRadius:6,
    paddingHorizontal:8,
    paddingVertical:10,
    marginVertical:3,
    marginHorizontal:12,
    backgroundColor:"#9e8778"
  },
  listItemTitle:{
    color:"#261e18",
    fontSize:19,
    textAlign:"center",
  },
});