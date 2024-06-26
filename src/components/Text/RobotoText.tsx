import {StyleProp, Text, TextStyle} from 'react-native';

interface RobotoTextInterface {
  text: string;
  textStyle: StyleProp<TextStyle>;
  isBold: boolean;
  numberOfLines: number;
}
function RobotoText(props: RobotoTextInterface) {
  return (
    <Text
      numberOfLines={props.numberOfLines ? props.numberOfLines : 0}
      style={[
        props.textStyle,
        {fontFamily: props.isBold ? 'Roboto-Bold' : 'Roboto-Regular'},
      ]}>
      {props.text}
    </Text>
  );
}

export default RobotoText;
