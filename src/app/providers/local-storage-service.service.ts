import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  constructor() { }


  /**
   * Function to get data from local storage
   * @param key : key of the local storage
   */
  getData(key){
    return localStorage.getItem(key);
  }

  /**
   * Function to set single value in local storage
   * @param key : key of the local storage,
   * @param value: value to be stored.
   */
  setData(key, value){
    localStorage.setItem(key, value);
  }

  /**
   * Function to set an object in local storage
   * @param key : key of the local storage,
   * @param value: object to be stored.
   */
  setObject(key, data){
    localStorage.setItem(key, JSON.stringify(data));
  }
}
