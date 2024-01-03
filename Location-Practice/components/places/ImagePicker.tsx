import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker";
import { useState } from "react";
import { Alert, View, Image, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";
import { OutlinedButton } from "../ui/OutlinedButton";

export const ImagePicker = () => {
  const [cameraPermission, requestPermission] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState<string | undefined>(undefined);


  const verifyCameraPermissions = async () => {
    if (cameraPermission.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermission.status === PermissionStatus.DENIED) {
      Alert.alert("Camera permission denied", "You need to grant camera permission to use the take image");
      return false;
    }

    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyCameraPermissions();

    if (!hasPermission) {
      return;
    }

    try {
      const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });

      if (!image.canceled) {
        // Check if 'assets' array exists and has at least one element
        if (image.assets && image.assets.length > 0) {
          // Access the URI property from the first element of the 'assets' array
          const imageUri = image.assets[0].uri;
          setPickedImage(imageUri);
        }
      } else {
        Alert.alert("Image picker was canceled");
      }
    } catch (error) {
      Alert.alert("Error launching camera:", error.message);
    }
  };

  let ImagePreview=<Text>No image taken yet!</Text>
  if(pickedImage && pickedImage.length>=0){
    ImagePreview= <Image source={{ uri: pickedImage }} style={styles.image} />
  }

  return (
    <View>
      <View style={styles.imagePreview}>{ImagePreview}</View>
      <OutlinedButton onPress={takeImageHandler} icon="camera">Take Image</OutlinedButton>
    </View>
  );
};
const styles =StyleSheet.create({
  imagePreview:{
    width:"100%",
    height:200,
    marginVertical:8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:Colors.primary100,
    borderRadius:4
  },
  image:{
    width:"100%",
    height:"100%",
  }
})
