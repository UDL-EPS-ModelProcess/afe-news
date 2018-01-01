import { Component, OnInit, Input } from '@angular/core';
import { Errors } from '../models';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.css']
})
export class ListErrorsComponent implements OnInit {

  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = [ ];
    if (errorList.errors) {
      // tslint:disable-next-line:forin
      for (const field in errorList.errors) {
        this.formattedErrors.push(`${field} ${errorList.errors[field]}`);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

  get errorList() { return this.formattedErrors; }

}
