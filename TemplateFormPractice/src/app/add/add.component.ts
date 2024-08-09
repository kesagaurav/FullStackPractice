import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  phone!: Phone;
  genders=["male","female"];
  @ViewChild('f') phoneForm!:NgForm;
  constructor(private serice: PhoneService, private router: Router) {
    this.phone = new Phone();
  }

  onSubmit(form:NgForm){
    this.serice.addPhone(this.phone);
    console.log(form);

    this.router.navigate(['/view']);
  }

}
