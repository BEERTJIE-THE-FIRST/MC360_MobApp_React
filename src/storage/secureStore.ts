import * as SecureStore from "expo-secure-store";

export async function saveItem(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function getItem(key: string) {
  return await SecureStore.getItemAsync(key);
}

export async function deleteItem(key: string) {
  await SecureStore.deleteItemAsync(key);
}

// Changes to use case
export async function deleteAllItems() {
  // delete your specific ones, below is an example
  // await deleteItem("accessToken");
}
