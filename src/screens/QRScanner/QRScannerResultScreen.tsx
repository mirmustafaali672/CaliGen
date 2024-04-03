import {ActivityIndicator, View, ScrollView, Dimensions} from 'react-native';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import RobotoText from '../../components/Text/RobotoText';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import {Schemes} from '../../styles/MaterialColorThemeInterface';
import {GetChartTypeData, GetReportingData} from '../../api/BarcodeDataAPI';
import {useEffect, useState} from 'react';
import {
  CountOfUsageInterface,
  ReportDataInterface,
} from '../../interfaces/ReportingDataInterface';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {ProgressChartData} from 'react-native-chart-kit/dist/ProgressChart';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';
import * as MaterialColors from '../../styles/materialColors';

interface QRScannerResultScreenInterface {
  navigation: any;
  route: any;
}

const width = Dimensions.get('screen').width;

interface DonutChartInterface {
  title: string;
  total: number;
  value: number;
  backgroundcolor: string;
  valueColor: string;
}

function DonutChart(props: DonutChartInterface): React.JSX.Element {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const data: ProgressChartData = {
    data: [
      props.total == 0 || props.value == 0 ? 0 : props.value / props.total,
    ],
    colors: [props.valueColor],
  };

  function hexToRgbA(hex: string) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return (
        'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)'
      );
    }
    throw new Error('Bad Hex');
  }

  const chartConfig: AbstractChartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => hexToRgbA(MaterialColorTheme.surface),
    useShadowColorFromDataset: false,
  };
  return (
    <View
      style={{
        width: width / 2.2,
        height: "auto",
        borderRadius: 40,
        backgroundColor: MaterialColorTheme.surfaceContainer,
        margin: '2%',
        paddingBottom: "8%",
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ProgressChart
        data={data}
        width={width / 2.2}
        height={width / 2.2}
        strokeWidth={16}
        radius={width / 8}
        chartConfig={chartConfig}
        hideLegend={true}
        withCustomBarColorFromData
      />
      <RobotoText
        text={props.value.toString()}
        textStyle={{color: MaterialColorTheme.onSurface}}
        isBold={true}
        numberOfLines={0}
      />
      <RobotoText
        text={props.title}
        textStyle={{color: MaterialColorTheme.onSurface}}
        isBold={true}
        numberOfLines={0}
      />
    </View>
  );
}

function QRScannerResultScreen(props: QRScannerResultScreenInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const [activity, setActivity] = useState(false);
  const [reportData, setReportData] = useState<ReportDataInterface>();
  const [chartTypeOneData, setChartTypeOneData] =
    useState<CountOfUsageInterface>();
  async function GetQRData() {
    await GetReportingData('/api/app/barcode-data/reporting-data')
      .then(data => setReportData(data.data))
      .catch(error => {})
      .then(data => {
        setActivity(false);
      });
  }

  async function GetChartType() {
    await GetChartTypeData('/api/app/barcode-data/count-of-usages')
      .then(res => {
        setChartTypeOneData(res.data);
      })
      .catch(error => {
        setActivity(false);
      })
      .then(res => {
        setActivity(false);
      });
  }

  useEffect(() => {
    console.log(reportData, 'reportData');
  }, [reportData]);
  useEffect(() => {
    setActivity(true);
    if (props.route.params?.showTable) {
      GetQRData();
    } else {
      if (props.route.params?.ChartType) {
        GetChartType();
      }
    }
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: MaterialColorTheme.surface}}>
      <ObjectScreenHeader
        headerTitle={''}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
      {activity && (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={MaterialColorTheme.primary} />
        </View>
      )}
      {!activity && props.route.params?.showTable && (
        <View style={{margin: 10, flex: 1}}>
          <ScrollView>
            <ScrollView
              horizontal
              style={{
                backgroundColor: MaterialColorTheme.secondaryContainer,
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    flexDirection: 'row',
                    backgroundColor: MaterialColorTheme.primaryContainer,
                  }}>
                  {reportData?.columnsName.map(item => {
                    return (
                      <View style={{width: 100}}>
                        <RobotoText
                          text={item}
                          textStyle={{
                            color: MaterialColorTheme.onPrimaryContainer,
                          }}
                          isBold={false}
                          numberOfLines={0}
                        />
                      </View>
                    );
                  })}
                </View>
                {reportData?.listItration.map(iteration => {
                  return (
                    <View
                      style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        flexDirection: 'row',
                      }}>
                      {iteration.columnValue.map(colVal => {
                        return (
                          <View style={{width: 100}}>
                            <RobotoText
                              text={colVal.columnValue}
                              textStyle={{
                                color: MaterialColorTheme.onSecondaryContainer,
                              }}
                              isBold={false}
                              numberOfLines={0}
                            />
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </ScrollView>
        </View>
      )}
      {!activity && !props.route.params?.showTable && (
        <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <DonutChart
              title={'Total device count'}
              total={chartTypeOneData?.totalDeviceCount ?? 0}
              value={chartTypeOneData?.totalDeviceCount ?? 0}
              backgroundcolor={MaterialColors.MaterialDeepPurple}
              valueColor={MaterialColors.MaterialDeepPurpleMono}
            />
            <DonutChart
              title={'Reserved'}
              total={chartTypeOneData?.totalDeviceCount ?? 0}
              value={chartTypeOneData?.reservedCount ?? 0}
              backgroundcolor={MaterialColors.MaterialAmberLight}
              valueColor={MaterialColors.MaterialAmberLightMono}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <DonutChart
              title={'Available'}
              total={chartTypeOneData?.totalDeviceCount ?? 0}
              value={chartTypeOneData?.availableCount ?? 0}
              backgroundcolor={MaterialColors.MaterialGreen}
              valueColor={MaterialColors.MaterialGreenMono}
            />
            <DonutChart
              title={'Calibrated'}
              total={chartTypeOneData?.totalDeviceCount}
              value={chartTypeOneData?.calibratedCount ?? 0}
              backgroundcolor={MaterialColors.MaterialGreen}
              valueColor={MaterialColors.MaterialGreenMono}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <DonutChart
              title={'Not Calibrated'}
              total={chartTypeOneData?.totalDeviceCount}
              value={chartTypeOneData?.notCalibratedCount ?? 0}
              backgroundcolor={MaterialColors.MaterialRed}
              valueColor={MaterialColors.MaterialRedMono}
            />
            <DonutChart
              title={'Problem Reported'}
              total={chartTypeOneData?.totalDeviceCount}
              value={chartTypeOneData?.problemReportedCount ?? 0}
              backgroundcolor={MaterialColors.MaterialRed}
              valueColor={MaterialColors.MaterialRedMono}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
}
export default QRScannerResultScreen;
