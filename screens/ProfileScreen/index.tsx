import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {PrimaryBGColor} from '../../styles/primaryScreenColors';
import PrimaryButton from '../../components/Buttons/PrimaryButtonComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {GetCurrentUserDetailsByUsername} from '../../api/UserAPI';
import {CurrentUserDetailsInterface} from '../../api/interfaces/UserInterface';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';

function ProfileScreen({navigation, logout}) {
  const [currentUser, setCurrentUser] = useState<CurrentUserDetailsInterface>(
    {},
  );
  function Logout() {
    // navigation.navigate();
    logout();
  }
  async function GetUserDetails() {
    await GetCurrentUserDetailsByUsername()
      .then(data => {
        setCurrentUser(data.data);
      })
      .catch(error => {
      });
  }

  useEffect(() => {
    GetUserDetails();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: MaterialColors.MaterialWhite}}>
      <ScrollView overScrollMode="never">
        <View style={{padding: 10}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 100,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 130,
                width: 130,
                borderRadius: 100,
                borderWidth: 2,
                borderColor: MaterialColors.MaterialBlueGreyLight,
              }}>
              <FontAwesome5
                name="user-alt"
                color={MaterialColors.MaterialBlueGreyLight}
                size={90}
              />
            </View>
            <RobotoText
              text={currentUser.userName}
              textStyle={{
                color: MaterialColors.MaterialBlack,
                fontSize: 20,
                marginTop: 12,
                fontWeight: 'bold',
              }}
            />
            <RobotoText
              text={currentUser.email}
              textStyle={{
                color: MaterialColors.MaterialBlack,
                fontSize: 15,
              }}
            />
          </View>
          <View style={styles.sectionSeperatorLine}></View>
          <View>
            <RobotoText text="User Details" textStyle={styles.sectionTitle} />
            <View style={styles.profileDetailsViewSection}>
              <View style={styles.tableMainRow}>
                <RobotoText text="Name: " textStyle={styles.detailsTableKey} />
                <RobotoText
                  text={currentUser.name ? currentUser.name : '--'}
                  textStyle={styles.detailsTableValue}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="Surname: "
                  textStyle={styles.detailsTableKey}
                />
                <RobotoText
                  text={currentUser.surname ? currentUser.surname : '--'}
                  textStyle={styles.detailsTableValue}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="Username: "
                  textStyle={styles.detailsTableKey}
                />
                <RobotoText
                  text={currentUser.userName ? currentUser.userName : '--'}
                  textStyle={styles.detailsTableValue}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText text="Phone: " textStyle={styles.detailsTableKey} />
                <RobotoText
                  text={
                    currentUser.phoneNumber ? currentUser.phoneNumber : '--'
                  }
                  textStyle={styles.detailsTableValue}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText text="Email: " textStyle={styles.detailsTableKey} />
                <RobotoText
                  text={currentUser.email ? currentUser.email : '--'}
                  textStyle={styles.detailsTableValue}
                />
              </View>
            </View>
          </View>
          <View style={styles.sectionSeperatorLine}></View>
          <View>
            <RobotoText
              text="Account Details"
              textStyle={styles.sectionTitle}
            />
            <View style={styles.profileDetailsViewSection}>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="Email Confirmation: "
                  textStyle={styles.detailsTableKey}
                />
                <RobotoText
                  text={styles.emailConfirmed ? 'Confirmed' : 'Pending'}
                  textStyle={styles.detailsTableValue}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="Phone Confirmation: "
                  textStyle={styles.detailsTableKey}
                />
                <RobotoText
                  text={
                    currentUser.phoneNumberConfirmed ? 'Confirmed' : 'Pending'
                  }
                  textStyle={styles.detailsTableValue}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="Account Active: "
                  textStyle={styles.detailsTableKey}
                />
                <RobotoText
                  text={currentUser.isActive ? 'Active' : 'In-Active'}
                  textStyle={styles.detailsTableValue}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="Account Lockout: "
                  textStyle={styles.detailsTableKey}
                />
                <RobotoText
                  text={currentUser.lockoutEnabled ? 'Enabled' : 'Disabled'}
                  textStyle={styles.detailsTableValue}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText text="TFA: " textStyle={styles.detailsTableKey} />
                <RobotoText
                  text={currentUser.twoFactorEnabled ? 'On' : 'Off'}
                  textStyle={styles.detailsTableValue}
                />
              </View>
            </View>
          </View>
          <View style={styles.sectionSeperatorLine}></View>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.tableMainRow}>
              <RobotoText
                text="Edit User Details"
                textStyle={styles.profileButton}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.tableMainRow}>
              <RobotoText
                text="Edit Account Details"
                textStyle={styles.profileButton}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.tableMainRow}>
              <RobotoText
                text="Change Profile Photo"
                textStyle={styles.profileButton}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.tableMainRow}>
              <RobotoText
                text="Change Password"
                textStyle={styles.profileButton}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => logout()}>
            <View style={styles.tableMainRow}>
              <RobotoText text="Logout" textStyle={styles.logOutButton} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsTableKey: {
    color: MaterialColors.MaterialBlack,
    fontSize: 15,
    fontWeight: 'bold',
  },
  detailsTableValue: {
    color: MaterialColors.MaterialBlack,
    fontSize: 15,
  },
  profileDetailsViewSection: {margin: 15, marginTop: 0},
  tableMainRow: {flexDirection: 'row', margin: 2},
  sectionTitle: {
    color: MaterialColors.MaterialBlack,
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
  },
  sectionSeperatorLine: {
    borderBottomWidth: 1,
    marginVertical: 20,
    borderColor: MaterialColors.MaterialBlueGreyLight,
  },
  logOutButton: {
    color: MaterialColors.MaterialRed,
    fontSize: 15,
    fontWeight: 'bold',
  },
  profileButton: {
    color: MaterialColors.MaterialBLueGreyMediumLight,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
