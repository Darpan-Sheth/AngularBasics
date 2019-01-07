import { Injectable } from '@angular/core';
import { AppSettingsService } from './app-settings.service';
import { HttpServiceService } from './http-service.service';
import { Observable } from '../../../node_modules/rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable()
export class SearchService {

  constructor(public appSettings: AppSettingsService, public httpService: HttpServiceService) { 

  }

  /**
   * Method to searchRecords
   * Params(SearchKey: string - search text from the textbox, searchOption: string - people or ship, forPageCall: boolean - to get if its from page or normal)
   */

  searchRecords(searchKey): Observable<any>{
    let params = "key=AIzaSyCMdl2byZOgAEJwJXO3LeTHwHT4JQWQ7Zo&input="+searchKey;
    
    return this.httpService.getCall(params).pipe(map(res => 
      res.json()
    ), catchError(this.handleErrorObservable));
}
handleErrorObservable(error): Observable<any>{ 
  return Observable.throw(error);
}
    // return this.httpService.getCall(url).pipe(map(res => {
    //   console.log("res on map...", res);

    // }))
}
