import { ImageSourcePropType } from 'react-native';

interface ApiUserResponse {
  displayName: string;
  selfie: string;
  E_ID: string;
  reference_id: string;
  amount: number;
  cellNum: string;
  person_id: string;
  authKey: string;
  imageSource: ImageSourcePropType | null;
}

export default ApiUserResponse;

