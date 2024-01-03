import React, { useEffect, useState } from "react";
import { Alert, View, Image, Text, StyleSheet } from "react-native";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";
import { NavigationProp, useIsFocused, useNavigation, useRoute } from "@react-navigation/native"
import { RouteProp } from "@react-navigation/native";


import { Colors } from "../../constants/styles";
import { OutlinedButton } from "../ui/OutlinedButton";
import { RootStackParamList } from "../../constants/RootStackParams";

type LocationPickerRouteParams = RouteProp<RootStackParamList, 'Maps'>;
type LocationPickerNavgationParams = NavigationProp<RootStackParamList,"Maps">



 interface pickedLocationProps{
  lng:number, 
  lat:number
 }
export const LocationPicker = () => {


  const [pickedLocation, setPickedLocation] = useState<pickedLocationProps>({lat:undefined, lng:undefined});
  const [locationPermissionInfo, requestLocationPermission] = useForegroundPermissions()
  const navigation =useNavigation<LocationPickerNavgationParams>();
  const route =useRoute<LocationPickerRouteParams>()
  const isFocused =useIsFocused()

  
// this sets the map location to a specific place on initial render
useEffect(()=>{
  if(isFocused && route.params){
  // assigning the params from the route to a variable to be used 
    const pickedMapLocation= {
      lat: route.params.pickedLatitude,
      lng: route.params.pickedLongitude
    }
    setPickedLocation(pickedMapLocation)
  }


  },[route, isFocused])

  // this verifies if the user has given the suitable permission before the a location ma can be used
  const verifylocationPermissions = async () => {
    if (locationPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestLocationPermission();
      return permissionResponse.granted;
    }

    if (locationPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert("Location permission denied", "You need to grant location permission");
      return false;
    }

    return true;
  };

 

  const getLocationHandler = async () => {
    const hasPermission= await verifylocationPermissions()

    // check if the user has given persion and return if not
    if (!hasPermission){
      return
    }

    // await to get the user position
      const location = await getCurrentPositionAsync()
      if(location.coords.latitude || location.coords.longitude){

        setPickedLocation({
          lng:location.coords.longitude,
          lat:location.coords.latitude
        })
      }


  };

  const pickLoactionFromMap = async () => {
    navigation.navigate("Maps") 
  };

  // let ImagePreview=<Text>No image taken yet!</Text>
  // if(pickedLocation){
  //   ImagePreview= <Image source={{ uri: pickedImage }} style={styles.image} />
  // }

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton onPress={getLocationHandler} icon="location">Locate user</OutlinedButton>
        <OutlinedButton onPress={pickLoactionFromMap} icon="map">Pick on Map</OutlinedButton>
      </View>
    </View>
  );
};
const styles =StyleSheet.create({
  mapPreview:{
    width:"100%",
    height:200,
    marginVertical:8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:Colors.primary100,
    borderRadius:4
  },
  actions:{
   flexDirection: "row",
   justifyContent:"space-around",
   alignItems: "center",
  },
  image:{
    width:"100%",
    height:"100%",
  }
})
