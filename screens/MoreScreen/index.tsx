import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {MenuList} from '../../data/MenuData';
import {PrimaryColor, PrimaryBGColor} from '../../styles/primaryScreenColors';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface GetMenuViewInterface 
{
  navigation: any
}
function GetMenuView(props: GetMenuViewInterface) {

  
  return MenuList.map((item, indexi) => (
    <View style={{flex: 1, backgroundColor: MaterialColors.MaterialWhite}} key={indexi}>
      <SafeAreaView style={{flex: 1, margin: 6}}>
        <View>
          <TouchableOpacity  disabled={item.isParent} onPress={()=>{props.navigation.navigate(item.navigationRouteName)}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: 30,
                marginVertical: 5,
                borderBottomWidth: 0,
                borderColor: MaterialColors.MaterialBlueGreyLight,
                flexDirection: 'row',
                flex: 1,
              }}>
              <View style={{flex: 1}}>
                <FontAwesome5
                  name={item.icons}
                  color={MaterialColors.MaterialBlueGreyLight}
                  size={12}
                />
              </View>
              <View style={{flex: 10}}>
                <RobotoText
                  text={item.name}
                  textStyle={{
                    color: MaterialColors.MaterialBlack,
                  }} isBold={false} numberOfLines={0}                />
              </View>
            </View>
          </TouchableOpacity>
          {item.isParent && (
            <SafeAreaView style={{flex: 1, margin: 10, marginTop: 0}}>
              {item.ChildComponents.map((childItem, indexj) => (
                <View key={indexj}
                  style={{
                    flex: 1,
                    backgroundColor: MaterialColors.MaterialWhite,
                  }}>
                  <SafeAreaView style={{flex: 1, marginHorizontal: 30}}>
                    <View>
                      <TouchableOpacity
                        onPress={()=>{props.navigation.navigate(childItem.navigationRouteName)}}>
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: 30,
                            marginVertical: 2,
                            marginHorizontal: 10,
                            borderBottomWidth: 0,
                            borderColor: MaterialColors.MaterialBlueGreyLight,
                            flexDirection: 'row',
                            flex: 1,
                          }}>
                          {/* <View style={{flex: 1}}>
                            <FontAwesome5
                              name={childItem.icons}
                              color={MaterialColors.MaterialBlueGreyLight}
                              size={12}
                            />
                          </View> */}
                          <View style={{flex: 10}}>
                            <RobotoText
                              text={childItem.name}
                              textStyle={{
                                color: MaterialColors.MaterialBlack,
                              }} isBold={false} numberOfLines={0}                            />
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

interface MenuScreenInterface 
{
  navigation : any
}
function MenuScreen(props: MenuScreenInterface) {
  return (
    <View
      style={{
        flex: 1,
        padding: 6,
        backgroundColor: MaterialColors.MaterialWhite,
      }}>
      <ScrollView>
        <GetMenuView navigation={props.navigation} />
      </ScrollView>
    </View>
  );
  // <View style={{flex: 1, backgroundColor: MaterialColors.MaterialWhite}}>
  //   <SafeAreaView style={{flex: 1, margin: 10}}>
  //           <View>
  //           <TouchableOpacity>
  //             <View
  //               style={{
  //                 alignItems: 'center',
  //                 justifyContent: 'center',
  //                 width: '100%',
  //                 height: 30,
  //                 marginVertical: 5,
  //                 borderBottomWidth: 0,
  //                 borderColor: MaterialColors.MaterialBlueGreyLight,
  //                 flexDirection: 'row',
  //                 flex: 1,
  //               }}>
  //               <View style={{flex: 1}}>
  //                 <FontAwesome5
  //                   name={item.icons}
  //                   color={MaterialColors.MaterialBlueGreyLight}
  //                   size={12}
  //                 />
  //               </View>
  //               <View style={{flex: 10}}>
  //                 <RobotoText
  //                   text={item.name}
  //                   textStyle={{
  //                     color: MaterialColors.MaterialBlack,
  //                   }}
  //                 />
  //               </View>
  //             </View>
  //           </TouchableOpacity>
  //           { item.isParent && (
  //             <SafeAreaView style={{flex: 1, margin: 10}}>
  //             <FlatList
  //               keyExtractor={item => item.name}
  //               data={item.ChildComponents}
  //               renderItem={({Item}) => {
  //                 return (
  //                   <View>
  //                   <TouchableOpacity>
  //                     <View
  //                       style={{
  //                         alignItems: 'center',
  //                         justifyContent: 'center',
  //                         width: '100%',
  //                         height: 30,
  //                         marginVertical: 5,
  //                         borderBottomWidth: 0,
  //                         borderColor: MaterialColors.MaterialBlueGreyLight,
  //                         flexDirection: 'row',
  //                         flex: 1,
  //                       }}>
  //                       <View style={{flex: 1}}>
  //                         <FontAwesome5
  //                           name={item.icons}
  //                           color={MaterialColors.MaterialBlueGreyLight}
  //                           size={12}
  //                         />
  //                       </View>
  //                       <View style={{flex: 10}}>
  //                         <RobotoText
  //                           text={item.name}
  //                           textStyle={{
  //                             color: MaterialColors.MaterialBlack,
  //                           }}
  //                         />
  //                       </View>
  //                     </View>
  //                   </TouchableOpacity>
  //                   {/* { childItem.isParent && (

  //                   )} */}
  //                   </View>
  //                 );
  //               }}
  //             />
  //           </SafeAreaView>
  //           )}
  //           </View>
  //   </SafeAreaView>
  // </View>
}

const styles = StyleSheet.create({
  MenuButtonStyle: {
    alignItems: 'center',
    padding: 10,
    margin: 2,
    marginHorizontal: 10,
    backgroundColor: PrimaryColor,
    borderRadius: 10,
  },
});

export default MenuScreen;
