import { Text, StyleSheet, View } from "react-native"


export const SubTitle = ({children}:any) => {
  return (
    <View style={styles.subtitelContiner}>
      <Text style={styles.SubTitle}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subtitelContiner:{
    padding:6,
    marginHorizontal:12,
    marginVertical:4,
    borderBottomColor:"white",
    borderBottomWidth:1,
  },
  SubTitle:{
    color:'white',
    fontSize:17,
    fontWeight:'bold',
    textAlign:'center',
  },
})
