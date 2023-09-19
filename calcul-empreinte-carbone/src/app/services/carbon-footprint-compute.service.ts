import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { IVoyage, Voyage } from '../entities/voyage';

@Injectable()
export class CarbonFootprintComputeService {

  private _voyages: IVoyage[] = [
    new Voyage(50, 5),
    new Voyage(150, 6),
    new Voyage(250, 7),
    new Voyage(350, 8),
    new Voyage(450, 9)
  ];

  constructor() { }

  public getVoyages(): IVoyage[] {
    return this._voyages;
  }

  public getResumeVoyages(): IVoyage {
    return <IVoyage>{
      distanceKm: _.sumBy(this._voyages, v => v.distanceKm),
      consommationPour100Km: _.meanBy(this._voyages, v => v.consommationPour100Km),
      quantiteCO2: _.sumBy(this._voyages, v => v.quantiteCO2)
    };
  }

  public addVoyage(voyage: IVoyage): void {
    this._voyages.push(voyage);
  }
}
