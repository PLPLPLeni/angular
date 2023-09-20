import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloworldService {

  constructor() { }

  public helloWorld() {
    console.log('hello world');
  }
}
