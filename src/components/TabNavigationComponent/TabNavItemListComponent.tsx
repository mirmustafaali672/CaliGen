import {StyleSheet, TouchableOpacity, View} from 'react-native';
import RobotoText from '../Text/RobotoText';
import * as MaterialColors from '../../styles/materialColors';

interface TabNavItemListComponentInterface {
  title: string;
  onItemClicked: any;
}

function TabNavItemListComponent(props: TabNavItemListComponentInterface) {
  return (
    <View>
      <TouchableOpacity onPress={() => props.onItemClicked()}>
        <View style={styles.card}>
          <RobotoText
            text={props.title}
            textStyle={{color: MaterialColors.MaterialBlack}}
            isBold={true}
            numberOfLines={0}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderBottomColor: MaterialColors.MaterialLightestDeepPurple,
    borderBottomWidth: 2,
    margin: 10,
    padding: 10,
  },
});

export default TabNavItemListComponent;
