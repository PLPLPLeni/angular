import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HelloworldService } from "../../services/helloworld.service";
import { DemoRestAPIService } from "../../services/demo-rest-api.service";
import { Observable } from "rxjs";
import { IQuote } from "../../entities/quote";

@Component({
    selector: 'eni-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
    public title: string = 'Titre de la page';
    public formGroup?: FormGroup;

    public randomQuote$?: Observable<IQuote>;

    public get Text1(): AbstractControl | null | undefined {
        return this.formGroup?.get('text1');
    }

    public get Password1(): AbstractControl | null | undefined {
        return this.formGroup?.get('password1');
    }

    constructor(private router: Router, private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder, private helloWorldService: HelloworldService,
        private demoRestApiService: DemoRestAPIService) {
    }

    ngOnInit(): void {
        this.callPromiseFromService();
        this.callObservableFromService();

        this.randomQuote$ = this.demoRestApiService.getRandomQuote();

        this.formGroup = this.formBuilder.group({
            text1: this.formBuilder.control('', Validators.required),
            password1: this.formBuilder.control('', [Validators.required, Validators.minLength(8)]),
            checkbox1: this.formBuilder.control(''),
            checkbox2: this.formBuilder.control(''),
            select1: this.formBuilder.control(''),
            radio1: this.formBuilder.control(''),
        });

        console.log('Fin de linitialisation de root');
    }

    public callObservableFromService(): void {
        this.demoRestApiService.getRandomQuote().subscribe(
            s => {
                console.log('random quote received', s);
            }
        )
    }

    public async callPromiseFromService(): Promise<void> {
        this.helloWorldService.waitXMilliseconds(5000).then((s: string) => {
            console.log('Message reçu "s"', s);
        });

        const s2: string = await this.helloWorldService.waitXMilliseconds(3000);
        console.log('Message reçu "s2"', s2);
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