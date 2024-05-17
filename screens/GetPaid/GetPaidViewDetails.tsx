import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import QRCode from 'react-native-qrcode-svg';

type RootStackParamList = {
  ListStaticpaymentRequest: undefined;
};

type GetPaidPageNavigationProp = StackNavigationProp<RootStackParamList, 'ListStaticpaymentRequest'>;

const GetPaidViewDetails = () => {
  const navigation = useNavigation<GetPaidPageNavigationProp>();
  const [loading, setLoading] = useState(false);
  const handleShareCode = () => {
    // Implement share functionality
  };

  const handleContinue = () => {
    setLoading(true);
    navigation.navigate('ListStaticpaymentRequest')
  };
  const handleDownload = () => {
    // Implement download functionality
  };

  return (
    <ImageBackground style={styles.container} source={require("../../assets/backgroundmicash.png")}>
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.toolbarTitle}><Image source={require('../../assets/GetPaid_White.png')} style={styles.toolbarIcon} />Get Paid</Text>
          <View style={styles.toolbar1}>
          <TouchableOpacity onPress={handleDownload}>
            <Image source={require('../../assets/Icon_ionic_md_download.png')} style={styles.downloadIcon} />
          </TouchableOpacity>
        </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.qrContainer}>
            <QRCode
              value="Sample QR Code"
              size={150}
              backgroundColor="transparent"
            />
          </View>
          <View style={styles.separator} />
          <View style={styles.gridContainer}>
            <View style={styles.Parent}>
              <View style={styles.profileContainer}>
                <Image source={{ uri: 'profile_image_url' }} style={styles.profileImage} />
              </View>
              <View>
                <Text style={styles.label}>Request for</Text>
                <Text style={styles.name}>Name</Text>
              </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.Parent}>
              <Text style={styles.label1}>Enter Amount</Text>
              <Text style={styles.amount}>R120,08</Text>
            </View>
            <View style={styles.Parent}>
              <Text style={styles.label1}>My Reference</Text>
              <Text style={styles.amount}>Sushi</Text>
            </View>
            <View style={styles.separator} />
          </View>
          <TouchableOpacity style={styles.shareButton} onPress={handleShareCode}>
            <Text style={styles.buttonText1}>Send code</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};


export default GetPaidViewDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#354A87',
    justifyContent: 'space-between'
  },
  toolbar1:{
    justifyContent: 'flex-end',
  },
  toolbarIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  toolbarTitle: {
    color: 'white',
    fontSize: 20,
    justifyContent: 'flex-start'
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  qrContainer: {
    marginVertical: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#FFFFFF',
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  gridContainer: {
    width: '100%',
  },
  profileContainer: {
    // alignSelf: "flex-start",
    // justifyContent: 'flex-end',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#354A87',
  },
  profileImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  Textbox: {
    backgroundColor: "red"
  },
  label: {
    fontSize: 16,
    color: '#354A87',
    marginVertical: 5,
    textAlign: 'right',
  },
  label1: {
    fontSize: 16,
    color: '#354A87',
    marginVertical: 5,
    textAlign: "left",
  },
  name: {
    fontSize: 18,
    color: '#2E84C5',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  amount: {
    fontSize: 18,
    color: '#2E84C5',
    fontWeight: 'bold',
    textAlign: "right",
  },
  value: {
    fontSize: 16,
    color: '#2E84C5',
    fontWeight: 'bold',
    textAlign: "right",
  },
  shareButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  continueButton: {
    backgroundColor: '#354A87',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  buttonText1: {
    color: '#354A87',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 25,
  },
  Parent: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  downloadIcon: {
    width: 20,
    height: 20,
  },
});
