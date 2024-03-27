import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';

interface PrimaryButtonInterface {
  buttonClicked: any;
  buttonTitle: string;
  buttonIcon: any;
  iconAtEnd: boolean;
  isActivityOnButton?: boolean;
  disableButton?: boolean;
}

function PrimaryButton(props: PrimaryButtonInterface) {
  return (
    <View>
      <TouchableOpacity
        disabled={props.isActivityOnButton || props.disableButton}
        style={[
          styles.container,
          {
            backgroundColor: props.disableButton
              ? MaterialColors.MaterialIndigo
              : MaterialColors.MaterialDeepPurple,
          },
        ]}
        onPress={() => props.buttonClicked()}>
        {!props.isActivityOnButton && (
          <View>
            {!props.iconAtEnd && props.buttonIcon}
            <View>
              <RobotoText
                textStyle={{color: MaterialColors.MaterialWhite}}
                text={props.buttonTitle}
                isBold={false}
                numberOfLines={0}
              />
            </View>
            {props.iconAtEnd && props.buttonIcon}
          </View>
        )}
        {props.isActivityOnButton && (
          <ActivityIndicator
            size="small"
            color={MaterialColors.MaterialWhite}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: MaterialColors.MaterialDeepPurple
  },
});

export default PrimaryButton;
