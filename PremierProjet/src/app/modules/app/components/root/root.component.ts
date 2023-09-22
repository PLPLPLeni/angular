import { Component, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HelloworldService } from "../../services/helloworld.service";
import { DemoRestAPIService } from "../../services/demo-rest-api.service";
import { Observable, Subscription, interval, map, merge, of } from "rxjs";
import { IQuote } from "../../entities/quote";

@Component({
    selector: 'eni-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnDestroy {
    public title: string = 'Titre de la page';
    public formGroup?: FormGroup;

    public randomQuote$?: Observable<IQuote>;
    public someData$?: Observable<string>;
    private _sub?: Subscription;

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

    ngOnDestroy(): void {
        if (this._sub) {
            this._sub.unsubscribe();
        }
    }

    ngOnInit(): void {

        // EXEMPLE 1
        {
            // Création d'un observable qui va émettre 5 valeurs (il émets donc 5 fois)
            const numbers = of(1, 2, 3, 4, 5);

            // On ajoute un opérateur "map" à cet observable pour transformer
            // chaque valeur émise
            const squareNumbers = numbers.pipe(
                map(n => n * n),
                map(n => n + 10),
            );

            this._sub = interval(1000).subscribe(i => {
                console.log(i);

            });

            // On s'abonne à l'observable et le résultat final correspond à la valeur retournée dans
            // le dernier opérateur du pipe()
            squareNumbers.subscribe(n => console.log("Exemple 1 " + n));
            // => on devrait avoir : 11, 14, 19, 26, 35
        }

        // EXEMPLE 2
        {
            // On a trois observables, on veut ne faire qu'un seul subscribe (ou retourner un seul
            // observable qui soit la combinaison des trois)
            const o1$: Observable<number> = interval(1000).pipe(map(() => 1));
            const o2$: Observable<number> = interval(2000).pipe(map(() => 2));
            const o3$: Observable<number> = interval(3000).pipe(map(() => 3));

            const o4$: Observable<number> = merge(o1$, o2$, o3$);

            o4$.subscribe(v => console.log("Exemple 2 " + v));
            // => On aura : 1 1 2 1 3 1 2 ...
        }



        this.someData$ = this.helloWorldService.getSomeData();

        /*   this.helloWorldService.getSomeData().subscribe(s => {
               console.log('Data reçu', s);
           })*/

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