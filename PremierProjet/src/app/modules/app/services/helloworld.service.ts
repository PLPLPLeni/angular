import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloworldService {

  constructor() { }

  public helloWorld() {
    console.log('hello world');
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
