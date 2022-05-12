import {ICustomer} from "./ICustomer";
import {IFacility} from "./IFacility";


export interface IContract {
  contractId: number;
  contractStartDate: string;
  contractEndDate: string;
  contractDeposit: number;
  contractTotalMoney: number;
  employeeId: number;
  customer: ICustomer;
  services: IFacility;
}
