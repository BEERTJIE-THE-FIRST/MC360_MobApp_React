import axios from "axios";
import {getPreference} from "../../preferences";
import {environments} from "../../environments";
import ApiResponce from "../models/ApiResponce";
import {Alert} from "react-native";
import {ApiPocket} from "../models/ApiPocket";
import * as SecureStore from "expo-secure-store";

export const getPockets = async () => {
    try {
        // Fetch pockets data
        const cookieKey = await getPreference("CookeyKey");
        const response = await axios.get(`${environments.url}Individual/ApiGetPockets`, {
            headers: {
                Cookie: cookieKey || "",
            },
        });

        const apiResponce: ApiResponce = response.data;

        if (apiResponce.success) {
            return apiResponce.Pockets;
        } else {
            Alert.alert("Error", apiResponce.reason, [{text: "Ok"}]);
        }
    } catch (error) {
        Alert.alert("Error", "Something went wrong", [{text: "Ok"}]);
    }
};

export const AddOrEdit = async (pocketName:string, pocket?: ApiPocket) => {
    try {
        const service = environments;
        const client = axios.create();
        const url = `${service.url}Individual/ApiCreateUpdatePocket`;
        const cookieKey = await SecureStore.getItemAsync("CookeyKey");

        const formData = new FormData();
        formData.append("Id", pocket ? pocket.Id.toString() : "");
        formData.append("Name", pocketName);

        const response = await client.post(url, formData, {
            headers: {
                Cookie: cookieKey || "",
                "Content-Type": "multipart/form-data",
            },
        });

        const result: ApiResponce = response.data;

        return result;

    } catch (error) {
        Alert.alert("Error", "Something went wrong", [{text: "Ok"}]);
    } finally {
        // setModalVisible(false);
    }
};
