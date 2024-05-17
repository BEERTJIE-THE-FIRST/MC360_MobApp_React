import React from 'react';
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet } from 'react-native';

interface CustomToolBarProps {
  amount: string;
  title: string;
  handleMenuButtonClick: () => void;
}

const CustomToolBar: React.FC<CustomToolBarProps> = ({ amount, title, handleMenuButtonClick }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={handleMenuButtonClick}>
            {/* <Image style={styles.menuIcon} source={require('./Icon_feather_menu.png')} /> */}
          </TouchableOpacity>
          <Image source={require('../../assets/Micash360.png')} />
          <Text style={styles.amountText}>{amount}</Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <Image style={styles.icon} source={require('../../assets/home.png')} />
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: Platform.OS === 'ios' ? 50 : 0,
    backgroundColor: '#354A87',
  },
  topRow: {
    flexDirection: 'row',
  },
  menuIcon: {
    padding: 10,
  },
  amountText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'right',
    padding: 0,
    margin: 0,
  },
  bottomRow: {
    flexDirection: 'row',
    padding: 0,
    margin: 0,
    paddingBottom: 10,
  },
  icon: {
    height: 20,
    margin: 0,
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#354A87',
    textAlign: 'left',
    padding: 10,
    margin: 0,
  },
});

export default CustomToolBar;
