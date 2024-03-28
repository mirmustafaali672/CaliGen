import {ScrollView, TouchableOpacity, View} from 'react-native';
import RobotoText from '../Text/RobotoText';
import {useEffect, useState} from 'react';
import { Schemes } from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';

interface TabNavBarButtonInterface {
  buttonTitle: string;
  isSelectedTab: boolean;
  onTabButtonClick: any;
}

function TabNavBarButton(props: TabNavBarButtonInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  return (
    <TouchableOpacity onPress={() => props.onTabButtonClick()}>
      <View style={{margin: 20}}>
        <View
          style={{
            borderBottomWidth: props.isSelectedTab ? 2 : 0,
            borderBottomColor: MaterialColorTheme.primary,
          }}>
          <RobotoText
            text={props.buttonTitle}
            textStyle={{
              fontSize: 15,
              color: props.isSelectedTab
                ? MaterialColorTheme.onSurface
                : MaterialColorTheme.onSurfaceVariant,
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
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
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
