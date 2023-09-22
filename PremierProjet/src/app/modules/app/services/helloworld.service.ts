import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloworldService {

  constructor() { }

  public helloWorld() {
    console.log('hello world');
  }

  public getSomeData(): Observable<string> {
    const o = new Observable<string>(observer => {
      observer.next("hello");

      setTimeout(() => {
        observer.next("world");
        observer.complete();
      }, 2000);

    });



    return o;
  }

  /**
   * Fonction qui retourne une promise qui contient une chaine de caractères
   * @param x 
   * @returns 
   */
  public waitXMilliseconds(x: number): Promise<string> {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve("coucou il est " + new Date());
      }, x);
    });
  }
}
