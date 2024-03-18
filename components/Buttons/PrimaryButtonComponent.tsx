import React from 'react';
import { View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';

function PrimaryButton({buttonClicked, buttonTitle, buttonIcon, iconAtEnd}) {
  return (
    <View>
      <TouchableOpacity style={[styles.container]} onPress={() => buttonClicked()}>
        {!iconAtEnd && buttonIcon }
        <View>
          <RobotoText textStyle={{color: 'white'}} text={buttonTitle} />
        </View>
        {iconAtEnd && buttonIcon }
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: MaterialColors.MaterialDeepPurple,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: "row"
  },
});

export default PrimaryButton;
