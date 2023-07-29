import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../constant/Colors';
import {hp, wp} from '../constant/Responsive';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Field() {
  const [isSecure, setIsSecure] = useState(true);
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: wp(10),
        borderColor: 'blue',
        borderWidth: wp(0.4),
        backgroundColor: 'white',
        marginVertical: wp(10),
        justifyContent: 'space-between',
        width: wp(90),
        marginHorizontal: wp(4),
        // padding: wp(1),
      }}>
      <TextInput
        placeholder="Password"
        placeholderTextColor="#d9d9d9"
        secureTextEntry={isSecure}
        style={{
          flex: 1,
          fontSize: 15,
          paddingHorizontal: wp(5),
        }}
        includeFontPadding={false}
      />
      <TouchableOpacity
        onPress={() => {
          setIsSecure(prev => !prev);
        }}>
        {isSecure ? (
          <Icon name="eye" size={40} color="blue" />
        ) : (
          <Icon name="eye-off" size={40} color="blue" />
        )}
      </TouchableOpacity>
    </View>
  );
}
