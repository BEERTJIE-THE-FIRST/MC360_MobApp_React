import { ImageSourcePropType } from 'react-native';

interface ApiUserResponse {
  DisplayName: string;
  Selfie: string;
  E_ID: string;
  Reference_id: string;
  Amount: number;
  CellNum: string;
  person_id: string;
  AuthKey: string;
  imageSource: ImageSourcePropType | null;
}

export default ApiUserResponse;
