import { Component, OnInit } from '@angular/core';
import { IVoyage, Voyage } from '../../entities/voyage';
import { CarbonFootprintComputeService } from '../../services/carbon-footprint-compute.service';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.scss']
})
export class VoyagesComponent implements OnInit {
  public voyages?: IVoyage[];

  constructor(private carbonService: CarbonFootprintComputeService) {

  }

  ngOnInit(): void {
    this.voyages = this.carbonService.getVoyages();
  }

  public genererVoyage(): void {
    const voyage = new Voyage(
      0,
      Math.random() * 100,
      Math.random() * 15
    );

    this.carbonService.addVoyage(voyage);

    //  this.updateResumeAndVoyages();
  }

}
