import { Route } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface ProfileScreenProps {
  route: Route<string, {param: string}>;
  navigation: NavigationScreenProp<any, any>;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ route, navigation }) => {

  const { param } = route.params;
  console.log(param)
  
  return (
    <View>
      <Text>Welcome to your profile!</Text>
      <Text>Param: {JSON.stringify(param)}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

// HomeScreen.navigationOptions = {
//   title: 'Home',
// };

export default ProfileScreen;
