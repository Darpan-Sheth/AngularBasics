import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() searchResult: any;
  @Output() onAddressPicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() { 
  }

  /**
   * Function to get the address on click.
   * @param address 
   */
  getAddress(address){
    this.onAddressPicked.emit(address); //emits the value to parent component.
  }

  ngOnInit() {
  }

  
}