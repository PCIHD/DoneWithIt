import React from 'react';
import { StyleSheet,Alert, Text, View ,TouchableNativeFeedback,Image,SafeAreaView , Button , Platform,StatusBar,Dimensions} from 'react-native';
import {useDimensions,useDeviceOrientation} from "@react-native-community/hooks";


export default function App() {
  const {landscape} = useDeviceOrientation()


  return (
    <SafeAreaView style={styles.container}>
    <View
      style = {{
        backgroundColor: "dodgerblue",
        height:landscape ? '100%' : '30%',
        width:'100%',
    }}>
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
