import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'eni-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
    public title: string = 'Titre de la page';
    public formGroup?: FormGroup;

    public get Text1(): AbstractControl | null | undefined {
        return this.formGroup?.get('text1');
    }

    public get Password1(): AbstractControl | null | undefined {
        return this.formGroup?.get('password1');
    }

    constructor(private router: Router, private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.formGroup = this.formBuilder.group({
            text1: this.formBuilder.control('', Validators.required),
            password1: this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
            checkbox1: this.formBuilder.control(''),
            checkbox2: this.formBuilder.control(''),
            select1: this.formBuilder.control(''),
            radio1: this.formBuilder.control(''),
        })
    }

    public afficherHeader() {
        this.router.navigate(['/']);
    }

    public submit(): void {
        this.formGroup?.markAllAsTouched();

        if (this.formGroup?.invalid) {
            alert('Formulaire incorrect');
            return;
        }
        console.log(this.formGroup);
    }
}