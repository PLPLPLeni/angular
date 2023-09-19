import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-carbon-footprint',
  templateUrl: './carbon-footprint.component.html',
  styleUrls: ['./carbon-footprint.component.scss']
})
export class CarbonFootprintComponent implements OnInit {
  public distanceKm: number = 0;
  public consommationPour100Km: number = 0;
  public consommationTotale: number = 0;

  voyages = [
    { distanceKm: 50, consommationPour100Km: 5 },
    { distanceKm: 150, consommationPour100Km: 6 },
    { distanceKm: 250, consommationPour100Km: 7 },
    { distanceKm: 350, consommationPour100Km: 8 },
    { distanceKm: 450, consommationPour100Km: 9 }
  ];

  ngOnInit() {
    console.log('Le composant a été initialisé.');
    this.updateResume();
  }

  public addKms(kmsToAdd: number): void {
    this.distanceKm += kmsToAdd;
  }

  public genererVoyage(): void {
    const voyage = {
      distanceKm: Math.random() * 100,
      consommationPour100Km: Math.random() * 15
    };

    this.voyages.push(voyage);
    this.updateResume();
  }

  private updateResume(): void {
    // _ => correspond à lodash
    this.distanceKm = _.sumBy(this.voyages, v => v.distanceKm);
    this.consommationPour100Km = _.meanBy(this.voyages, v => v.consommationPour100Km);

  }
}
