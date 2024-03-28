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

interface SecondaryButtonInterface {
  buttonClicked: any;
  buttonTitle: string;
  buttonIcon: any;
  iconAtEnd: boolean;
  isActivityOnButton?: boolean;
  disableButton?: boolean;
}

function SecondaryButton(props: SecondaryButtonInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: MaterialColorTheme.secondary,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: MaterialColorTheme.secondary,
    },
  });
  return (
    <View>
      <TouchableOpacity
        style={[styles.container]}
        onPress={() => props.buttonClicked()}>
        {!props.isActivityOnButton && (
          <View>
            {!props.iconAtEnd && props.buttonIcon}
            <View>
              <RobotoText
                textStyle={{color: MaterialColorTheme.onSecondary}}
                text={props.buttonTitle}
                isBold={false}
                numberOfLines={0}
              />
            </View>
          </View>
        )}
        {props.iconAtEnd && props.buttonIcon}
        {props.isActivityOnButton && (
          <ActivityIndicator
            size="small"
            color={MaterialColorTheme.onSecondary}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}



export default SecondaryButton;
