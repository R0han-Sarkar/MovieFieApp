import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import {FONTFAMILY, FONTSIZE, SPACING} from '../configs/Config';
import {COLORS} from '../configs/Colors';
import AppHeader from '../components/AppHeader';
import SettingComponent from '../components/SettingComponent';
import AccountIcon from 'react-native-vector-icons/FontAwesome';
import SettingIcon from 'react-native-vector-icons/Ionicons';
import ArrowRightIcon from 'react-native-vector-icons/AntDesign';
import ProfileIcon from 'react-native-vector-icons/AntDesign';
import PasswordIcon from 'react-native-vector-icons/MaterialIcons';
import ThemeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PermissionIcon from 'react-native-vector-icons/FontAwesome6';
import OfferIcon from 'react-native-vector-icons/MaterialIcons';
import ReferralIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {List} from 'react-native-paper';

const UserAccountScreen = ({navigation}: any) => {
  const [expandAccountTab, setExpandAccountTab] =
    React.useState<boolean>(false);

  const handleListPress = () => {
    setExpandAccountTab(!expandAccountTab);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.Black} />
      <ScrollView>
        <View style={styles.appHeaderContainer}>
          <AppHeader
            name="close"
            header={'My Profile'}
            action={() => navigation.goBack()}
          />
        </View>

        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/image/profile.jpg')}
            style={styles.avatarImage}
          />
          <Text style={styles.avatarText}>Lucky S</Text>
        </View>

        <View>
          {/* <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View>
            <AccountIcon name="account" style={styles.iconStyle} />
          </View> */}
          {/* <SettingComponent
            // icon="user"
            heading="Account"
            subheading="Edit Profile"
            subtitle="Change Password"
          />
        

          <SettingComponent
            // icon="setting"
            heading="Settings"
            subheading="Theme"
            subtitle="Permissions"
          />
          <SettingComponent
            // icon="dollar"
            heading="Offers & Referrals"
            subheading="Offer"
            subtitle="Referrals"
          />
          <SettingComponent
            // icon="info"
            heading="About"
            subheading="About Movies"
            subtitle="More"
          /> */}

          <List.Section style={{backgroundColor: COLORS.Black}}>
            <List.Accordion
              title="Account"
              left={props => (
                <AccountIcon
                  {...props}
                  name="user"
                  size={FONTSIZE.size_20}
                  color={COLORS.Orange}
                />
              )}
              expanded={expandAccountTab}
              onPress={handleListPress}
              titleStyle={{color: COLORS.White}}
              style={{backgroundColor: COLORS.Grey}}>
              <List.Item
                title="Edit Profile"
                left={props => (
                  <ProfileIcon
                    {...props}
                    name="profile"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                right={props => (
                  <ArrowRightIcon
                    {...props}
                    name="right"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                titleStyle={{color: COLORS.White}}
                style={{backgroundColor: COLORS.WhiteRGBA32}}
              />
              <List.Item
                title="Change Password"
                left={props => (
                  <PasswordIcon
                    {...props}
                    name="password"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                right={props => (
                  <ArrowRightIcon
                    {...props}
                    name="right"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                titleStyle={{color: COLORS.White}}
                style={{backgroundColor: COLORS.WhiteRGBA32}}
              />
            </List.Accordion>

            <List.Accordion
              title="Settings"
              left={props => (
                <SettingIcon
                  {...props}
                  name="settings"
                  size={FONTSIZE.size_20}
                  color={COLORS.Orange}
                />
              )}
              // expanded={expanded}
              // onPress={handleListPress}
              titleStyle={{color: COLORS.White}}
              style={{backgroundColor: COLORS.Grey}}>
              <List.Item
                title="Theme"
                left={props => (
                  <ThemeIcon
                    {...props}
                    name="theme-light-dark"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                right={props => (
                  <ArrowRightIcon
                    {...props}
                    name="right"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                titleStyle={{color: COLORS.White}}
                style={{backgroundColor: COLORS.WhiteRGBA32}}
              />
              <List.Item
                title="Permissions"
                left={props => (
                  <PermissionIcon
                    {...props}
                    name="universal-access"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                right={props => (
                  <ArrowRightIcon
                    {...props}
                    name="right"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                titleStyle={{color: COLORS.White}}
                style={{backgroundColor: COLORS.WhiteRGBA32}}
              />
            </List.Accordion>

            <List.Accordion
              title="Offer & Referrals"
              left={props => (
                <SettingIcon
                  {...props}
                  name="settings"
                  size={FONTSIZE.size_20}
                  color={COLORS.Orange}
                />
              )}
              // expanded={expanded}
              // onPress={handleListPress}
              titleStyle={{color: COLORS.White}}
              style={{backgroundColor: COLORS.Grey}}>
              <List.Item
                title="Offer"
                left={props => (
                  <OfferIcon
                    {...props}
                    name="local-offer"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                right={props => (
                  <ArrowRightIcon
                    {...props}
                    name="right"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                titleStyle={{color: COLORS.White}}
                style={{backgroundColor: COLORS.WhiteRGBA32}}
              />
              <List.Item
                title="Referrals"
                left={props => (
                  <ReferralIcon
                    {...props}
                    name="offer"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                right={props => (
                  <ArrowRightIcon
                    {...props}
                    name="right"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                titleStyle={{color: COLORS.White}}
                style={{backgroundColor: COLORS.WhiteRGBA32}}
              />
            </List.Accordion>

            <List.Accordion
              title="About"
              left={props => (
                <SettingIcon
                  {...props}
                  name="settings"
                  size={FONTSIZE.size_20}
                  color={COLORS.Orange}
                />
              )}
              // expanded={expanded}
              // onPress={handleListPress}
              titleStyle={{color: COLORS.White}}
              style={{backgroundColor: COLORS.Grey}}>
              <List.Item
                title="About Movies"
                left={props => (
                  <ThemeIcon
                    {...props}
                    name="theme-light-dark"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                right={props => (
                  <ArrowRightIcon
                    {...props}
                    name="right"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                titleStyle={{color: COLORS.White}}
                style={{backgroundColor: COLORS.WhiteRGBA32}}
              />
              <List.Item
                title="More"
                left={props => (
                  <PermissionIcon
                    {...props}
                    name="universal-access"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                right={props => (
                  <ArrowRightIcon
                    {...props}
                    name="right"
                    size={FONTSIZE.size_16}
                    color={COLORS.WhiteRGBA75}
                  />
                )}
                titleStyle={{color: COLORS.White}}
                style={{backgroundColor: COLORS.WhiteRGBA32}}
              />
            </List.Accordion>
          </List.Section>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
  },
  profileContainer: {
    alignItems: 'center',
    padding: SPACING.space_36,
  },
  avatarImage: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  avatarText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    marginTop: SPACING.space_16,
    color: COLORS.White,
  },
  iconStyle: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_24,
    paddingHorizontal: SPACING.space_20,
  },
});

export default UserAccountScreen;
