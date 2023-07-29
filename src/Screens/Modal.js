import {View, Text, Modal, TextInput} from 'react-native';
import React from 'react';
import {hp, wp} from '../constant/Responsive';
import {colors} from '../constant/Colors';
import Btn from '../constant/Btn';

export default function Modal1(props) {
  return (
    <View style={{flex: 1}}>
      <Modal visible={true} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.7)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderRadius: wp(5),
              width: wp(90),
              height: hp(40),
              backgroundColor: colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.offWhite,
                fontSize: wp(10),
                fontWeight: 'bold',
              }}>
              Forget Password
            </Text>
            <TextInput
              placeholder="Enter Your Email"
              placeholderTextColor={colors.black}
              //   autoCapitalize={'none'}
              keyboardType={'email-address'}
              style={{
                borderWidth: wp(1),
                borderColor: colors.primary,
                paddingHorizontal: wp(3),
                borderRadius: wp(3),
                backgroundColor: colors.offWhite,
                width: wp(80),
                marginVertical: wp(8),
                color: colors.black,
              }}
            />
            <Btn
              title="Submit"
              press={() => props.navigation.navigate('Welcome')}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
