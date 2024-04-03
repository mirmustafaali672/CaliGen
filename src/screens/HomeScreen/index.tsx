import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import RobotoText from '../../components/Text/RobotoText';
import {BarChart, PieChart} from 'react-native-gifted-charts';
import {Schemes} from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';

function AppIntroComponent() {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const screenHeader = {
    margin: 20,
    fontSize: 40,
    color: MaterialColorTheme.onSurface,
  };
  return (
    <View>
      <RobotoText
        text="About"
        textStyle={screenHeader}
        isBold={true}
        numberOfLines={0}
      />
      <SafeAreaView>
        <Text style={{marginHorizontal: 20}}>
          <Text
            style={{fontWeight: 'bold', color: MaterialColorTheme.onSurface}}>
            CaliGen
          </Text>
          <Text style={{color: MaterialColorTheme.onSurface}}> by</Text>
          <Text
            style={{fontWeight: 'bold', color: MaterialColorTheme.onSurface}}>
            {' '}
            Caliber
          </Text>
          <Text style={{color: MaterialColorTheme.onSurface}}>
            {' '}
            is specifically designed to
          </Text>
          <Text
            style={{fontWeight: 'bold', color: MaterialColorTheme.onSurface}}>
            {' '}
            empower
          </Text>
          <Text style={{color: MaterialColorTheme.onSurface}}> the</Text>
          <Text
            style={{fontWeight: 'bold', color: MaterialColorTheme.onSurface}}>
            {' '}
            Pharma Industry
          </Text>
          <Text style={{color: MaterialColorTheme.onSurface}}>
            {' '}
            by providing a{' '}
          </Text>
          <Text
            style={{fontWeight: 'bold', color: MaterialColorTheme.onSurface}}>
            {' '}
            transformative tool
          </Text>
          <Text style={{color: MaterialColorTheme.onSurface}}> with </Text>
          <Text
            style={{fontWeight: 'bold', color: MaterialColorTheme.onSurface}}>
            Gen AI{' '}
          </Text>
          <Text style={{color: MaterialColorTheme.onSurface}}>
            capabilities for effectively managing the Quality Value Chain.
          </Text>
        </Text>
      </SafeAreaView>
    </View>
  );
}

