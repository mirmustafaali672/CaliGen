import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';
import {BarChart, PieChart} from 'react-native-gifted-charts';
import {AboutText} from '../../data/HomeScreenAboutData';

const screenHeader = {
  margin: 20,
  fontSize: 40,
  color: MaterialColors.MaterialBlack,
};

function AppIntroComponent() {
  console.log('sdfa', AboutText);
  return (
    <View>
      <RobotoText text="About" textStyle={screenHeader} isBold={true} />
      <RobotoText text={AboutText} textStyle={{marginHorizontal: 20}} />
    </View>
  );
}

function InsightComponent() {
  const barData = [
    {value: 250, label: 'M'},
    {value: 500, label: 'T', frontColor: MaterialColors.MaterialDeepPurple},
    {value: 745, label: 'W', frontColor: MaterialColors.MaterialDeepPurple},
    {value: 320, label: 'T'},
    {value: 600, label: 'F', frontColor: MaterialColors.MaterialDeepPurple},
    {value: 256, label: 'S'},
    {value: 300, label: 'S'},
  ];
  const stackData = [
    {
      stacks: [
        {value: 10, color: MaterialColors.MaterialOrange},
        {value: 20, color: MaterialColors.MaterialBlue, marginBottom: 2},
      ],
      label: 'Jan',
    },
    {
      stacks: [
        {value: 10, color: MaterialColors.MaterialBlue},
        {value: 11, color: MaterialColors.MaterialOrange, marginBottom: 2},
        {value: 15, color: MaterialColors.MaterialGreen, marginBottom: 2},
      ],
      label: 'Mar',
    },
    {
      stacks: [
        {value: 14, color: MaterialColors.MaterialOrange},
        {value: 18, color: MaterialColors.MaterialBlue, marginBottom: 2},
      ],
      label: 'Feb',
    },
    {
      stacks: [
        {value: 7, color: MaterialColors.MaterialBlue},
        {value: 11, color: MaterialColors.MaterialOrange, marginBottom: 2},
        {value: 10, color: MaterialColors.MaterialGreen, marginBottom: 2},
      ],
      label: 'Mar',
    },
  ];

  const pieData = [
    {value: 54, color: MaterialColors.MaterialBlue, text: '54%'},
    {value: 40, color: MaterialColors.MaterialBlueGreyLight, text: '30%'},
    {value: 20, color: MaterialColors.MaterialRed, text: '26%'},
  ];

  return (
    <View>
      <RobotoText text="Insight" textStyle={screenHeader} isBold={true} />
      <View style={styles.mainCardContainer}>
        <RobotoText
          text="Daily Sample Collection"
          textStyle={styles.chartHeader}
        />
        <BarChart
          barWidth={22}
          noOfSections={3}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
        />
      </View>
      <View style={styles.mainCardContainer}>
        <RobotoText text="Some Sample Data" textStyle={styles.chartHeader} />
        <BarChart
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
  return (
    <View
      style={{
        height: 60,
        backgroundColor: MaterialColors.MaterialWhite,
        flexDirection: 'row',
        margin: 5,
      }}>
      <View>
        <RobotoText
          text="CaliGen"
          textStyle={{
            margin: 10,
            fontSize: 30,
            color: MaterialColors.MaterialBlack,
          }}
          isBold={true}
        />
      </View>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/logo.png')}
      />
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{flex: 1, backgroundColor: MaterialColors.MaterialWhite}}>
        <View style={{ shadowColor: 'black', borderBottomWidth: 2, borderColor: MaterialColors.MaterialDeepPurple }}>
      <HomeScreenHeader />
      </View>
      <ScrollView overScrollMode="never">
        <AppIntroComponent />
        <InsightComponent />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainCardContainer: {
    // height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: MaterialColors.MaterialWhite,
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
    color: MaterialColors.MaterialBlack,
    margin: 20,
    fontSize: 20,
  },
  screenHeader: {
    margin: 20,
    fontSize: 40,
    color: MaterialColors.MaterialBlack,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 10,
    marginVertical: 5,
  },
});

export default HomeScreen;
