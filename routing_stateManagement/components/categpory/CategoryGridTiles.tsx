import { View, Text, Pressable, StyleSheet, useWindowDimensions, Platform } from "react-native"
interface tilesInterface{
  title:string;
  color:string;
  onPress:any
}
export const CategoryGridTiles = ({title, color,onPress}:tilesInterface) => {
  const {height}= useWindowDimensions()
const minHeight=380

  const ExtraStyles={
    margin:height<minHeight? 10:16,
    height:height<minHeight? 80:160,
   
  }

  return <View style={[styles.GridItem, ExtraStyles]}>
        <Pressable style={({pressed})=>[styles.presableButton, pressed?styles.butonPressed:null]} onPress={onPress} android_ripple={{color:"#ccc"}}>
          <View style={[styles.InnerGrindContainer,{padding:height<minHeight? 9:16, backgroundColor:color,}]}>
            <Text style={[styles.title,{fontSize:height<minHeight? 17:20,}]}>{title}</Text>
           </View> 
        </Pressable>
    </View>

}

const styles = StyleSheet.create({
  GridItem:{
    flex: 1,
    elevation: 4,
    borderRadius:6,
    backgroundColor:"white",
    shadowColor:"black",
    shadowOpacity: 0.2,
    shadowOffset:{width:0, height:2},
    shadowRadius:6,
    overflow:Platform.OS==="android"?"hidden":"visible",
  },
  presableButton:{
    flex: 1,
  },
  butonPressed:{
    opacity:0.7,
  },

  InnerGrindContainer:{
    flex:1,
    justifyContent: 'center',
    borderRadius:6,

    alignItems: 'center',
  },
  title:{
    fontWeight:"bold",
  }
})



