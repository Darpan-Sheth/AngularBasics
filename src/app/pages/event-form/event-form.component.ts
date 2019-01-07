import { Component, OnInit } from '@angular/core';
import { LocalStorageServiceService } from '../../providers/local-storage-service.service';
import { SearchService } from '../../providers/search.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  model: any;
  time: any;
  toDate: any;
  fromDate: any;
  toTime: any;
  fromTime: any;
  eventEmail: any;
  eventDetails: any;
  eventName: any;
  guestEmail: any;
  guestEmailArray: any[] = [];
  AllDayChk: boolean = false;
  eventId: number = 0;
  searchAddress: any;
  formDataArray: any[] = [];
  searchSubscription: any;
  searchResults: any;
  showSearhResult: boolean = false;
  formSubmit: boolean = false;
  constructor(private localStorageService:LocalStorageServiceService, private searchService: SearchService) {
    this.formDataArray = [];
    this.guestEmail = [];
  }

  /**
   * On form submit
   * @param form data
   */
  onSubmit(form){
    this.formSubmit = true;
    if(form.valid){
      this.eventId++;           //increment eventId to store in local storage... works as a primary key
      let formData = form.value;
      formData.id = this.eventId;
      if(this.AllDayChk){
        formData.fromTime = "";
        formData.toTime = "";
      }
      this.formDataArray.unshift(formData);   //add new value to the top of the array
      
      this.localStorageService.setObject("form", this.formDataArray)
    }
  }

  /**
   * Function to add guests emails
   */
  addGusetEmail(){
    if(this.guestEmail != ""){
      this.guestEmailArray.push(this.guestEmail);
    }
  }

  ngOnInit() {
    if(this.localStorageService.getData('form')){
      this.formDataArray = JSON.parse(this.localStorageService.getData('form'));
      if(this.formDataArray[0]){
        this.eventId = this.formDataArray[0].id;  //Initialized eventId if anything is already stored in the local storage.
      }
    }

  }

  /**
   * Function to get search key
   */
  getSearchKey(): void{
    let searchKey = this.searchAddress;
    if(searchKey != ""){
      this.getSearchData(searchKey);
    }
  }

  /* Function to make web service call
  * Params(SearchText: string)
  */ 

 getSearchData(searchKey): void {
  this.searchSubscription = this.searchService.searchRecords(searchKey).subscribe(res=>{
    this.searchResults = res.predictions;
    this.showSearhResult = true;  //show search result component.
  }, error=>{
    this.showSearhResult = false;
    console.log("error on seach component 94", error);
  });
}

/**
 * To get the address from child component
 * @param address get value on click of the address index.
 */
onAddressPicked(address){
  this.searchAddress = address;
  this.showSearhResult = false;
}

/**
 * Function to delete an event
 * @param eventId 
 */
deleteEvent(eventId){
    let dataArrayLength = this.formDataArray.length;
    if(dataArrayLength > 0){
      for(let i=0; i<dataArrayLength; i++){
        if(this.formDataArray[i] && this.formDataArray[i].id == eventId){
          this.formDataArray.splice(i, 1);
        }
      }
      this.localStorageService.setObject("form", this.formDataArray); //set data to localstorage again after deleting and event.
    }
  }

}
