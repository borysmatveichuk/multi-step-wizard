import { Component, OnInit } from '@angular/core';
import {Personal} from '../data/formData.model';
import {Router} from '@angular/router';
import {FormDataService} from '../data/formData.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  title = 'Please tell us about yourself.';
  personal: Personal;
  form: any;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.personal = this.formDataService.getPersonal();
    console.log('Personal feature loaded!');
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setPersonal(this.personal);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // noinspection JSIgnoredPromiseFromCall
      this.router.navigate(['/work']);
    }
  }

}
