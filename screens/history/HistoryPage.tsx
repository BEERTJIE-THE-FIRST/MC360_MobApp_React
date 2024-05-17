// App.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// Define the type for the history item
interface HistoryItem {
  id: number;
  image: string;
  description: string;
  formattedDate: string;
  amount: string;
  amountColor: string;
  sendOrReceived: string;
}

// Initialize the data with the correct type
const data: HistoryItem[] = [
  // Add your data here
];

type RootStackParamList = {
  HistoryViewPage: undefined;
};

// Define your navigation prop type
type HistoryPageNavigationProp = StackNavigationProp<RootStackParamList, 'HistoryViewPage'>;

const Stack = createStackNavigator();

const HistoryPage = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState<HistoryItem[]>(data);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<HistoryPageNavigationProp>()

  const handleContinue = () => {
    setLoading(true);
    // Implement your logic here for handling Continue button click
    navigation.navigate('HistoryViewPage'); // Navigate to GetPaidViewDetails
  };

  useEffect(() => {
    if (searchText) {
      const newData = data.filter(item => item.description.toLowerCase().includes(searchText.toLowerCase()));
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  }, [searchText]);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const handleFilter = () => {
    // Implement filter functionality
  };

  const handleDownload = () => {
    // Implement download functionality
  };

  return (
    <ImageBackground style={styles.container} source={require("../../assets/backgroundmicash.png")}>
      <View style={styles.container}>
        <View style={styles.toolbar}>

        <View style={styles.toolbarContainer}>
              <Image source={require('../../assets/History_Icon.png')} style={styles.toolbarIcon} />
              <Text style={styles.toolbarTitle}>History</Text>
          </View>

          <View style={styles.searchBarDiv}>
            {/* <Image source={require('../../assets/Icon_awesome_sort_amount_down.png')} style={styles.filterIcon} /> */}
            <TextInput
              style={styles.searchBar}
              placeholder="Search"
              placeholderTextColor="#878A8D"
              value={searchText}
              onChangeText={handleSearch}
            />
          <TouchableOpacity onPress={handleFilter}>
            <Image source={require('../../assets/Icon_awesome_sort_amount_down.png')} style={styles.filterIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDownload}>
            <Image source={require('../../assets/Icon_ionic_md_download.png')} style={styles.downloadIcon} />
          </TouchableOpacity>
          </View>
        </View>

      <Text>As soon as there's history it will load as per the signed in account </Text>

        {loading ? (
          <ActivityIndicator color="#354A87" />
        ) : (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                  <Text style={styles.itemDate}>{item.formattedDate}</Text>
                  <Text style={[styles.itemAmount, { color: item.amountColor }]}>R{item.amount}</Text>
                  <Text style={styles.itemSendOrReceived}>{item.sendOrReceived}</Text>
                </View>
              </View>
            )}
          />
        )} 
      </View>

    </ImageBackground>
  );
};

export default HistoryPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  toolbar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 5,
    backgroundColor: '#354A87',
  },
  toolbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#354A87',
  },
  searchBarDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#354A87',
  },

  toolbarTitle: {
    color: 'white',
    fontSize: 16,
    backgroundColor: "transparent",
  },
  toolbarIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    backgroundColor: "transparent",
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingRight: 60,
    borderRadius: 7,
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    color: 'white',
    backgroundColor: 'white',
    height: 30,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingRight: 40,
  },
  filterIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  downloadIcon: {
    width: 20,
    height: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemDescription: {
    color: '#354A87',
    fontSize: 16,
  },
  itemDate: {
    color: '#2E84C5',
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  itemSendOrReceived: {
    color: '#2E84C5',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
