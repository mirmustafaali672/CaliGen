import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';
import {BarChart, PieChart} from 'react-native-gifted-charts';

const screenHeader = {
  margin: 20,
  fontSize: 40,
  color: MaterialColors.MaterialBlack,
};

function AppIntroComponent() {
  return (
    <View>
      {/* CaliGen by Caliber is is specifically designed to empower the
       Pharma Industry by providing a transformative tool
       with Gen AI capabilities for effectively managing the Quality Value Chain.`; */}
      <RobotoText
        text="About"
        textStyle={screenHeader}
        isBold={true}
        numberOfLines={0}
      />
      <SafeAreaView>
        <Text style={{marginHorizontal: 20}}>
          <Text style={{fontWeight: 'bold'}}>CaliGen</Text>
          <Text> by</Text>
          <Text style={{fontWeight: 'bold'}}> Caliber</Text>
          <Text> is specifically designed to</Text>
          <Text style={{fontWeight: 'bold'}}> empower</Text>
          <Text> the</Text>
          <Text style={{fontWeight: 'bold'}}> Pharma Industry</Text>
          <Text> by providing a </Text>
          <Text style={{fontWeight: 'bold'}}> transformative tool</Text>
          <Text> with </Text>
          <Text style={{fontWeight: 'bold'}}>Gen AI </Text>
          <Text>
            capabilities for effectively managing the Quality Value Chain.
          </Text>
        </Text>
        {/* <View style={{flexDirection: 'row', width: 100}}>
        <RobotoText
          numberOfLines={aboutApp}
          text="CaliGen"
          textStyle={{}}
          isBold={true}
        />
        <RobotoText
          numberOfLines={aboutApp}
          text=" is"
          textStyle={{}}
          isBold={false}
        />
        <RobotoText
          numberOfLines={aboutApp}
          text=" Caliber"
          textStyle={{}}
          isBold={true}
        />
        <RobotoText
          numberOfLines={aboutApp}
          text=" is specifically designed to empower the"
          textStyle={{}}
          isBold={false}
        />
        <RobotoText
          numberOfLines={aboutApp}
          text="Pharma Industry"
          textStyle={{}}
          isBold={true}
        />
        <RobotoText
          numberOfLines={aboutApp}
          text=" by providing a transformative tool
          with Gen AI capabilities for effectively managing the Quality Value Chain. "
          textStyle={{}}
          isBold={false}
        />
      </View> */}
      </SafeAreaView>
      {/* <RobotoText
        numberOfLines={aboutApp}
        text={AboutText}
        textStyle={{marginHorizontal: 20}}
      /> */}
      {/* <TouchableOpacity onPress={() => { aboutApp == 0 ? setAboutApp(5): setAboutApp(0)}}>
        <RobotoText  textStyle={{marginHorizontal: 20, color: MaterialColors.MaterialBlack}} text={aboutApp == 0 ? 'Less' : 'More'} />
      </TouchableOpacity> */}
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
        <RobotoText
          text="Some Sample Data"
          textStyle={styles.chartHeader}
          isBold={false}
          numberOfLines={0}
        />
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
  return (
    <View
      style={{
        height: 60,
        backgroundColor: MaterialColors.MaterialWhite,
        flexDirection: 'row',
        margin: 0,
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
  return (
    <View style={{flex: 1, backgroundColor: MaterialColors.MaterialIndigo}}>
      <View
        style={{
          shadowColor: 'black',
          borderBottomWidth: 2,
          borderColor: MaterialColors.MaterialDeepPurple,
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
