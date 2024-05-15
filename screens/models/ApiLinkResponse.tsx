import ApiUserResponse from './ApiUserResponse';
import ApiTransaction from './ApiTransaction';

interface ApiLinkResponse {
  user: ApiUserResponse;
  transactions: ApiTransaction[];
}

export default ApiLinkResponse;
