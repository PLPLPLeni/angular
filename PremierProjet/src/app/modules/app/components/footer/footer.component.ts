import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
    selector: 'app-footer',
    template: 'Hello {{name}}, sId = {{sId}}, id = {{id}}'
})
export class FooterComponent implements OnInit {

    public name?: string | null;
    public sId?: string | null;
    public id?: number;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        // Abonnement aux changement de paramètres de la route
        this.activatedRoute.paramMap.subscribe((value: ParamMap) => {

            console.log('Changement des parametres de la route', value, 'id', value.get('id'));

            this.name = value.get('name');
            this.sId = value.get('id');
    
    
            // 3 manières de transformer un string en number
            this.id = Number(this.sId);
    
            this.id = +(this.sId || '');
    
            console.log('Id is number ? ', !Number.isNaN(this.id));
    
            // Retourne Nan si chaine vide => this.id = parseInt(this.sId || '');
        });

     

    }


}