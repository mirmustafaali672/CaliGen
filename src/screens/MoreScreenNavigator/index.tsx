import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoreScreen from '../MoreScreen';
import HomeScreen from '../HomeScreen';
import CreateUserScreen from '../UsersScreen/UsersDetailScreen';
import UsersScreen from '../UsersScreen/UsersMainScreen';
import RolesScreen from '../RolesScreen/RolesMainScreen';
import CreateRoleScreen from '../RolesScreen/RolesDetailScreen';
import PermissionMainScreen from '../PermissionsScreen/PermissionMainScreen';
import PermissionDetailScreen from '../PermissionsScreen/PermissionDetailScreen';
import { navigationRef } from './RootNavigation';
import KanbanMainScreen from '../KanbanMainScreen/KanbanMainScreen';
import ProceduresMainScreen from '../Procedures/ProceduresMainScreen';
import ApplicationSetupMainScreen from '../ApplicationSetup/ApplicationSetupMainScreen';
import SkillsMainScreen from '../Skills/SkillsMainScreen';
import ScheduleMainScreen from '../Schedule/ScheduleMainScreen';
import HistoryMainScreen from '../History/HistoryMainScreen';
import AboutMainScreen from '../About/AboutMainScreen';
import SaasMainScreen from '../Saas/SaasMainScreen';
import SubsMainScreen from '../DataAutoExploration/Subs/SubsMainScreen';

function MoreScreenNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef} independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={MoreScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CreateUserScreen"
          component={CreateUserScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="UsersScreen"
          component={UsersScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="RolesScreen"
          component={RolesScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="CreateRoleScreen"
          component={CreateRoleScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PermissionMainScreen"
          component={PermissionMainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PermissionDetailScreen"
          component={PermissionDetailScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="KanbanMainScreen"
          component={KanbanMainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ProceduresMainScreen"
          component={ProceduresMainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ApplicationSetupMainScreen"
          component={ApplicationSetupMainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SkillsMainScreen"
          component={SkillsMainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ScheduleMainScreen"
          component={ScheduleMainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="HistoryMainScreen"
          component={HistoryMainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AboutMainScreen"
          component={AboutMainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SaasMainScreen"
          component={SaasMainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SubsMainScreen"
          component={SubsMainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MoreScreenNavigator;
