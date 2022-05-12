import {Component, OnInit} from '@angular/core';
import {IFacility} from '../../../model/IFacility';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  facilities: IFacility[] = [
    {
      serviceId: 1,
      serviceCode: 'DV-0001',
      serviceName: 'Villa Beach Front',
      serviceImage: 'https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg',
      serviceArea: 600,
      serviceCost: 1000,
      serviceMaxPeople: 10,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Public Pool',
      poolArea: 500,
      numberOfFloors: 4,
      rentType: 1,
      serviceType: 1,
    },
    {
      serviceId: 2,
      serviceCode: 'DV-0002',
      serviceName: 'House Princess 01',
      serviceImage: 'https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg',
      serviceArea: 250,
      serviceCost: 600,
      serviceMaxPeople: 7,
      standardRoom: 'vip',
      descriptionOtherConvenience: 'Sauna room',
      poolArea: 0,
      numberOfFloors: 3,
      rentType: 1,
      serviceType: 2
    },
    {
      serviceId: 3,
      serviceCode: 'DV-0003',
      serviceName: 'Room Twin 01',
      serviceImage: 'https://furamavietnam.com/wp-content/uploads/2020/04/04-Facilities-Maintenance.jpg',
      serviceArea: 45,
      serviceCost: 250,
      serviceMaxPeople: 2,
      standardRoom: 'normal',
      descriptionOtherConvenience: 'Gym Room',
      poolArea: 0,
      numberOfFloors: 0,
      rentType: 1,
      serviceType: 3
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
