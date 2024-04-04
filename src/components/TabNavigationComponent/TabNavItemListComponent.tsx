import {StyleProp, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import RobotoText from '../Text/RobotoText';
import { Schemes } from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';


interface TabNavItemListComponentInterface {
  title: string;
  onItemClicked: any;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  showAsSelected?: boolean;
}

function TabNavItemListComponent(props: TabNavItemListComponentInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const styles = StyleSheet.create({
    card: {
      borderBottomColor: MaterialColorTheme.onSurface,
      borderBottomWidth: 0.3,
      margin: 0,
      padding: 20,
      borderRadius: 20,
      marginHorizontal: 5
    },
    selected:
    {
      backgroundColor: MaterialColorTheme.primary,
    }
  });
  return (
    <View>
      <TouchableOpacity onPress={() => props.onItemClicked()}>
        <View style={[styles.card, props.style, props.showAsSelected ? styles.selected : {}]}>
          <RobotoText
            text={props.title}
            textStyle={[{color: props.showAsSelected ? MaterialColorTheme.onPrimary : MaterialColorTheme.onSurface}, props.textStyle]}
            isBold={true}
            numberOfLines={0}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}



export default TabNavItemListComponent;
