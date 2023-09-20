import { Component, OnInit } from '@angular/core';
import { IVoyage, Voyage } from '../../entities/voyage';
import { CarbonFootprintComputeService } from '../../services/carbon-footprint-compute.service';

@Component({
  selector: 'app-carbon-footprint',
  templateUrl: './carbon-footprint.component.html',
  styleUrls: ['./carbon-footprint.component.scss']
})
export class CarbonFootprintComponent implements OnInit {
  public voyageResume?: IVoyage;
  public voyages?: IVoyage[];

  constructor(private carbonService: CarbonFootprintComputeService) {

  }

  ngOnInit() {
    console.log('Le composant a été initialisé.');
    this.updateResumeAndVoyages();
  }

  private updateResumeAndVoyages(): void {
    this.voyages = this.carbonService.getVoyages();
    this.voyageResume = this.carbonService.getResumeVoyages();


  }
}
