import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent {
  question: string = '';

  constructor(private dataService: DataService) {}

  sendData() {
    this.dataService.sendData(this.question);
  }
}
