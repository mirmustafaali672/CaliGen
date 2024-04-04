import {View, ScrollView, FlatList} from 'react-native';
import {CurrentAvaiableColor, Schemes} from '../../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../../styles/MaterialColorSchemeSelector';
import ObjectScreenHeader from '../../../components/ScreenHeader/ObjectScreenHeader';
import TabNavItemListComponent from '../../../components/TabNavigationComponent/TabNavItemListComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Appearance} from 'react-native';
import {
  CurrentMaterialColor,
  SetCurrentMaterialColor,
} from '../../../styles/CurrentMaterialColor';
import RobotoText from '../../../components/Text/RobotoText';
import {CurrentAvaiableColorData} from '../../../styles/MaterialColorThemeData';
import { useEffect, useState } from 'react';
import { GetStringFromStorage } from '../../../AsyncStorageActions/AsyncDataAction';

interface ColorSchemeMainScreenInterface {
  navigation: any;
}

function ColorSchemeMainScreen(props: ColorSchemeMainScreenInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const [currentScheme, setCurrentScheme] = useState<CurrentAvaiableColor>();

  async function SetTheme(
    theme: CurrentAvaiableColor,
  ) {
    AsyncStorage.setItem('UserColorScheme', theme != null ? theme : 'Baseline');
    SetCurrentMaterialColor(theme);
    Appearance.setColorScheme(Appearance.getColorScheme());
    props.navigation.navigate('ColorSchemeMainScreen');
  }

  async function GetCurrentScheme()
  {
    let a: CurrentAvaiableColor = await GetStringFromStorage('UserColorScheme');
    setCurrentScheme(a);
  }
  useEffect(()=>
  {
    GetCurrentScheme();
  },[])
  return (
    <View style={{flex: 1, backgroundColor: MaterialColorTheme.surface}}>
      <ObjectScreenHeader
        headerTitle={'Color Scheme'}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <RobotoText
          text={'Note: '}
          textStyle={{color: MaterialColorTheme.onSurfaceVariant}}
          isBold={true}
          numberOfLines={0}
        />
        <RobotoText
          text={'Close and open app again for changes to take place.'}
          textStyle={{color: MaterialColorTheme.onSurfaceVariant}}
          isBold={false}
          numberOfLines={0}
        />
      </View>
      <FlatList
        data={CurrentAvaiableColorData}
        renderItem={({item}) => {
          return (
            <TabNavItemListComponent title={item} onItemClicked={()=>
            {
              SetTheme(item);
              setCurrentScheme(item);
            }} 
            showAsSelected={currentScheme == item}/>
          );
        }}
      />
    </View>
  );
}

export default ColorSchemeMainScreen;
