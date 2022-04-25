import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import {Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  search: string = '';

  ngOnInit() {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  searchCountry() {
    this.onEnter.emit(this.search);
  }

  pressedKey() {
    this.debouncer.next(this.search);
  }

}
