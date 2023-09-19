import { Component } from '@angular/core';
import { HelloworldService } from './services/helloworld.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calcul-empreinte-carbone';

  
  constructor(private helloWorldService: HelloworldService) {
    this.helloWorldService.helloWorld();
  }
}
