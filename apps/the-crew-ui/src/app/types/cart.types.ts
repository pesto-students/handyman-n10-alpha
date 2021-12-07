import { ServiceRequest } from '@the-crew/common';

export interface Cart extends ServiceRequest {
  quantity?: number;
}
