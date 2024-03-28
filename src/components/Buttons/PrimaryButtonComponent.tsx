import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import RobotoText from '../../components/Text/RobotoText';
import { Schemes } from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';

interface PrimaryButtonInterface {
  buttonClicked: any;
  buttonTitle: string;
  buttonIcon: any;
  iconAtEnd: boolean;
  isActivityOnButton?: boolean;
  disableButton?: boolean;
}

function PrimaryButton(props: PrimaryButtonInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: MaterialColorTheme.primary 
    },
  });
  
  return (
    <View>
      <TouchableOpacity
        disabled={props.isActivityOnButton || props.disableButton}
        style={[
          styles.container,
          {
            backgroundColor: props.disableButton
              ? MaterialColorTheme.primaryFixedDim
              : MaterialColorTheme.primary,
          },
        ]}
        onPress={() => props.buttonClicked()}>
        {!props.isActivityOnButton && (
          <View>
            {!props.iconAtEnd && props.buttonIcon}
            <View>
              <RobotoText
                textStyle={{color: MaterialColorTheme.surface}}
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
            color={MaterialColorTheme.surface}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}



export default PrimaryButton;
