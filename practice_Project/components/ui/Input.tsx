import React from "react";
import { Text, View, TextInput, KeyboardTypeOptions, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

// Define the props type for better TypeScript integration
type TextInputProps = {
  label: string;
  formInputConfig: {
    keyboardType?: KeyboardTypeOptions;
    value?: string;
    onChangeText: any;
    placeholder?: string;
    maxLength?: number;
    multiline?: boolean;
  };
};

// Functional component for managing expenses with text input
export const Input: React.FC<TextInputProps> = ({ label, formInputConfig }) => {
 // Destructuring props for easy access
 const { multiline } = formInputConfig;

 // Applying conditional styles based on the 'multiline' property
 const inputStyles = [styles.textInput, multiline && styles.multiLine];


  return (
    <View style={styles.formContainer}>
      {/* Display the label for the input */}
      <Text style={styles.label}>{label}</Text>

      {/* TextInput component with properties from formInputConfig */}
      <TextInput
        // Apply some basic styling for better visual representation
        style={inputStyles}
        
        // Adding more configurable properties
        {...formInputConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 8,
    marginHorizontal: 4,
  },
  label: {
    fontSize: 15,
    color: GlobalStyles.colors.primary100,
  },
  textInput: {
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 2,
    fontSize: 18,
    paddingVertical: 8,
    color: GlobalStyles.colors.primary700,
    backgroundColor: GlobalStyles.colors.primary100,
    paddingLeft: 3,
  },
  multiLine: {
    textAlignVertical: "top",
    minHeight: 100,
    // Include additional properties if needed
  },
});
