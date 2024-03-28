import {StyleSheet, TouchableOpacity, View} from 'react-native';
import RobotoText from '../Text/RobotoText';
import { Schemes } from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';


interface TabNavItemListComponentInterface {
  title: string;
  onItemClicked: any;
}

function TabNavItemListComponent(props: TabNavItemListComponentInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const styles = StyleSheet.create({
    card: {
      borderBottomColor: MaterialColorTheme.onSurface,
      borderBottomWidth: 0.3,
      margin: 10,
      padding: 10,
    },
  });
  return (
    <View>
      <TouchableOpacity onPress={() => props.onItemClicked()}>
        <View style={styles.card}>
          <RobotoText
            text={props.title}
            textStyle={{color: MaterialColorTheme.onSurface}}
            isBold={true}
            numberOfLines={0}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}



export default TabNavItemListComponent;
