import React from 'react';
import { View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';

function SecondaryButton(props : {buttonClicked: any, buttonTitle: string, buttonIcon: any, iconAtEnd: boolean}) {
  return (
    <View>
      <TouchableOpacity style={[styles.container]} onPress={() => props.buttonClicked()}>
        {!props.iconAtEnd && props.buttonIcon }
        <View>
          <RobotoText textStyle={{color: MaterialColors.MaterialBlueGreyLight}} text={props.buttonTitle} />
        </View>
        {props.iconAtEnd && props.buttonIcon }
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: MaterialColors.MaterialLightestDeepPurple,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: MaterialColors.MaterialDeepPurple
  },
});

export default SecondaryButton;
