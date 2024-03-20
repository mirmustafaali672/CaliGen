import React from 'react';
import { View, Button, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';

interface SecondaryButtonInterface {
  buttonClicked: any,
  buttonTitle: string,
  buttonIcon: any,
  iconAtEnd: boolean,
  isActivityOnButton?: boolean,
  disableButton? : boolean
}

function SecondaryButton(props: SecondaryButtonInterface) {
  return (
    <View>
      <TouchableOpacity style={[styles.container]} onPress={() => props.buttonClicked()}>
        {!props.isActivityOnButton && <View>
          {!props.iconAtEnd && props.buttonIcon}
          <View>
            <RobotoText textStyle={{ color: MaterialColors.MaterialDeepPurple }} text={props.buttonTitle} isBold={false} numberOfLines={0} />
          </View>
        </View>}
        {props.iconAtEnd && props.buttonIcon}
        {props.isActivityOnButton &&
          <ActivityIndicator size="small" color={MaterialColors.MaterialWhite} />
        }
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: MaterialColors.MaterialWhite,
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
