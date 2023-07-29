import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../constant/Colors';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
import Btn from '../constant/Btn';
import {hp, wp} from '../constant/Responsive';
import Field from './Field';

const Singin = props => {
  //   const dHeight = Dimensions.get('window').height;
  //   const width = Dimensions.get('window').width;

  const [isSecure, setIsSecure] = useState(true);

  const message = () => {
    Alert.alert('Account Logged');
  };
  return (
    <SafeAreaView style={styles.container}>
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
          <TouchableOpacity onPress={() => props.navigation.navigate('Singup')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginVertical: 60,
            paddingHorizontal: 25,
          }}>
          <Text style={styles.text1}>Sign in</Text>
          <Text style={styles.text2}>
            Welcome to Honey Guards. Please Sign in to your account.
          </Text>
        </View>
      </View>
      <View style={styles.secondBox}>
        <TextInput
          placeholder="User name"
          placeholderTextColor="#d9d9d9"
          style={styles.input}
        />

        <Field />
        {/* <TextInput
          placeholder="Password"
          secureTextEntry={isSecure}
          placeholderTextColor="#d9d9d9"
          style={styles.input}
        /> */}

        <TouchableOpacity onPress={() => props.navigation.navigate('Modal')}>
          <Text
            style={{
              color: '#666666',
              //   position: 'absolute',
              //   right: 40,
              left: 80,
              bottom: 40,
              // top: 10,
              fontSize: 15,
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => {
            setIsSecure(prev => !prev);
          }}>
          {isSecure ? (
            <Icon name="eye" size={40} color="blue" style={styles.eye} />
          ) : (
            <Icon name="eye-off" size={40} color="blue" style={styles.eye} />
          )}
        </TouchableOpacity> */}

        <View style={styles.btnBox}>
          <Btn title="Sign in" press={message} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Singin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  text1: {
    fontSize: 40,
    color: 'white',
    fontWeight: '700',
  },

  text2: {
    color: '#f2f2f2',
    fontSize: 20,
  },
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: 'white',
    marginTop: 25,
    width: '90%',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    color: 'black',
  },
  firstBox: {
    // backgroundColor: colors.primary,
    height: hp(40),
    paddingVertical: 20,
    backgroundColor: colors.primary,
  },
  secondBox: {
    backgroundColor: '#F2F2F2',
    height: hp(60),
    width: wp(100),
    // marginVertical: 10,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnBox: {
    marginVertical: 50,
  },

  eye: {
    position: 'absolute',
    // right: 10,
    left: 90,
    bottom: 30,
  },
});
