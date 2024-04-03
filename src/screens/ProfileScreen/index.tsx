import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {GetCurrentUserDetailsByUsername} from '../../api/UsersAPI';
import {CurrentUserDetailsInterface} from '../../interfaces/UsersInterface';
import RobotoText from '../../components/Text/RobotoText';
import {Schemes} from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';

interface ProfileScreenInterface {
  navigation: any;
  logout: any;
}

const height = Dimensions.get('screen').height;
function ProfileScreen(props: ProfileScreenInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const styles = StyleSheet.create({
    detailsTableKey: {
      color: MaterialColorTheme.onSurface,
      fontSize: 15,
      fontWeight: 'bold',
    },
    detailsTableValue: {
      color: MaterialColorTheme.onSurface,
      fontSize: 15,
    },
    profileDetailsViewSection: {margin: 15, marginTop: 0},
    tableMainRow: {flexDirection: 'row', margin: 2},
    sectionTitle: {
      color: MaterialColorTheme.onSecondaryContainer,
      fontSize: 20,
      fontWeight: 'bold',
      margin: 15,
    },
    sectionSeperatorLine: {
      borderBottomWidth: 1,
      marginVertical: 20,
      borderColor: MaterialColorTheme.secondary,
    },
    logOutButton: {
      color: MaterialColorTheme.tertiary,
      fontSize: 15,
      fontWeight: 'bold',
    },
    profileButton: {
      color: MaterialColorTheme.primary,
      fontSize: 15,
      fontWeight: 'bold',
    },
  });

  const [currentUser, setCurrentUser] = useState<CurrentUserDetailsInterface>(
    {},
  );
  function Logout() {
    // navigation.navigate();
    props.logout();
  }
  async function GetUserDetails() {
    await GetCurrentUserDetailsByUsername()
      .then((data: any) => {
        setCurrentUser(data.data);
      })
      .catch(error => {});
  }

  useEffect(() => {
    GetUserDetails();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: MaterialColorTheme.surface}}>
      <ScrollView overScrollMode="never">
        <View style={{margin: 20}}>
          <View
            style={{
              borderRadius: 30,
              backgroundColor: MaterialColorTheme.primaryContainer,
              width: '100%',
              height: 300,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="face-man"
              color={MaterialColorTheme.onPrimaryContainer}
              size={140}
            />
            <RobotoText
              text={currentUser.userName}
              textStyle={{
                color: MaterialColorTheme.onPrimaryContainer,
                fontSize: 20,
                marginTop: 12,
                fontWeight: 'bold',
              }}
              isBold={false}
              numberOfLines={0}
            />
            <RobotoText
              text={currentUser.email}
              textStyle={{
                color: MaterialColorTheme.onPrimaryContainer,
                fontSize: 15,
              }}
              isBold={false}
              numberOfLines={0}
            />
          </View>
        </View>
        <View style={{margin: 20, marginVertical: 5}}>
          <View
            style={{
              borderRadius: 30,
              backgroundColor: MaterialColorTheme.secondaryContainer,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RobotoText
              text="User Details"
              textStyle={styles.sectionTitle}
              isBold={true}
              numberOfLines={0}
            />
            <View style={styles.profileDetailsViewSection}>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="Name: "
                  textStyle={styles.detailsTableKey}
                  isBold={false}
                  numberOfLines={0}
                />
                <RobotoText
                  text={currentUser.name ? currentUser.name : '--'}
                  textStyle={styles.detailsTableValue}
                  isBold={false}
                  numberOfLines={0}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="Surname: "
                  textStyle={styles.detailsTableKey}
                  isBold={false}
                  numberOfLines={0}
                />
                <RobotoText
                  text={currentUser.surname ? currentUser.surname : '--'}
                  textStyle={styles.detailsTableValue}
                  isBold={false}
                  numberOfLines={0}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="Username: "
                  textStyle={styles.detailsTableKey}
                  isBold={false}
                  numberOfLines={0}
                />
                <RobotoText
                  text={currentUser.userName ? currentUser.userName : '--'}
                  textStyle={styles.detailsTableValue}
                  isBold={false}
                  numberOfLines={0}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="Phone: "
                  textStyle={styles.detailsTableKey}
                  isBold={false}
                  numberOfLines={0}
                />
                <RobotoText
                  text={
                    currentUser.phoneNumber ? currentUser.phoneNumber : '--'
                  }
                  textStyle={styles.detailsTableValue}
                  isBold={false}
                  numberOfLines={0}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="Email: "
                  textStyle={styles.detailsTableKey}
                  isBold={false}
                  numberOfLines={0}
                />
                <RobotoText
                  text={currentUser.email ? currentUser.email : '--'}
                  textStyle={styles.detailsTableValue}
                  isBold={false}
                  numberOfLines={0}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{margin: 20, marginVertical: 5}}>
          <View
            style={{
              borderRadius: 30,
              backgroundColor: MaterialColorTheme.secondaryContainer,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <RobotoText
              text="Account Details"
              textStyle={styles.sectionTitle}
              isBold={false}
              numberOfLines={0}
            />
            <View style={styles.profileDetailsViewSection}>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="Email Confirmation: "
                  textStyle={styles.detailsTableKey}
                  isBold={false}
                  numberOfLines={0}
                />
                <RobotoText
                  text={styles.emailConfirmed ? 'Confirmed' : 'Pending'}
                  textStyle={styles.detailsTableValue}
                  isBold={false}
                  numberOfLines={0}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="Phone Confirmation: "
                  textStyle={styles.detailsTableKey}
                  isBold={false}
                  numberOfLines={0}
                />
                <RobotoText
                  text={
                    currentUser.phoneNumberConfirmed ? 'Confirmed' : 'Pending'
                  }
                  textStyle={styles.detailsTableValue}
                  isBold={false}
                  numberOfLines={0}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="Account Active: "
                  textStyle={styles.detailsTableKey}
                  isBold={false}
                  numberOfLines={0}
                />
                <RobotoText
                  text={currentUser.isActive ? 'Active' : 'In-Active'}
                  textStyle={styles.detailsTableValue}
                  isBold={false}
                  numberOfLines={0}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="Account Lockout: "
                  textStyle={styles.detailsTableKey}
                  isBold={false}
                  numberOfLines={0}
                />
                <RobotoText
                  text={currentUser.lockoutEnabled ? 'Enabled' : 'Disabled'}
                  textStyle={styles.detailsTableValue}
                  isBold={false}
                  numberOfLines={0}
                />
              </View>
              <View style={styles.tableMainRow}>
                <RobotoText
                  text="TFA: "
                  textStyle={styles.detailsTableKey}
                  isBold={false}
                  numberOfLines={0}
                />
                <RobotoText
                  text={currentUser.twoFactorEnabled ? 'On' : 'Off'}
                  textStyle={styles.detailsTableValue}
                  isBold={false}
                  numberOfLines={0}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{margin: 40}}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.tableMainRow}>
              <RobotoText
                text="Edit User Details"
                textStyle={styles.profileButton}
                isBold={false}
                numberOfLines={0}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.tableMainRow}>
              <RobotoText
                text="Edit Account Details"
                textStyle={styles.profileButton}
                isBold={false}
                numberOfLines={0}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.tableMainRow}>
              <RobotoText
                text="Change Profile Photo"
                textStyle={styles.profileButton}
                isBold={false}
                numberOfLines={0}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.tableMainRow}>
              <RobotoText
                text="Change Password"
                textStyle={styles.profileButton}
                isBold={false}
                numberOfLines={0}
              />
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => props.logout()}>
            <View style={styles.tableMainRow}>
              <RobotoText
                text="Logout"
                textStyle={styles.logOutButton}
                isBold={false}
                numberOfLines={0}
              />
            </View>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => props.logout()}
        style={{
          backgroundColor: MaterialColorTheme.tertiary,
          height: height / 12,
          width: height / 12,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          position: 'absolute',
          bottom: 20,
          right: 20,
          elevation: 3,
          zIndex: 1,
        }}>
        <MaterialCommunityIcons
          name="logout"
          color={MaterialColorTheme.onTertiary}
          size={height / 28}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen;
