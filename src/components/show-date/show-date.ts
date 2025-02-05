import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';


/**
 * Generated class for the ShowDateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'show-date',
  templateUrl: 'show-date.html'
})
export class ShowDateComponent {
  @ViewChild('datePicker') datePicker;
  @Input() libelle = '';
  @Output() outputDate: EventEmitter<any> = new EventEmitter();
  dateToShow = null;
  date = null;
  
  _initValue = null;
  
  @Input()
  set initValue(value) {
    if (value) {
      this._initValue = value;
      this.dateChanged(value);
    } else {
      this.dateToShow = {day: 'DD', month: 'MM', year: 'YYYY'}
    }
  };
  
  constructor() {
    this.dateToShow = {day: 'DD', month: 'MM', year: 'YYYY'}
  }
  
  dateChanged(event) {
    this.dateToShow = event;
    this.outputDate.emit(this.dateToShow);
  }
}
