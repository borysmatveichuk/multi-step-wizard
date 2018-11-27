import {Component, OnInit, Input} from '@angular/core';
import {FormDataService} from './data/formData.service';

@Component({
  selector: 'multi-step-wizard-app', templateUrl: './app.component.html', styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'multi-step-wizard';
  @Input() formData;

  constructor(private formDataService: FormDataService) {
  }

  ngOnInit(): void {
    this.formData = this.formDataService.getFormData();
    console.log(this.title + 'loaded!');
  }
}
