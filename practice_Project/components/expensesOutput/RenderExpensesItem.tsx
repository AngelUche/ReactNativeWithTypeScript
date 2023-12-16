import { Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from '@react-navigation/stack';

import { getFormattedDate } from "../../utils/date"
import { GlobalStyles } from "../../constants/styles"
import { RootStackParamList } from "../../constants/types/RootParams";


interface RenderExpensesIteminterface{
  description:string,
  date:Date,
  amount:number
  id:string
}
export const RenderExpensesItem = ({description, date, amount, id}:RenderExpensesIteminterface) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  function expenseItem(){
    navigation.navigate('ManageExpenses', { expenseId: id });
  }
  return (
    <Pressable onPress={expenseItem} style={({pressed})=>pressed&&styles.pressed}>
      <View style={styles.container}>
        <View>
          <Text style={[styles.textColor, styles.description]}>{description}</Text>
          <Text style={styles.textColor}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles =StyleSheet.create({
  pressed:{opacity:0.6},
  container:{
      padding:12,
      marginVertical:8,
      backgroundColor:GlobalStyles.colors.primary500,
      flexDirection:"row",
      justifyContent:"space-between",
      borderRadius:8,
      elevation:4,
      shadowColor:GlobalStyles.colors.primary200,
      shadowOffset:{height:2, width:2},
      shadowRadius:4,
      shadowOpacity:0.4,
  },
  description:{
    fontSize:16,
    marginBottom:4,
    fontWeight:"bold"
  },
  textColor:{
  color:GlobalStyles.colors.primary50
  },
  amountContainer:{
      paddingHorizontal:12,
      paddingVertical:4,
      backgroundColor:"white",
      justifyContent: "center",
      alignItems: "center",
      borderRadius:4,
  },
  amount:{
      color:GlobalStyles.colors.primary400,
      fontWeight:'bold'
  }, 
})

