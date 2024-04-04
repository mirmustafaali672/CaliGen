import {ActivityIndicator, View, ScrollView, Dimensions} from 'react-native';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import RobotoText from '../../components/Text/RobotoText';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import {Schemes} from '../../styles/MaterialColorThemeInterface';
import {
  GetAreaChartDataForCallCount,
  GetChartTypeData,
  GetReportingData,
} from '../../api/BarcodeDataAPI';
import {useEffect, useState} from 'react';
import {
  CountOfUsageInterface,
  LineChartInterface,
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
const borderRadius: number = 40;

interface DonutChartInterface {
  title: string;
  total: number;
  value: number;
  backgroundcolor: string;
  valueColor: string;
}

function hexToRgbA(hex: string) {
  var c: any;
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

function DonutChart(props: DonutChartInterface): React.JSX.Element {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const data: ProgressChartData = {
    data: [
      props.total == 0 || props.value == 0 ? 0 : props.value / props.total,
    ],
    colors: [props.valueColor],
  };

  const chartConfig: AbstractChartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => hexToRgbA(MaterialColorTheme.secondaryContainer),
    useShadowColorFromDataset: false,
  };
  return (
    <View
      style={{
        width: width / 2.2,
        height: 'auto',
        borderRadius: borderRadius,
        backgroundColor: MaterialColorTheme.surfaceContainer,
        margin: '2%',
        paddingBottom: '8%',
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

interface AreaChartInterface {
  categories: string[];
  data: number[];
}
function AreaChart(props: AreaChartInterface): React.JSX.Element {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const data = {
    labels: props.categories,
    datasets: [
      {
        data: props.data,
        color: (opacity = 1) => MaterialColorTheme.primary, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  const chartConfig: AbstractChartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => hexToRgbA(MaterialColorTheme.onSurface),
    useShadowColorFromDataset: false,
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: borderRadius,
        margin: 5,
        width: width / 1.1,
        height: width * 1.4,
        backgroundColor: MaterialColorTheme.surfaceContainer,
      }}>
      <LineChart
        data={data}
        width={width / 1.2}
        height={width}
        verticalLabelRotation={90}
        chartConfig={chartConfig}
        bezier
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
    const [chartTypeTwoData, setChartTypeTwoData] =
    useState<LineChartInterface>();
  async function GetQRData() {
    await GetReportingData('/api/app/barcode-data/reporting-data')
      .then(data => setReportData(data.data))
      .catch(error => {})
      .then(data => {
        setActivity(false);
      });
  }

  async function GetChartType(type: number) {
    if (type == 1) {
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
    } else if (type == 2) {
      await GetAreaChartDataForCallCount(props.route.params?.elementName)
        .then(res => {
          setChartTypeTwoData(res.data);
        })
        .catch(error => {
          setActivity(false);
        })
        .then(res => {
          setActivity(false);
        });
    }
  }

  useEffect(() => {
  }, [reportData]);
  useEffect(() => {
    setActivity(true);
    if (props.route.params?.showTable) {
      GetQRData();
    } else {
      if (props.route.params?.ChartType == 1) {
        GetChartType(1);
      }
      else if (props.route.params?.ChartType == 2) {
        GetChartType(2);
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
      {!activity &&
        !props.route.params?.showTable &&
        props.route.params?.ChartType == 1 && (
          <ScrollView
            overScrollMode="never"
            showsVerticalScrollIndicator={false}>
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
      {!activity &&
        !props.route.params?.showTable &&
        props.route.params?.ChartType == 2 && chartTypeTwoData?.categories.length != 0 && (
          <ScrollView>
          <View style={{alignItems: 'center'}}>
            <AreaChart categories={chartTypeTwoData?.categories ?? ["null"]} data={chartTypeTwoData?.series[0].data ?? [0]} />
          </View></ScrollView>
        )}
    </View>
  );
}
export default QRScannerResultScreen;
