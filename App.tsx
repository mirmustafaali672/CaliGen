import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MoreScreenNavigator from './src/screens/MoreScreenNavigator';
import {Schemes} from './src/styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from './src/styles/MaterialColorSchemeSelector';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function MyTabs() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();

  function UserLoggedIn() {
    setIsLoggedIn(true);
  }

  return isLoggedIn ? (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: MaterialColorTheme.surface,
          // borderRadius: 100,
          // marginVertical: 4,
          // marginHorizontal: 10,
          // padding: 0,
        },
        headerStyle: {
          backgroundColor: MaterialColorTheme.primary,
        },
        headerTintColor: MaterialColorTheme.onPrimary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveBackgroundColor: MaterialColorTheme.primaryContainer,
        tabBarItemStyle: {
          borderRadius: 100,
          margin: 1,
        },
        tabBarActiveTintColor: MaterialColorTheme.onPrimaryContainer,
        tabBarInactiveTintColor: MaterialColorTheme.onSurface,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbubble-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MoreScreenNavigator}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="profile" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        children={props => (
          <ProfileScreen
            logout={() => setIsLoggedIn(false)}
            navigation={props.navigation}
          />
        )}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  ) : (
    <LoginScreen UserLoggedIn={UserLoggedIn} />
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
