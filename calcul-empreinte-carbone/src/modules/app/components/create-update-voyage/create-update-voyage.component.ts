import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IVoyage, Voyage } from '../../entities/voyage';
import { CarbonFootprintComputeService } from '../../services/carbon-footprint-compute.service';
import { VoyageEnCamionValidator } from './validators';

@Component({
  selector: 'app-create-update-voyage',
  templateUrl: './create-update-voyage.component.html',
  styleUrls: ['./create-update-voyage.component.scss']
})
export class CreateUpdateVoyageComponent implements OnInit {
  public formGroup?: FormGroup;
  public isInCreation?: boolean;
  public currentVoyage?: IVoyage | null;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder,
    private voyageService: CarbonFootprintComputeService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.isInCreation = location.pathname == '/nouveau-voyage';

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {

      this.currentVoyage = this.voyageService.getVoyageById(params.get('id'));

      this.isInCreation = this.currentVoyage == null;
      this.initFormGroup();
    });

    if (this.isInCreation) {
      this.initFormGroup();
    }

  }

  private initFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      distanceKm: [this.currentVoyage?.distanceKm, [Validators.required, Validators.min(0)]],
      consommationPour100Km: [this.currentVoyage?.consommationPour100Km, [Validators.required, Validators.min(1), VoyageEnCamionValidator(() => this.formGroup || null, 5)]],
      voyageEnCamion: [this.currentVoyage?.voyageEnCamion]
    });

    // Abonnement au changement de valeur du flag voyageEnCamion
    this.formGroup.controls['voyageEnCamion'].valueChanges.subscribe(() => {

      // On rafraichit le validateur du champ consommationPour100Km
      this.formGroup?.controls['consommationPour100Km'].updateValueAndValidity();
    });
  }

  public submit(): void {
    if (!this.formGroup?.valid) {
      return;
    }
    // Instanciation du voyage à vide
    if (this.currentVoyage == null) {
      this.currentVoyage = new Voyage();
    }

    // Mapping des propriétés saisies dans le formulaire dans l'objet voyage instancié précédemment
    Object.assign(this.currentVoyage, this.formGroup.value);

    if (this.isInCreation) {
      // Ajout de ce voyage à la liste des voyages
      this.voyageService.addVoyage(this.currentVoyage);
    }

    this.router.navigate(['/voyages']);
  }
}
