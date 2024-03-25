import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RobotoText from '../Text/RobotoText';
import * as MaterialColors from '../../styles/materialColors';
import {useEffect, useState} from 'react';

interface TabNavBarButtonInterface {
  buttonTitle: string;
  isSelectedTab: boolean;
  onTabButtonClick: any;
}

function TabNavBarButton(props: TabNavBarButtonInterface) {
  return (
    <TouchableOpacity onPress={() => props.onTabButtonClick()}>
      <View style={{margin: 20}}>
        <View
          style={{
            borderBottomWidth: props.isSelectedTab ? 2 : 0,
            borderBottomColor: props.isSelectedTab
              ? MaterialColors.MaterialDeepPurple
              : MaterialColors.MaterialBLueGreyMediumLight,
          }}>
          <RobotoText
            text={props.buttonTitle}
            textStyle={{
              fontSize: 15,
              color: props.isSelectedTab
                ? MaterialColors.MaterialBlack
                : MaterialColors.MaterialBLueGreyMediumLight,
            }}
            isBold={true}
            numberOfLines={0}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export interface TabNavigationComponentInterface {
  items: any[];
  keyName: string;
  valueName: string;
  onTabClicked: any;
  defaultSelectedTabIndex: number;
}

export interface TabComponentsInterface {
  componentName: string;
  componentTitile: string;
}

function TabNavigationComponent(props: TabNavigationComponentInterface) {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(
    props.defaultSelectedTabIndex,
  );
  useEffect(() => {
    props.onTabClicked(selectedTabIndex);
  }, [selectedTabIndex]);
  return (
    <View>
      <ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        {props.items.map((item, index) => {
          return (
            <View key={index}>
              <TabNavBarButton
                buttonTitle={item[props.valueName]}
                isSelectedTab={selectedTabIndex == index}
                onTabButtonClick={() => setSelectedTabIndex(index)}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
export default TabNavigationComponent;
