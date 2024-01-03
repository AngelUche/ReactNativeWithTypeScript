import { useCallback, useState } from "react"
import { Alert } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { useLayoutEffect } from "react"
import { IconButton } from "../ui/IconButton"

export const Maps = ({navigation}) => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat:0,
    lng:0
  })
  const region ={
    longitude:37.5,
    latitude:-122.4,
    latitudeDelta:0.09225,
    longitudeDelta:0.0421,
  }

  
  function selectLocationHandler(event) {
    const { coordinate } = event.nativeEvent;
  
    if (coordinate) {
      const { longitude, latitude } = coordinate;
      setSelectedLocation({
        lat: latitude,
        lng: longitude,
      });
    } else {
      console.error("Coordinate is undefined in selectLocationHandler");
    }
  }
  

  const savedpickedLocation=useCallback(()=>{
    if(!selectedLocation.lat || !selectedLocation.lng){
      Alert.alert("No loaction picked", "Please select location first by taping on the map");
      return;
    }
    navigation.navigate("AddPlaces", {pickedLatitude: selectedLocation.lat, pickedLongitude: selectedLocation.lng})
  }, [navigation, selectedLocation.lat, selectedLocation.lng])


  useLayoutEffect(()=>{
      navigation.setOptions({
        headerRight:({tintcolor})=>(
          <IconButton icon="save" size={24} color={tintcolor} onPress={savedpickedLocation}/>
        )
      })
  }, [navigation, savedpickedLocation])

 


  return (
    <MapView initialRegion={region} style={{flex:1}} onPress={selectLocationHandler}>{selectedLocation &&<Marker 
      title="Pick a location"
      coordinate={{
      latitude:selectedLocation.lat, longitude:selectedLocation.lng}}/>}
       </MapView>
  )
}

