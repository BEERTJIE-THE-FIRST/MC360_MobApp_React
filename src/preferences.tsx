import AsyncStorage from '@react-native-async-storage/async-storage';

// Example of setting a preference
export const setPreference = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.error('Error setting preference:', error);
    }
};

// Example of getting a preference
export const getPreference = async (key: string): Promise<string | null> => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.error('Error getting preference:', error);
        return null;
    }
};

// Example of clearing all preferences
export const clearPreferences = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.error('Error clearing preferences:', error);
    }
};

// Usage examples
// setPreference('displayName', 'John Doe');
// const displayName = await getPreference('displayName');
// console.log('Display Name:', displayName);
// clearPreferences();
