import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {colors} from '../constant/Colors';
import {hp, wp} from '../constant/Responsive';
import Icon from 'react-native-vector-icons/Ionicons';
import Btn from '../constant/Btn';
import {fonts} from '../constant/fonts';

const Welcome = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
        <View style={{marginVertical: wp(5), paddingHorizontal: wp(5)}}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="arrow-back" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Image source={require('../Images/image.png')} style={styles.image} />
        </View>
      </View>
      <View style={styles.box2}>
        <Text style={{fontSize: 40, fontFamily: fonts.bold, color: 'white'}}>
          Welcome
        </Text>
        <Text style={{fontSize: 20, color: 'white'}}>
          Welcome to Honey Guards. Please Sign in / Sign up to enjoy the
          services.
        </Text>
        <View>
          <Btn
            title="Sign in"
            press={() => props.navigation.navigate('Singin')}
          />
          <View style={{marginTop: wp(6)}}>
            <Btn
              title="Sign up"
              press={() => props.navigation.navigate('Singup')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offWhite,
  },

  box1: {
    height: hp(60),
  },

  box2: {
    height: hp(40),
    backgroundColor: colors.primary,
    borderTopLeftRadius: wp(15),
    borderTopRightRadius: wp(15),
    paddingHorizontal: wp(10),
  },

  image: {
    width: wp(100),
    height: hp(40),
  },
});
