import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Switch, Image, ImageBackground, TouchableOpacity, Button, ActivityIndicator, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StackNavigationProp } from '@react-navigation/stack'; 
import { useNavigation } from '@react-navigation/native';

// Define your navigation parameters
type RootStackParamList = {
  GetPaidViewDetails: undefined;
};

// Define your navigation prop type
type GetPaidPage1NavigationProp = StackNavigationProp<RootStackParamList, 'GetPaidViewDetails'>;

function GetPaidPage1() {
  const [askForTip, setAskForTip] = useState(false);
  const [staticCode, setStaticCode] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // Explicitly specify type as Date
  const [amount, setAmount] = useState('');
  const [reference, setReference] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false); // State to control visibility of date picker
  const navigation = useNavigation<GetPaidPage1NavigationProp>(); // Use GetPaidPage1NavigationProp

  const handleContinue = () => {
    setLoading(true);
    // Implement your logic here for handling Continue button click
    navigation.navigate('GetPaidViewDetails'); 
  };


  return (
    <ImageBackground style={styles.container} source={require("../../assets/backgroundmicash.png")}>
      <View style={styles.toolbar}>
      <Image source={require('../../assets/GetPaid_White.png')} style={styles.toolbarIcon} />
          <Text style={styles.toolbarTitle}>Get Paid</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={{ flex: 1, backgroundColor: 'transparent' }}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 24, color: '#2F3E6B', textAlign: 'center', marginTop: 20 }}>Request a payment</Text>

          <View style={{ marginTop: 20 }}>
            <Text style={{ color: '#2F3E6B', fontSize: 18 }}>Enter amount</Text>
            <TextInput
              style={{ borderBottomWidth: 1, borderBottomColor: '#727274', color: '#2E84C5', fontWeight: 'bold' }}
              placeholder="R0.00"
              placeholderTextColor="#727274"
              keyboardType="numeric"
              onChangeText={text => setAmount(text)}
              value={amount}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ color: '#2F3E6B', fontSize: 18 }}>My reference</Text>
            <TextInput
              style={{ borderBottomWidth: 1, borderBottomColor: '#727274', color: '#2E84C5', fontWeight: 'bold' }}
              placeholder="Reference"
              placeholderTextColor="#727274"
              onChangeText={text => setReference(text)}
              value={reference}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ color: '#2F3E6B', fontSize: 18 }}>My description</Text>
            <TextInput
              style={{ borderBottomWidth: 1, borderBottomColor: '#727274', color: '#2E84C5', fontWeight: 'bold' }}
              placeholder="Description"
              placeholderTextColor="#727274"
              onChangeText={text => setDescription(text)}
              value={description}
            />
          </View>

          <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#2F3E6B', paddingTop: 10, fontSize: 18 }}>Ask for tip</Text>
            <Switch
              value={askForTip}
              onValueChange={value => setAskForTip(value)}
              thumbColor="#2F3E6B"
              trackColor={{ true: '#2F3E6B', false: '#FFF' }}
            />
          </View>
          <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: '#2F3E6B', paddingTop: 10, fontSize: 18 }}>Static Code</Text>
            <Switch
              value={staticCode}
              onValueChange={value => setStaticCode(value)}
              thumbColor="#2F3E6B"
              trackColor={{ true: '#2F3E6B', false: '#FFF' }}
            />
          </View>
          
          <Text style={{ color: '#2F3E6B', fontSize: 18, marginTop: 10 }}>Expiry date</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{ marginTop: 20 }}>
            <Text style={{ borderBottomWidth: 1, borderBottomColor: '#727274', color: '#2E84C5', fontWeight: 'bold' }}>
              {selectedDate.toDateString()} {/* Display selected date */}
            </Text>
          </TouchableOpacity>
          {/* Show DateTimePicker if showDatePicker is true */}
          {showDatePicker && (
            <DateTimePicker
              // style={styles.calendar}
              value={selectedDate}
              mode="date"
              display="default"
              onChange={(event, date) => {
                setShowDatePicker(false); // Close DateTimePicker
                if (date) setSelectedDate(date);
              }}
            />
          )}
        </View>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'stretch',
  },
  // calendar:{
  //   color: 'red',
  // },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#354A87',
  },
  toolbarTitle: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'flex-start'
  },
  toolbarIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  continueButton: {
    backgroundColor: '#354A87',
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 70,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 25,
  },
});

export default GetPaidPage1;
