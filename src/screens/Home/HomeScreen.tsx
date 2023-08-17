import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationScreenProp } from 'react-navigation';

interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const navigateToProfile = () => {
    navigation.navigate('Profile', {
      param: 'test',
    });
  };
  
  return (
    <View>
      <Text>Welcome to Cosllection!</Text>
      <Button title="Go to Profile" onPress={navigateToProfile} />
    </View>
  );
};

// HomeScreen.navigationOptions = {
//   title: 'Home',
// };

export default HomeScreen;
