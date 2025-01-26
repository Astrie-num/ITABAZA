import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CodeInput = () => {
  const [code, setCode] = useState(['4', '4', '-', '-']);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  return (
    <View style={styles.container}>
      {code.map((digit, index) => (
        <TextInput
          key={index}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          maxLength={1}
          keyboardType="numeric"
          style={[styles.input, index === 2 && styles.thirdBox, index === 2 && 3 && styles.inputs]}
          

        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  input: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
    borderColor:'#E4DFDF',
  },

  thirdBox:{
    borderColor:'#002D62',
    color:'#E4DFD',
  },

  inputs:{
    color:'#E4DFDF',
  },
});

export default CodeInput;
