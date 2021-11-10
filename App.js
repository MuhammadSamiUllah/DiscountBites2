import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/screens/Routes";
import LottieView from 'lottie-react-native';

const App =  () => {
  const [isLoading, SetIsLoading] = React.useState(true);
  const [userToken, SetUserToken] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      SetIsLoading(false);
    }, 6600);


  }, [])
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <LottieView source={require('./assets/52006-discount.json')} autoPlay loop />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
export default App;
