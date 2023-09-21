import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function VoyageEnCamionValidator(formGroup: () => FormGroup | null, minConsommation: number): ValidatorFn {

    return (control: AbstractControl<any, any>): ValidationErrors | null => {

        const voyageEnCamion: boolean = formGroup()?.controls['voyageEnCamion'].value;

        if (!voyageEnCamion) {
            return null; // pas de validation, on doit retourner null (indiquer une absence d'erreur)
        }

        const isValid: boolean = control.value > minConsommation;

        if (isValid) {
            return null;
        }

        // Le nom de propriété "VoyageEnCamion" pourrait être n'importe quelle chaine 
        return {
            VoyageEnCamion: true,
            MinConsommation: minConsommation
        };
    }
}