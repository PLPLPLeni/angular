import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { IQuote } from '../entities/quote';

@Injectable({
  providedIn: 'root'
})
export class DemoRestAPIService {

  constructor(private httpClient: HttpClient) { }

  public getRandomQuote(): Observable<IQuote> {
    return this.httpClient.get<IQuote[]>('https://zenquotes.io/api/random').pipe(
      map((result: IQuote[]) => {
        if (result == null || result.length == 0) {
          return <IQuote>{
            h: "Pas de citation disponible"
          }
        }
        
        return result[0];
      }),
      catchError(e => {
        console.error(e);

        return of(<IQuote>{ h: "Une erreur est survenue" });
      })
    )
  }
}
