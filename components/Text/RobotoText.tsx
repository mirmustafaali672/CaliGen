import {Text, StyleSheet} from 'react-native';

function RobotoText({text, textStyle, isBold, numberOfLines}) {
  return (
    <Text
      numberOfLines={numberOfLines ? numberOfLines : 0}
      style={[
        styles.title,
        textStyle,
        {fontFamily: isBold ? 'Roboto-Bold' : 'Roboto-Regular'},
      ]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({});

export default RobotoText;
