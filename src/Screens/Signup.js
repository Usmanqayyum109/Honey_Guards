import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../constant/Colors';
import {hp, wp} from '../constant/Responsive';
import Icon from 'react-native-vector-icons/Ionicons';
import Btn from '../constant/Btn';

const Signup = props => {
  const [Password, setPassword] = useState('');
  // console.log(Password);
  const [Confirm_password, Setconfirm_password] = useState('');

  const [isSecure, setIsSecure] = useState(true);
  const [confirm_Secure, setConfirm_Secure] = useState(true);

  const handlePassword = () => {
    if (Password === Confirm_password) {
      alert('Account Createad');
    } else {
      alert('Please enter same password');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView stickyHeaderIndices={[0]}>
          <View style={styles.firstBox}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: wp(90),
              }}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Icon name="arrow-back" size={40} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Singin')}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '700',
                  }}>
                  Sign in
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: wp(5)}}>
              <Text style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>
                Sign up
              </Text>
              <Text style={{fontSize: 20}}>
                Welcome to Honey Guards. Please Sign up to create your account.
              </Text>
            </View>
          </View>

          <View style={styles.secondBox}>
            <TextInput
              placeholder="CompanyName"
              placeholderTextColor="#d9d9d9"
              style={styles.input}
            />

            <TextInput
              placeholder="Your Position in company"
              placeholderTextColor="#d9d9d9"
              style={styles.input}
            />

            <TextInput
              placeholder="Your First Name"
              placeholderTextColor="#d9d9d9"
              style={styles.input}
            />

            <TextInput
              placeholder="Your Maiden Name"
              placeholderTextColor="#d9d9d9"
              style={styles.input}
            />

            <TextInput
              placeholder="Your Last Name"
              placeholderTextColor="#d9d9d9"
              style={styles.input}
            />

            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#d9d9d9"
              style={styles.input}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#d9d9d9"
              style={styles.input}
              value={Password}
              onChangeText={value => setPassword(value)}
              secureTextEntry={isSecure}
            />
            <TouchableOpacity
              onPress={() => {
                setIsSecure(!isSecure);
              }}>
              {isSecure ? (
                <Icon name="eye" size={40} color="blue" style={styles.eye} />
              ) : (
                <Icon
                  name="eye-off"
                  size={40}
                  color="blue"
                  style={styles.eye}
                />
              )}
            </TouchableOpacity>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#d9d9d9"
              style={styles.input}
              value={Confirm_password}
              onChangeText={value => Setconfirm_password(value)}
              secureTextEntry={confirm_Secure}
            />
            <TouchableOpacity
              onPress={() => {
                setConfirm_Secure(!confirm_Secure);
              }}>
              {confirm_Secure ? (
                <Icon name="eye" size={40} color="blue" style={styles.eye} />
              ) : (
                <Icon
                  name="eye-off"
                  size={40}
                  color="blue"
                  style={styles.eye}
                />
              )}
            </TouchableOpacity>
            <View style={styles.btn}>
              <Btn title="Sign up" press={handlePassword} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  firstBox: {
    height: hp(30),
    paddingVertical: wp(10),
    backgroundColor: colors.primary,
    borderRadius: 20,
  },

  secondBox: {
    // height: hp(70),
    width: wp(100),
    backgroundColor: colors.offWhite,
    borderTopLeftRadius: wp(15),
    borderTopRightRadius: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: 'white',
    marginTop: 25,
    width: wp(90),
    marginHorizontal: 20,
    paddingHorizontal: 20,
    color: 'black',
  },

  btn: {
    marginVertical: wp(10),
  },

  eye: {
    position: 'absolute',
    right: wp(-40),
    bottom: wp(2),
  },
});
