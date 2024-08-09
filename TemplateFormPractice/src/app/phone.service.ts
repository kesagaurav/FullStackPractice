import { Injectable } from '@angular/core';
import { Phone } from './phone';

@Injectable({
  providedIn: 'root',
})
export class PhoneService {
  phones!: Phone[];
  phone!: Phone;

  constructor() {
    this.phones = [];
    this.phone = new Phone();
  }
  addPhone(p: Phone) {
    this.phones.push(this.phone);
  }

  viewPhones():Phone[] {
    return this.phones;
  }
}
