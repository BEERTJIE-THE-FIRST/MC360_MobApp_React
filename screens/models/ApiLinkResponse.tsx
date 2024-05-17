import ApiUserResponse from './ApiUserResponse';
import ApiTransaction from './ApiTransaction';

interface ApiLinkResponse {
  User: ApiUserResponse;
  Transactions: ApiTransaction[];
}

export default ApiLinkResponse;
