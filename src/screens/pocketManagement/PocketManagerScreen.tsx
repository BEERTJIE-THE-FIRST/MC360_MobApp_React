import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Button from "../../components/button";

const Pocket_Manager_Page = () => {
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarText}>Pocket Manager</Text>
        <Image
          source={require("../../../assets/pocket.png")}
          style={styles.toolbarIcon}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.pocketList}>
          {/* Pocket list items */}
          {/* You can map through your pocket data and render list items here */}
        </View>
      </ScrollView>
      <View style={styles.addButton}>
        <Button
          onPress={() => "handleAddPocket"}
          name={"Add Pocket"}
          color={undefined}
          disabled={undefined}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  toolbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2F3E6B",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  toolbarText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
  toolbarIcon: {
    width: 24,
    height: 24,
    tintColor: "#FFF",
  },
  scrollView: {
    flex: 1,
  },
  pocketList: {
    padding: 20,
  },
  addButton: {
    backgroundColor: "#354A87",
    alignSelf: "center",
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Pocket_Manager_Page;
