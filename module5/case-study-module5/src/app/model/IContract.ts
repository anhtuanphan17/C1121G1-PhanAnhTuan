import {ICustomer} from './ICustomer';
import {IFacility} from './IFacility';
import {IEmployee} from './IEmployee';


export interface IContract {
  contractId: number;
  contractStartDate: string;
  contractEndDate: string;
  contractDeposit: number;
  contractTotalMoney: number;
  employee: IEmployee;
  customer: ICustomer;
  services: IFacility;
}
