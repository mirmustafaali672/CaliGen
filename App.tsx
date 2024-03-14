/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import SpeecToTextScreen from './screens/SpeecToTextScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import MenuScreen from './screens/MoreScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  PrimaryColor,
  SecondaryColor,
  LightPrimaryColor,
} from './styles/primaryScreenColors';
import  MoreScreenNavigator  from './screens/MoreScreenNavigator';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function MyTabs() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function UserLoggedIn() {
    console.log(' User Logged In.');
    setIsLoggedIn(true);
  }

  return isLoggedIn ? (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: PrimaryColor,
          borderRadius: 100,
          marginVertical: 4,
          marginHorizontal: 10,
          padding: 0,
        },
        headerStyle: {
          backgroundColor: PrimaryColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveBackgroundColor: "#fff",
        tabBarItemStyle: {
          borderRadius: 100,
          margin: 1,
        },
        tabBarActiveTintColor: PrimaryColor,
        tabBarInactiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbubble" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Speech"
        component={SpeecToTextScreen}
        options={{
          tabBarLabel: 'Voice',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="text-to-speech"
              color={color}
              size={size}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Menu"
        component={MoreScreenNavigator}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="menu" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        children={props => (
          <ProfileScreen {...props} logout={() => setIsLoggedIn(false)} />
        )}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  ) : (
    <LoginScreen UserLoggedIn={UserLoggedIn} />
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
