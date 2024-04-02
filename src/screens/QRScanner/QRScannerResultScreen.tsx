import {ActivityIndicator, View, ScrollView} from 'react-native';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import RobotoText from '../../components/Text/RobotoText';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import {Schemes} from '../../styles/MaterialColorThemeInterface';
import {GetReportingData} from '../../api/BarcodeDataAPI';
import {useEffect, useState} from 'react';
import {ReportDataInterface} from '../../interfaces/ReportingDataInterface';

interface QRScannerResultScreenInterface {
  navigation: any;
  route: any;
}
function QRScannerResultScreen(props: QRScannerResultScreenInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const [activity, setActivity] = useState(false);
  const [reportData, setReportData] = useState<ReportDataInterface>();
  async function GetQRData() {
    await GetReportingData('/api/app/barcode-data/reporting-data')
      .then(data => setReportData(data.data))
      .catch(error => {})
      .then(data => {
        setActivity(false);
      });
  }

  useEffect(() => {
    console.log(reportData, 'reportData');
  }, [reportData]);
  useEffect(() => {
    setActivity(true);
    GetQRData();
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
      {!activity && (
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
                          textStyle={{color: MaterialColorTheme.onPrimaryContainer}}
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
                              textStyle={{color: MaterialColorTheme.onSecondaryContainer}}
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
    </View>
  );
}
export default QRScannerResultScreen;
