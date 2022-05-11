import {Component, OnInit} from '@angular/core';
import {IFacility} from '../../../model/IFacility';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  facilities: Array<IFacility> = [
    {
      id: 1,
      serviceCode: 'DV-0001',
      name: 'Villa New 1',
      area: '500',
      price: '10000',
      maxPeople: '4',
      standardRoom: 'Vip',
      otherConvenience: 'All',
      poolArea: '100',
      floor: '2',
      rentType: 'Day',
      serviceType: 'Villa',
    },
    {
      id: 2,
      serviceCode: 'DV-0002',
      name: 'House New',
      area: "600",
      price: "20000",
      maxPeople: "2",
      standardRoom: "Vip",
      otherConvenience: "All",
      // poolArea: "100",
      floor: "1",
      rentType: "Day",
      serviceType: "Villa",
    },
    {
      id: 2,
      serviceCode: "DV-0003",
      name: "Room Supperior ",
      area: "30",
      price: "200",
      maxPeople: "2",
      standardRoom: "Vip",
      otherConvenience: "All",
      rentType: "Day",
      serviceType: "Villa",
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
