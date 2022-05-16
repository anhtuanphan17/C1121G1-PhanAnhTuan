import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {gte} from '../../model/gte';

@Component({
  selector: 'app-serivce-edit',
  templateUrl: './serivce-edit.component.html',
  styleUrls: ['./serivce-edit.component.css']
})
export class SerivceEditComponent implements OnInit {
  check = 0;
  editServiceForm: FormGroup;

  constructor() {
    this.editServiceForm = new FormGroup({
      serviceCode: new FormControl('DV-1234', [Validators.required, Validators.pattern('^$|^DV-[\\d]{4}$')]),
      serviceName: new FormControl('Sea Villa', [Validators.required, Validators.pattern('^([a-zA-Z]+[ ]?){1,250}$')]),
      serviceImage: new FormControl('', [Validators.required]),
      serviceArea: new FormControl('200', [Validators.required, gte]),
      serviceCost: new FormControl('2000', [Validators.required, gte]),
      serviceMaxPeople: new FormControl('10', [Validators.required, gte]),
      standardRoom: new FormControl('5*', [Validators.required]),
      descriptionOtherConvenience: new FormControl('Pool, Park,...', [Validators.required]),
      poolArea: new FormControl('50', [Validators.required, gte]),
      numberOfFloors: new FormControl('2', [Validators.required, gte]),
      rentType: new FormControl('1', [Validators.required]),
      serviceType: new FormControl('1', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  showEditForm(event) {
    this.check = event.target.value;
  }


  onSubmit() {
    if (this.editServiceForm.invalid) {
      if (this.serviceCode.value == '') {
        this.serviceCode.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.serviceName.value == '') {
        this.serviceName.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.serviceArea.value == '') {
        this.serviceArea.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.serviceCost.value == '') {
        this.serviceCost.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.serviceMaxPeople.value == '') {
        this.serviceMaxPeople.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.standardRoom.value == '') {
        this.standardRoom.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.descriptionOtherConvenience.value == '') {
        this.descriptionOtherConvenience.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.poolArea.value == '') {
        this.poolArea.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.numberOfFloors.value == '') {
        this.numberOfFloors.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.rentType.value == '') {
        this.rentType.setErrors({empty: 'Empty! Please input!'});
      }
      if (this.serviceType.value == '') {
        this.serviceType.setErrors({empty: 'Empty! Please input!'});
      }
    }
  }
  get serviceCode() {
    return this.editServiceForm.get('serviceCode');
  }

  get serviceName() {
    return this.editServiceForm.get('serviceName');
  }

  get serviceImage() {
    return this.editServiceForm.get('serviceImage');
  }

  get serviceArea() {
    return this.editServiceForm.get('serviceArea');
  }

  get serviceCost() {
    return this.editServiceForm.get('serviceCost');
  }

  get serviceMaxPeople() {
    return this.editServiceForm.get('serviceMaxPeople');
  }

  get standardRoom() {
    return this.editServiceForm.get('standardRoom');
  }

  get descriptionOtherConvenience() {
    return this.editServiceForm.get('descriptionOtherConvenience');
  }

  get poolArea() {
    return this.editServiceForm.get('poolArea');
  }

  get numberOfFloors() {
    return this.editServiceForm.get('numberOfFloors');
  }

  get freeAttachedService() {
    return this.editServiceForm.get('freeAttachedService');
  }

  get rentType() {
    return this.editServiceForm.get('rentType');
  }

  get serviceType() {
    return this.editServiceForm.get('serviceType');
  }

}
