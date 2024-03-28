import React, { useEffect, useRef} from 'react';
import {
  StatusBar,
  Animated,
  StyleSheet,
} from 'react-native';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import { Schemes } from '../../styles/MaterialColorThemeInterface';

const ResponseLoadingComponent = (props: LoaderDelayOrder) => {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(translation, {
            toValue: -10,
            duration: 500,
            useNativeDriver: true,
            // delay: 50 * props.order
          }),
          Animated.timing(translation, {
            toValue: 10,
            duration: 500,
            useNativeDriver: true,
            // delay: 50 * props.order
          }),
          Animated.timing(translation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
            // delay: 50 * props.order
          }),
        ]),
        // ,
        // {
        //   iterations: 4
        // }
      ).start();
    }, 100 * props.order);
  }, []);
  return (
    <Animated.View
      style={[
        {
          width: 10,
          height: 10,
          borderRadius: 100,
          backgroundColor: MaterialColorTheme.primary,
          transform: [{translateY: translation}],
          marginLeft: 2,
        },
      ]}
    />
  );
};



export default ResponseLoadingComponent;
