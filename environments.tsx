import { Alert } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { getPreference } from "./preferences";

export const environments = {
  isLive: "",

  //#region prod
  url: "https://process.micash360.co.za/",
  masterPassKey: "5534E76D307DF908C301DA130EFD099C",
  masterPassSystem: "live",
  //#endregion

  //#region dev
  //   url: "https://process.micash360.co.za/",
  //   masterPassKey: "5534E76D307DF908C301DA130EFD099C",
  //   masterPassSystem: "LIVE",
  //#endregion

  businessID:"CDJCFKcXUNrHzdrN-278953",
  micashSecriteKey:"loFpsU5K3Q5raSwjDYLSo/Ij/jPofLvzP8DHURcWPLw=",
  AtmCashWithdrawal:"AtmCashWithdrawal",
  AtmSendViaSms:"AtmSendViaSms",
  masterPassFeeCode:"Micash360_006",

};

interface ApiResponce {
    success: boolean;
    balance?: string;
    reason?: string;
  }

  export async function GetBalance() {
    const internetStatus = await checkInternetConnection();
    if (!internetStatus) {
      try {
        const headers = new Headers();
        const cookie = await getPreference("CookeyKey");
        if (cookie) {
          headers.set('Cookie', cookie);
        }
  
        const response = await fetch(`${environments.url}Individual/ApiGetBalance`, {
          headers: headers,
        });
  
        const result = await response.json();
        const apiResponse: ApiResponce = result.success ? result : { reason: result.reason };
        return apiResponse.success ? apiResponse.balance : apiResponse.reason;
      } catch (error) {
        console.error("Error fetching balance:", error);
        return "Error fetching balance";
      }
    }
    return internetStatus;
  }
  

//   export async function hashString(text: string, encryptionKey: string): Promise<string> {
//     // Concatenate the text with the encryption key before hashing
//     const textToHash = `${text}${encryptionKey}`;

//     // Hash the concatenated string using the SHA-256 algorithm
//     const digest = await Crypto.digestStringAsync(
//         Crypto.CryptoDigestAlgorithm.SHA256,
//         textToHash
//     );

//     return digest;
// }

  async function checkInternetConnection() {
    switch ((await NetInfo.fetch()).type) {
        case "wifi":
        case "cellular":
          return null;
        case "none":
          return "No internet connection available";
        case "unknown":
          return "Connectivity status is unknown, you may have run out of data";
        default:
          return "Device has limited internet access";
      }
}

