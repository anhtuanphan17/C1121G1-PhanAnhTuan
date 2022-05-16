import { Component, OnInit } from '@angular/core';
import {IContract} from '../../model/IContract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: IContract[] = [
    {
      contractId: 1,
      contractStartDate: '2020-12-08',
      contractEndDate: '2020-12-08',
      contractDeposit: 0,
      contractTotalMoney: 1000000,
      employee: {
        employeeId: 3,
        employeeName: 'Hồ Thị Yến',
        employeeBirthday: '1995-12-12',
        employeeIdCard: '999231723',
        employeeSalary: 14000000,
        employeePhone: '0412352315',
        employeeEmail: 'thiyen@gmail.com',
        employeeAddress: 'K234/11 Điện Biên Phủ, Gia Lai',
        positionId: 1,
        educationDegreeId: 3,
        divisionId: 2,
      },
      customer: {
        customerId: 1,

        customerCode: 'KH-0001',

        customerName: 'Nguyễn Thị Hào',

        customerBirthday: '1970-11-07',

        customerGender: '0',

        customerIdCard: '643431213',

        customerPhone: '0905423362',

        customerEmail: 'thihao07@gmail.com',

        customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',

        customerTypeId: 1
      },
      services: {
        serviceId: 3,
        serviceCode: 'DV-0003',
        serviceName: 'Room Twin 01',
        serviceImage: 'https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg',
        serviceArea: 5000,
        serviceCost: 1000000,
        serviceMaxPeople: 2,
        standardRoom: 'normal',
        descriptionOtherConvenience: 'Có tivi',
        poolArea: 0,
        numberOfFloors: 0,
        rentType: 1,
        serviceType: 3,
      },
    },
    {
      contractId: 2,
      contractStartDate: '2020-07-14',
      contractEndDate: '2020-07-21',
      contractDeposit: 200000,
      contractTotalMoney: 2000000,
      employee: {
        employeeId: 7,
        employeeName: 'Nguyễn Hữu Hà',
        employeeBirthday: '1993-01-01',
        employeeIdCard: '534323231',
        employeeSalary: 8000000,
        employeePhone: '0941234553',
        employeeEmail: 'nhh0101@gmail.com',
        employeeAddress: '4 Nguyễn Chí Thanh, Huế',
        positionId: 2,
        educationDegreeId: 3,
        divisionId: 2,
      },
      customer: {
        customerId: 3,

        customerCode: 'KH-0003',

        customerName: 'Trương Đình Nghệ',

        customerBirthday: '1990-02-27',

        customerGender: '1',

        customerIdCard: '488645199',

        customerPhone: '0373213122',

        customerEmail: 'nghenhan2702@gmail.com',

        customerAddress: 'K323/12 Ông Ích Khiêm, Vinh',

        customerTypeId: 2
      },
      services: {
        serviceId: 1,
        serviceCode: 'DV-0001',
        serviceName: 'Villa Beach Front',
        serviceImage: 'https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg',
        serviceArea: 25000,
        serviceCost: 10000000,
        serviceMaxPeople: 10,
        standardRoom: 'vip',
        descriptionOtherConvenience: 'Có hồ bơi',
        poolArea: 500,
        numberOfFloors: 4,
        rentType: 3,
        serviceType: 1,
      },
    },
    {
      contractId: 3,
      contractStartDate: '2021-03-15',
      contractEndDate: '2021-03-17',
      contractDeposit: 50000,
      contractTotalMoney: 1500000,
      employee: {
        employeeId: 3,
        employeeName: 'Hồ Thị Yến',
        employeeBirthday: '1995-12-12',
        employeeIdCard: '999231723',
        employeeSalary: 14000000,
        employeePhone: '0412352315',
        employeeEmail: 'thiyen@gmail.com',
        employeeAddress: 'K234/11 Điện Biên Phủ, Gia Lai',
        positionId: 1,
        educationDegreeId: 3,
        divisionId: 2,
      },
      customer: {
        customerId: 4,

        customerCode: 'KH-0004',

        customerName: 'Dương Văn Quan',

        customerBirthday: '1981-07-08',

        customerGender: '1',

        customerIdCard: '543432111',

        customerPhone: '0490039241',

        customerEmail: 'duongquan@gmail.com',

        customerAddress: 'K453/12 Lê Lợi, Đà Nẵng',

        customerTypeId: 3,
      },
      services: {
        serviceId: 2,
        serviceCode: 'DV-0002',
        serviceName: 'House Princess 01',
        serviceImage: 'https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg',
        serviceArea: 14000,
        serviceCost: 5000000,
        serviceMaxPeople: 7,
        standardRoom: 'vip',
        descriptionOtherConvenience: 'Có thêm bếp nướng',
        poolArea: 0,
        numberOfFloors: 3,
        rentType: 3,
        serviceType: 2,
      },
    },
    {
      contractId: 4,
      contractStartDate: '2021-01-14',
      contractEndDate: '2021-01-18',
      contractDeposit: 100000,
      contractTotalMoney: 1400000,
      employee: {
        employeeId: 7,
        employeeName: 'Nguyễn Hữu Hà',
        employeeBirthday: '1993-01-01',
        employeeIdCard: '534323231',
        employeeSalary: 8000000,
        employeePhone: '0941234553',
        employeeEmail: 'nhh0101@gmail.com',
        employeeAddress: '4 Nguyễn Chí Thanh, Huế',
        positionId: 2,
        educationDegreeId: 3,
        divisionId: 2,
      },
      customer: {
        customerId: 5,

        customerCode: 'KH-0005',

        customerName: 'Hoàng Trần Nhi Nhi',

        customerBirthday: '1995-12-09',

        customerGender: '0',

        customerIdCard: '795453345',

        customerPhone: '0312345678',

        customerEmail: 'nhinhi123@gmail.com',

        customerAddress: '224 Lý Thái Tổ, Gia Lai',

        customerTypeId: 5,
      },
      services: {
        serviceId: 5,
        serviceCode: 'DV-0005',
        serviceName: 'House Princess 02',
        serviceImage: 'https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg',
        serviceArea: 10000,
        serviceCost: 4000000,
        serviceMaxPeople: 5,
        standardRoom: 'normal',
        descriptionOtherConvenience: 'Có thêm bếp nướng',
        poolArea: 0,
        numberOfFloors: 2,
        rentType: 3,
        serviceType: 2,
      },
    },
    {
      contractId: 5,
      contractStartDate: '2021-07-14',
      contractEndDate: '2021-07-15',
      contractDeposit: 0,
      contractTotalMoney: 100000,
      employee: {
        employeeId: 7,
        employeeName: 'Nguyễn Hữu Hà',
        employeeBirthday: '1993-01-01',
        employeeIdCard: '534323231',
        employeeSalary: 8000000,
        employeePhone: '0941234553',
        employeeEmail: 'nhh0101@gmail.com',
        employeeAddress: '4 Nguyễn Chí Thanh, Huế',
        positionId: 2,
        educationDegreeId: 3,
        divisionId: 2,
      },
      customer: {
        customerId: 2,

        customerCode: 'KH-0002',

        customerName: 'Phạm Xuân Diệu',

        customerBirthday: '1992-08-08',

        customerGender: '1',

        customerIdCard: '865342123',

        customerPhone: '0954333333',

        customerEmail: 'xuandieu92@gmail.com',

        customerAddress: 'K77/22 Thái Phiên, Quảng Trị',

        customerTypeId: 1,
      },
      services: {
        serviceId: 6,
        serviceCode: 'DV-0006',
        serviceName: 'Room Twin 02',
        serviceImage: 'https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg',
        serviceArea: 3000,
        serviceCost: 900000,
        serviceMaxPeople: 2,
        standardRoom: 'normal',
        descriptionOtherConvenience: 'Có tivi',
        poolArea: 0,
        numberOfFloors: 0,
        rentType: 2,
        serviceType: 3,
      },
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
