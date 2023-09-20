import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { IVoyage, Voyage } from '../entities/voyage';

@Injectable()
export class CarbonFootprintComputeService {

  private _voyages: IVoyage[] = [
    new Voyage(1, 50, 5),
    new Voyage(2, 150, 6),
    new Voyage(3, 250, 7),
    new Voyage(4, 350, 8),
    new Voyage(5, 450, 9)
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
    const maxVoyage: IVoyage | undefined = _.maxBy(this._voyages, v => v.id);

    voyage.id = maxVoyage ? maxVoyage.id + 1 : 1;
    
    this._voyages.push(voyage);
  }
}
