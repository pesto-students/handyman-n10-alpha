import { uuid } from './util.types';

export interface IOwnership {
  createdBy?: uuid;
  modifiedBy?: uuid;
}
