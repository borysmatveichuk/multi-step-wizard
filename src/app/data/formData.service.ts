import {Injectable} from '@angular/core';
import {Address, Personal, UserFormData} from './formData.model';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {

  private formData: UserFormData = new UserFormData();
  private isPersonalFormValid = false;
  private isWorkFormValid = false;
  private isAddressFormValid = false;

  getPersonal(): Personal {
    return {
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      email: this.formData.email,
    };
  }

  setPersonal(data: Personal) {
    this.isPersonalFormValid = true;
    this.formData.firstName = data.firstName;
    this.formData.lastName = data.lastName;
    this.formData.email = data.email;
  }

  getWork(): string {
    return this.formData.work;
  }

  setWork(data: string) {
    this.isWorkFormValid = true;
    this.formData.work = data;
  }

  getAddress(): Address {
    return {
      street: this.formData.street,
      city: this.formData.city,
      state: this.formData.state,
      zip: this.formData.zip,
    };
  }

  setAddress(data: Address) {
    this.isAddressFormValid = true;
    this.formData.street = data.street;
    this.formData.city = data.city;
    this.formData.state = data.state;
    this.formData.zip = data.zip;
  }

  getFormData(): UserFormData {
    // Return the entire Form Data
    return this.formData;
  }

  resetFormData(): UserFormData {
    // Return the form data after all this.* members had been reset
    this.formData.clear();
    this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
    return this.formData;
  }

  isFormValid() {
    // Return true if all forms had been validated successfully; otherwise, return false
    return this.isPersonalFormValid &&
      this.isWorkFormValid &&
      this.isAddressFormValid;
  }

  constructor() { }
  
}