function InsightComponent() {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();

  const styles = StyleSheet.create({
    mainCardContainer: {
      // height: 400,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: MaterialColorTheme.surfaceContainer,
      margin: 10,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 3,
      padding: 20,
    },
    chartHeader: {
      color: MaterialColorTheme.onSurface,
      margin: 20,
      fontSize: 20,
    },
    screenHeader: {
      margin: 20,
      fontSize: 40,
      color: MaterialColorTheme.onSurface,
    },
  });

  const screenHeader = {
    margin: 20,
    fontSize: 40,
    color: MaterialColorTheme.onSurface,
  };

  const barData = [
    {value: 250, label: 'M', labelTextStyle: { color: MaterialColorTheme.onSurface}},
    {value: 500, label: 'T', frontColor: MaterialColorTheme.primary , labelTextStyle: { color: MaterialColorTheme.onSurface}},
    {value: 745, label: 'W', frontColor: MaterialColorTheme.primary, labelTextStyle: { color: MaterialColorTheme.onSurface}},
    {value: 320, label: 'T', labelTextStyle: { color: MaterialColorTheme.onSurface}},
    {value: 600, label: 'F', frontColor: MaterialColorTheme.primary, labelTextStyle: { color: MaterialColorTheme.onSurface}},
    {value: 256, label: 'S', labelTextStyle: { color: MaterialColorTheme.onSurface}},
    {value: 300, label: 'S', labelTextStyle: { color: MaterialColorTheme.onSurface}},
  ];
  const stackData = [
    {
      stacks: [
        {value: 10, color: MaterialColorTheme.tertiary},
        {value: 20, color: MaterialColorTheme.primaryFixedDim, marginBottom: 2},
      ], labelTextStyle: { color: MaterialColorTheme.onSurface}, 
      label: 'Jan',
    },
    {
      stacks: [
        {value: 10, color: MaterialColorTheme.primaryFixedDim},
        {value: 11, color: MaterialColorTheme.tertiary, marginBottom: 2},
        {value: 15, color: MaterialColorTheme.error, marginBottom: 2},
      ], labelTextStyle: { color: MaterialColorTheme.onSurface}, 
      label: 'Mar',
    },
    {
      stacks: [
        {value: 14, color: MaterialColorTheme.tertiary},
        {value: 18, color: MaterialColorTheme.primaryFixedDim, marginBottom: 2},
      ], labelTextStyle: { color: MaterialColorTheme.onSurface}, 
      label: 'Feb',
    },
    {
      stacks: [
        {value: 7, color: MaterialColorTheme.primaryFixedDim},
        {value: 11, color: MaterialColorTheme.tertiary, marginBottom: 2},
        {value: 10, color: MaterialColorTheme.error, marginBottom: 2},
      ], labelTextStyle: { color: MaterialColorTheme.onSurface}, 
      label: 'Mar',
    },
  ];

  const pieData = [
    {value: 54, color: MaterialColorTheme.primaryFixedDim, text: '54%'},
    {value: 40, color: MaterialColorTheme.primary, text: '30%'},
    {value: 20, color: MaterialColorTheme.dark, text: '26%'},
  ];

  return (
    <View>
      <RobotoText
        text="Insight"
        textStyle={screenHeader}
        isBold={true}
        numberOfLines={0}
      />
      <View style={styles.mainCardContainer}>
        <RobotoText
          text="Daily Sample Collection"
          textStyle={styles.chartHeader}
          isBold={false}
          numberOfLines={0}
        />
        <BarChart
         yAxisTextStyle={{color: MaterialColorTheme.onSurface}}
          barWidth={22}
          noOfSections={3}
          barBorderRadius={4}
          frontColor={MaterialColorTheme.secondaryContainer}
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>
      <View style={styles.mainCardContainer}>
        <RobotoText
          text="Some Sample Data"
          textStyle={styles.chartHeader}
          isBold={false}
          numberOfLines={0}
        />
        <BarChart
        yAxisTextStyle={{color: MaterialColorTheme.onSurface}}
          width={340}
          rotateLabel
          noOfSections={4}
          stackData={stackData}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>
      <View style={styles.mainCardContainer}>
        <RobotoText
          text="Daily Sample Collection"
          textStyle={styles.chartHeader}
          isBold={false}
          numberOfLines={0}
        />
        <PieChart
          showText
          textColor="black"
          radius={150}
          textSize={20}
          showTextBackground
          textBackgroundRadius={26}
          data={pieData}
        />
      </View>
    </View>
  );
}

function HomeScreenHeader() {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50,
      position: 'absolute',
      right: 10,
      marginVertical: 5,
    },
  });

  return (
    <View
      style={{
        height: 60,
        backgroundColor: MaterialColorTheme.surface,
        flexDirection: 'row',
        margin: 0,
      }}>
      <View>
        <RobotoText
          text="CaliGen"
          textStyle={{
            margin: 10,
            fontSize: 30,
            color: MaterialColorTheme.onSurface,
          }}
          isBold={true}
          numberOfLines={0}
        />
      </View>
      <Image
        style={styles.tinyLogo}
        source={require('../../../assets/logo.png')}
      />
    </View>
  );
}

function HomeScreen() {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  return (
    <View style={{flex: 1, backgroundColor: MaterialColorTheme.background}}>
      <View
        style={{
          shadowColor: 'black',
          borderBottomWidth: 2,
          borderColor: MaterialColorTheme.primary,
        }}>
        <HomeScreenHeader />
      </View>
      <ScrollView overScrollMode="never">
        <AppIntroComponent />
        <InsightComponent />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
