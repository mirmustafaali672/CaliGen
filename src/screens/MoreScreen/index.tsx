import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {MenuList} from '../../data/MenuData';
import RobotoText from '../../components/Text/RobotoText';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Schemes } from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';

interface GetMenuViewInterface {
  navigation: any;
}
function GetMenuView(props: GetMenuViewInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  return MenuList.map((item, indexi) => (
    <View
      style={{flex: 1, backgroundColor: MaterialColorTheme.surface}}
      key={indexi}>
      <SafeAreaView style={{flex: 1, margin: 6}}>
        <View>
          <TouchableOpacity
            disabled={item.isParent}
            onPress={() => {
              props.navigation.navigate(item.navigationRouteName);
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: 30,
                marginVertical: 5,
                flexDirection: 'row',
                flex: 1,
              }}>
              <View style={{flex: 1}}>
                <FontAwesome5
                  name={item.icons}
                  color={MaterialColorTheme.onSurface}
                  size={12}
                />
              </View>
              <View style={{flex: 10}}>
                <RobotoText
                  text={item.name}
                  textStyle={{
                    color: MaterialColorTheme.onSurface,
                  }}
                  isBold={false}
                  numberOfLines={0}
                />
              </View>
            </View>
          </TouchableOpacity>
          {item.isParent && (
            <SafeAreaView style={{flex: 1, margin: 10, marginTop: 0}}>
              {item.ChildComponents.map((childItem, indexj) => (
                <View
                  key={indexj}
                  style={{
                    flex: 1,
                    backgroundColor: MaterialColorTheme.surface,
                  }}>
                  <SafeAreaView style={{flex: 1, marginHorizontal: 30}}>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          props.navigation.navigate(
                            childItem.navigationRouteName,
                          );
                        }}>
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: 30,
                            marginVertical: 2,
                            marginHorizontal: 10,
                            borderBottomWidth: 0,
                            borderColor: MaterialColorTheme.onSurface,
                            flexDirection: 'row',
                            flex: 1,
                          }}>
                          <View style={{flex: 10}}>
                            <RobotoText
                              text={childItem.name}
                              textStyle={{
                                color: MaterialColorTheme.onSurface,
                              }}
                              isBold={false}
                              numberOfLines={0}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </SafeAreaView>
                </View>
              ))}
            </SafeAreaView>
          )}
        </View>
      </SafeAreaView>
    </View>
  ));
}

interface MenuScreenInterface {
  navigation: any;
}
function MenuScreen(props: MenuScreenInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  return (
    <View
      style={{
        flex: 1,
        padding: 6,
        backgroundColor: MaterialColorTheme.surface,
      }}>
      <ScrollView>
        <GetMenuView navigation={props.navigation} />
      </ScrollView>
    </View>
  );
}


export default MenuScreen;
