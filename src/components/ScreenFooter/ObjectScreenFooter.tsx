import {View} from 'react-native';
import ButtonComponent from '../Buttons';

interface ObjectScreenFooterInterface {
  navigation: any;
  operationType: 1 | 2;
  createButtonClicked: any;
  deleteButtonClicked: any;
  isActivityOnButton: boolean;
  isActivityOnTernaryButton: boolean;
  disableSumbitButton: boolean;
}
// Here operationType 1 means Create and 2 means Update
//Here buttonTypeClicked 1 means Primary Button Clicked 2 Means Secondary button clicked and 3 means ternary button clicked

function ObjectScreenFooter(props: ObjectScreenFooterInterface) {
  return (
    <View style={{flexDirection: 'row', flex: 1, gap: 40}}>
      <View style={{flex: 1}}>
        {props.operationType == 1 && (
          <ButtonComponent
            buttonClicked={() => props.navigation.goBack()}
            buttonTitle="Back"
            buttonIcon={<View></View>}
            iconAtEnd={false}
            type="Secondary"
          />
        )}
        {props.operationType == 2 && (
          <ButtonComponent
            buttonClicked={() => props.deleteButtonClicked()}
            buttonTitle="Delete"
            buttonIcon={<View></View>}
            iconAtEnd={false}
            isActivityOnButton={props.isActivityOnTernaryButton}
            type="Danger"
            inverse
          />
        )}
      </View>
      <View style={{flex: 1}}>
        <ButtonComponent
          buttonClicked={() => props.createButtonClicked()}
          buttonTitle={props.operationType == 1 ? 'Create' : 'Update'}
          buttonIcon={<View></View>}
          iconAtEnd={false}
          isActivityOnButton={props.isActivityOnButton}
          disableButton={props.disableSumbitButton}
          type="Primary"
        />
      </View>
    </View>
  );
}

export default ObjectScreenFooter;
