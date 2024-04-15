import {ScrollView, View} from 'react-native';
import {Schemes} from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import ButtonComponent from '../../components/Buttons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RobotoText from '../../components/Text/RobotoText';
function ButtonExampleMainScreen(): React.JSX.Element {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  return (
    <ScrollView overScrollMode="never">
      <RobotoText
        text={'Buttons'}
        textStyle={{
          color: MaterialColorTheme.onSurface,
          fontSize: 50,
          margin: 10,
        }}
        isBold={false}
        numberOfLines={0}
      />
      <View
        style={{
          gap: 10,
          marginHorizontal: 10,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Primary'}
          buttonIcon={undefined}
          iconAtEnd={true}
          type={'Primary'}
          isActivityOnButton={false}
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Primary Stroked'}
          buttonIcon={undefined}
          iconAtEnd={true}
          type={'Primary'}
          isActivityOnButton={false}
          inverse
          borderWidth={2}
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Primary Inverse'}
          buttonIcon={undefined}
          iconAtEnd={true}
          type={'Primary'}
          isActivityOnButton={false}
          inverse
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Secondary '}
          buttonIcon={undefined}
          iconAtEnd={true}
          type={'Secondary'}
          isActivityOnButton={false}
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Secondary stroked'}
          buttonIcon={undefined}
          iconAtEnd={true}
          type={'Secondary'}
          isActivityOnButton={false}
          inverse
          borderWidth={2}
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Secondary inverse'}
          buttonIcon={undefined}
          iconAtEnd={true}
          type={'Secondary'}
          isActivityOnButton={false}
          inverse
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Tertiary'}
          buttonIcon={undefined}
          iconAtEnd={true}
          type={'Tertiary'}
          isActivityOnButton={false}
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Tertiary Stoked'}
          buttonIcon={undefined}
          iconAtEnd={true}
          type={'Tertiary'}
          isActivityOnButton={false}
          inverse
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Tertiary Inverse'}
          buttonIcon={undefined}
          iconAtEnd={true}
          type={'Tertiary'}
          isActivityOnButton={false}
          inverse
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Danger'}
          buttonIcon={undefined}
          iconAtEnd={true}
          type={'Danger'}
          isActivityOnButton={false}
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Danger Stroked'}
          buttonIcon={undefined}
          iconAtEnd={true}
          type={'Danger'}
          isActivityOnButton={false}
          inverse
          borderWidth={2}
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Danger Inverse'}
          buttonIcon={undefined}
          iconAtEnd={true}
          type={'Danger'}
          isActivityOnButton={false}
          inverse
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Danger with radius'}
          buttonIcon={undefined}
          iconAtEnd={true}
          type={'Danger'}
          isActivityOnButton={false}
          inverse
          borderWidth={2}
          radius={1000}
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Button with icon'}
          buttonIcon={
            <MaterialCommunityIcons
              name="logout"
              color={MaterialColorTheme.onTertiary}
              size={20}
            />
          }
          iconAtEnd={true}
          type={'Primary'}
          isActivityOnButton={false}
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Button with icon'}
          buttonIcon={
            <MaterialCommunityIcons
              name="logout"
              color={MaterialColorTheme.onTertiary}
              size={20}
            />
          }
          iconAtEnd={false}
          type={'Primary'}
          isActivityOnButton={false}
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Button'}
          buttonTextStyle={{marginHorizontal:  20}}
          buttonIcon={undefined}
          iconAtEnd={false}
          type={'Primary'}
          isActivityOnButton={false}
          radius={100}
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Button'}
          buttonTextStyle={{marginHorizontal:  20}}
          buttonIcon={undefined}
          iconAtEnd={false}
          type={"Secondary"}
          isActivityOnButton={false}
          radius={100}
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Button'}
          buttonTextStyle={{marginHorizontal:  20}}
          buttonIcon={undefined}
          iconAtEnd={false}
          type={"Tertiary"}
          isActivityOnButton={false}
          radius={100}
        />
        <ButtonComponent
          buttonClicked={() => console.log('Button Clicked')}
          buttonTitle={'Button'}
          buttonTextStyle={{marginHorizontal:  20}}
          buttonIcon={undefined}
          iconAtEnd={false}
          type={"Danger"}
          isActivityOnButton={false}
          radius={100}
        />
      </View>
    </ScrollView>
  );
}
export default ButtonExampleMainScreen;
