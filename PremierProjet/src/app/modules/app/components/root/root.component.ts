import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
    selector: 'eni-root',
    templateUrl: './root.component.html'
})
export class RootComponent {
    public title: string = 'Titre de la page';

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {

      
    }

    public afficherHeader() {
        this.router.navigate(['/']);
    }
}