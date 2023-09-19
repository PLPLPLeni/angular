import { Injectable } from "@angular/core";

@Injectable()
export class HelloworldService {

    constructor(){
        console.log('nouvelle instance du hello world service');
    }

    public helloWorld(): void {
        console.log('Hello world');
    }
}